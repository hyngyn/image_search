# Load the rails application
require File.expand_path('../application', __FILE__)

# Initialize the rails application
ImageSearch::Application.initialize!

#Flickr
require 'flickraw'
FlickRaw.api_key="c54dfb241de960a09173dd0beded39b0"
FlickRaw.shared_secret="5e931496626c40cc"
