Rails.application.routes.draw do
  get 'plans/index'
# For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
resources :plans
root 'plans#index'

end
