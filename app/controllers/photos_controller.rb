class PhotosController < ApplicationController

  def index
    jUpdate
  end



  def jUpdate
    page = params[:page] || 1
    per_page = params[:per_page] || 20

    if params[:search].empty?
      redirect_to root_path
    else
      @title = params[:search]
      @photos  = flickr.photos.search(:tags => params[:search], :has_geo => 1, 
                                      :per_page => per_page, :page => page)
      
      @photos_array = []
    
      @photos.each do |photo|
        url = "http://farm#{photo.farm.to_s}.static.flickr.com/#{photo.server.to_s}/#{photo.id.to_s}_#{photo.secret.to_s}_z.jpg"
        data = {:url=>url}
        @photos_array << data
      end
    end
  end

 

end
