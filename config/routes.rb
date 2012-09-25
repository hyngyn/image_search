ImageSearch::Application.routes.draw do

  controller :photos do
    get :fetch_info
  end

  root :to => 'pages#home'
	resources :photos
  
end
