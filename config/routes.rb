ImageSearch::Application.routes.draw do


  match '/photos/fetch_info', :to => 'photos#fetch_info', :via => 'GET'
#  match '/photos/fetch_hotel', :to => 'photos#fetch_hotel', :via => 'GET'

  root :to => 'pages#home'
	resources :photos
  
end
