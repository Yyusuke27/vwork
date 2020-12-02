require 'sidekiq/web'

Rails.application.routes.draw do
  authenticated :user, lambda { |u| u.admin? } do
    mount Sidekiq::Web, :at => '/sidekiq'
  end

  namespace 'api' do
    namespace 'v1' do
      resources :workspaces, :param => :path_id, :only => %i[index create update] do
        namespace 'projects' do
          resources :my, :only => %i[index]
          resources :members, :only => %i[index create]
          resources :new_members, :only => %i[index]
        end
        resources :projects, :only => %i[index show create]

        namespace 'tasks' do
          resources :members, :only => %i[show]
          resources :my, :only => %i[index]
          resources :near_deadline, :only => %i[index]
          resources :projects, :only => %i[show]
          resources :recent, :only => %i[index]
        end
        resources :tasks, :only => %i[index show create update destroy]

        namespace 'invitations' do
          resources :auth, :param => :invitation_token, :only => %i[show]
          resources :register, :only => %i[create]
        end
        resources :invitations, :only => %i[index update]

        namespace 'attendances' do
          resources :today, :only => %i[index]
        end
      end

      namespace 'users' do
        resources :current, :only => %i[index]
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
