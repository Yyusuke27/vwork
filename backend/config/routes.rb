require 'sidekiq/web'

Rails.application.routes.draw do
  authenticated :user, lambda { |u| u.admin? } do
    mount Sidekiq::Web, :at => '/sidekiq'
  end

  namespace 'api' do
    namespace 'v1' do
      resources :workspaces, :only => [:index, :create, :update]

      resources :users, :only => [] do
        collection do
          get :current
        end
      end

      resources :project, :only => [] do
        collection do
          get :near_deadline
          get :recent
        end
      end

      namespace :workspaces do
        resources :invitations, :only => [:index, :update] do
          member do
            get :auth
            post :register_invitee
          end
        end

        resources :members, :only => [:index]
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
