class PhotosController < ApplicationController

  def index
    @title = params[:search]
    @photos = flickr.photos.search(:tags => params[:search])
    
 
 #   @info = []
 #   @photos.each do |photo|
 #     @info << flickr.photos.getInfo(:photo_id => photo.id)
 #   end

  end

end
