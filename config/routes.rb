Rails.application.routes.draw do
  namespace :public do
    resources :genres, :only => [:edit, :update]
    resources :reviews, :only => [:new, :create, :show] do
      scope module: :reviews do
        resources :comments, :only => [:create] do
          collection do
            patch 'report'
            patch 'hidden'
          end
        end
      end
      collection do
        patch 'report'
        patch 'hidden'
      end
    end
    resources :movies, :only => [:index, :show] do
      collection do
        get 'seach'
        get 'genre'
      end
    end
    resources :customers, :only => [:show, :edit, :update] do
      collection do
        patch 'withdrawal'
      end
    end
  end

  namespace :admin do
    resources :genres, :only => [:new, :create, :edit]
    resources :reviews, :only => [:show] do
      scope module: :reviews do
        resources :comments, :only => [:create] do
          collection do
            patch 'report'
            patch 'hidden'
          end
        end
      end
      collection do
        patch 'report'
        patch 'hidden'
      end
    end
    resources :movies, :only => [:index, :show] do
      collection do
        get 'seach'
        get 'genre'
      end
    end
    resources :customers, :only => [:show, :edit, :update, :index] do
      collection do
        patch 'withdrawal'
      end
    end
  end

  devise_for :customers
  devise_for :admins

  get 'homes/about'
 root to: 'homes#top'

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
