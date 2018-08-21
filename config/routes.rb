Rails.application.routes.draw do
  get 'items/index'
  get 'items/show'
  get 'items/new'
  get 'items/create'
  devise_for :users
  root to: 'pages#home'
  get 'tranqs/:id', to: 'tranqs#show', as: 'tranq'
  patch "tranqs/:id/feed", to: "tranqs#feed", as: 'tranq_feed'
  patch "tranqs/:id", to: "tranqs#update"

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
