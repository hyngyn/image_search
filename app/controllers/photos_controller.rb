class PhotosController < ApplicationController

  def index
    @page = params[:page] || 1
    @per_page = params[:per_page] || 40


    if params[:search].empty?
      redirect_to root_path
    else
      @title = params[:search]
      @photos  = flickr.photos.search(:tags => params[:search], :has_geo => 1, 
                                      :per_page => @per_page, :page => @page)
      
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
 
    respond_to do |format|
      format.json { render :json => @info }
    end

  end


#  def fetch_hotel
#    google_url = "https://maps.googleapis.com/maps/api/place/search/json?location=" + params[:location] + "&radius=" + params[:radius] + "&key=" + params[:key] + "&sensor=false&types=lodging"
   
#    puts google_url
#    x = %Q{"admin=true"}

#    @hotels = Hash.from_xml(%x{curl -d "#{x}" "https://maps.googleapis.com/maps/api/place/search/json?location=30.000,30.000&radius=500&key=AIzaSyChTo6XTAUpKdgUtgY0xH4FSO-fzfR8WsE&sensor=false&types=lodging"} ) rescue nil

#    puts @hotels
#    puts "WINNER"


#    respond_to do |format|
#      format.json { render :json => @hotels }
#    end
#  end

end
