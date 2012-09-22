module PhotosHelper

  def flickr_url(photo)
    "http://farm#{photo.farm.to_s}.static.flickr.com/#{photo.server.to_s}/#{photo.id.to_s}_#{photo.secret.to_s}_m.jpg"
  end

  def modal_url(photo)
    "http://farm#{photo.farm.to_s}.static.flickr.com/#{photo.server.to_s}/#{photo.id.to_s}_#{photo.secret.to_s}_z.jpg"
  end

end
