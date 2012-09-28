 jQuery(function() {
    $('.each_photo_container').click(function (e) {

  
      var photo_id = $(this).data('id');
      var photo_secret =  $(this).data('secret');
      var photo_farm = $(this).data('farm');
      var photo_server = $(this).data('server');

      //Generate url for larger photo
      var img_url = "http://farm"+photo_farm+".static.flickr.com/"+photo_server+"/"+photo_id+"_"+photo_secret+".jpg";




      //Disable cache for AJAX requests for IE purposes
      $.ajaxSetup({ cache: false });

      //ajax call to fetch photo info
      $.ajax({
        type: 'GET',
        url: '/photos/fetch_info',
        dataType: 'json',
        data: { 'id' : photo_id, 'secret' : photo_secret },
        success: function(data){


          //second AJAX call to Google Place API for hotels
          /*
          $.ajax({
           type: 'GET',
            url: 'https://maps.googleapis.com/maps/api/place/search/json',
            dataType: 'json',
            data: {
             'location' : data.location.latitude+","+data.location.longitude,
             'radius' : 500,
             'key' : "AIzaSyChTo6XTAUpKdgUtgY0xH4FSO-fzfR8WsE",
             'sensor' : "false",
             'types' : "lodging"
             },

            success: function(hotel){
              console.log(hotel);
            }
          });
          */
                           
          //edit innerHTML of basic_modal
          $('.basic_modal').html(
            "<div id='google_map_location_container'>"+
              "<div id='googlemap_image'>"+
                "<img src=\""+ "http://maps.googleapis.com/maps/api/staticmap?center=" + data.location.latitude + "," + data.location.longitude + "&zoom=14&size=400x300&sensor=false&markers=" + data.location.latitude + "," + data.location.longitude + "\">"+
              "</div>" +
  
              "<div class='modal_photo_location'>"
                  +data.location.region._content+ ", " +data.location.country._content+ " (" + data.location.latitude + ", " +data.location.longitude + ")" +
               "</div>" +
            "</div>"+

            "<div id='modal_image'>"+
              "<img src=\""+img_url+"\">"+
            "</div>"+

            "<div id='modal_photo_info_container'>"+
               "<div class='modal_photo_attr'>"
                  +data.title+ 
               "</div>"+ 
               "<div class='modal_photo_attr'>"+
                  "By: " +data.owner.username+ 
               "</div>"+
            "</div>"
                 
           );



          //displays modal
          $('.basic_modal').modal({
            overlayClose:true
          });

        } //end success: function(result)
      });

     return false;
    });
  });
