class PhotosController < ApplicationController

  def index
    if params[:search].empty?
      redirect_to root_path
    else
      @title = params[:search]
      @photos = flickr.photos.search(:tags => params[:search], :has_geo => 1)
    end

  end

end
