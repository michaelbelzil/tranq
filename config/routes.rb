Rails.application.routes.draw do

  get 'tranqs/:id/get_happiness', to: 'tranqs#get_happiness', as: 'update_happiness'

  get 'items/index'
  get 'items/show'
  get 'items/new'
  get 'items/create'
  post 'items/create'
  devise_for :users
  root to: 'pages#home'
  get 'tranqs/:id', to: 'tranqs#show', as: 'tranq'
  post 'tranqs/:id', to: 'items#create'
  patch "tranqs/:id/feed", to: "tranqs#feed", as: 'tranq_feed'
  patch "tranqs/:id/tuck_in", to: "tranqs#tuck_in", as: 'tranq_tuck_in'
  patch "tranqs/:id/visit", to: "tranqs#visit", as: 'tranq_visit'
  patch "tranqs/:id/interact", to: "tranqs#interact", as: 'tranq_interact'
  patch "tranqs/:id", to: "tranqs#update"

  delete "favourites/:id", to: "favourites#destroy", as: 'favourite'



  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
