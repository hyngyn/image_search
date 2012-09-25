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

   
        url = "http://farm#{photo.farm}.static.flickr.com/#{photo.server}/#{photo.id}_#{photo.secret}.jpg"
        s_url = "http://farm#{photo.farm}.static.flickr.com/#{photo.server}/#{photo.id}_#{photo.secret}_m.jpg"
        data = {:url=>url, :s_url=>s_url, :id => photo.id, :secret => photo.secret}
        @photos_array << data
      end
    end
  end

  def fetch_info

    @info = flickr.photos.getInfo(:photo_id => params[:id], :secret=> params[:secret])

    #delete @photo_info later
    @photo_info = {:title => @info.title,
                  :username => @info.owner.username,
                  :url => @info.urls.first._content,
                  :latitude => @info.location.latitude,
                  :longitude => @info.location.longitude,
                  :region => @info.location.region._content,
                  :country => @info.location.country._content}
 
   respond_to do |format|
     format.json { render :json => @info }
   end
   puts @info.to_json

  end

 

end
