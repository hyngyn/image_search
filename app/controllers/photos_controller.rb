class PhotosController < ApplicationController

  def index
    if params[:search].empty?
      redirect_to root_path
    else
      @title = params[:search]
      @photos = flickr.photos.search(:tags => params[:search])
    end
 
 #   @info = []
 #   @photos.each do |photo|
 #     @info << flickr.photos.getInfo(:photo_id => photo.id)
 #   end

  end

end
