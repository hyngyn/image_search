class PhotosController < ApplicationController

  def index

    #variables for pagination
    @page = params[:page] || 1
    @per_page = params[:per_page] || 40


    if params[:search].empty?
      redirect_to root_path
    else
      @title = params[:search]

      #Fetches photos from flickr (@photo.class = FlickRaw)
      @photos  = flickr.photos.search(:tags => params[:search], :has_geo => 1, 
                                      :per_page => @per_page, :page => @page)     
    
      @photos_array = @photos.map do |photo|
        s_url = "http://farm#{photo.farm}.static.flickr.com/#{photo.server}/#{photo.id}_#{photo.secret}_m.jpg"
        data = {:s_url=>s_url, :id => photo.id, :secret => photo.secret, :farm => photo.farm, :server => photo.server}
      end

    end

  end


  # fetch_info - Fetches individual photo information
  # Input: photo id and secret
  # Output: photo information as JSON

  def fetch_info

    @info = flickr.photos.getInfo(:photo_id => params[:id], :secret=> params[:secret])
 
    respond_to do |format|
      format.json { render :json => @info }
    end

  end


end
