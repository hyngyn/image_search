ImageSearch::Application.routes.draw do


  match '/photos/fetch_info', :to => 'photos#fetch_info', :via => 'GET'

  root :to => 'pages#home'
	resources :photos
  
end
