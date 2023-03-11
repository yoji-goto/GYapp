Rails.application.routes.draw do
  namespace :public do
    resources :genres, :only => [:edit, :update]
    resources :reviews, :only => [:new, :create, :show] do
      collection do
        patch 'report'
        patch 'hidden'
      end
    end
    resources :comments, :only => [:create] do
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
    resources :reviews, :only => [:show, :index] do
      collection do
        patch 'report'
        patch 'hidden'
      end
    end
    resources :comments, :only => [:create] do
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

  devise_for :customers,skip: [:passwords], controllers: {
  registrations: "customer/registrations",
  sessions: 'customer/sessions'
  }
  devise_for :admins, skip: [:registrations, :passwords] ,controllers: {
  sessions: "admin/sessions"
  }

  get 'homes/about'
 root to: 'homes#top'

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
