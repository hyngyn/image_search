ImageSearch::Application.routes.draw do

  root :to => 'pages#home'
	resources :photos
end
