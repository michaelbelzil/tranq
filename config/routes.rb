Rails.application.routes.draw do
  devise_for :users
  resources :users
  root to: 'tranqs#show'
  get 'tranqs/:id', to: 'tranqs#show', as: 'tranq'
  patch "tranqs/:id", to: "tranqs#feed", as: 'tranq_feed'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
