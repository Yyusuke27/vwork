require 'sidekiq/web'

Rails.application.routes.draw do
  authenticated :user, lambda { |u| u.admin? } do
    mount Sidekiq::Web, :at => '/sidekiq'
  end

  namespace 'api' do
    namespace 'v1' do
      resources :workspaces, :param => :path_id, :only => %i[index create update] do
        resources :projects, :only => [] do
          collection do
            get :my
          end

          member do
            get :members
            get :new_member
            get :add_member
          end
        end

        resources :tasks, :only => %i[index show create update destroy] do
          collection do
            get :my
            get :near_deadline
            get :recent
          end
        end

        resources :invitations, :only => %i[index update] do
          collection do
            get :auth
            post :register_invitee
          end
        end

        resources :members, :only => %i[index]
      end

      resources :users, :only => [] do
        collection do
          get :current
        end
      end

      mount_devise_token_auth_for 'User', :at => 'auth', :controllers => {
        :registrations => 'api/v1/auth/registrations'
      }
    end
  end

  if Rails.env.development?
    mount LetterOpenerWeb::Engine, :at => '/letter_opener'
  end
end
