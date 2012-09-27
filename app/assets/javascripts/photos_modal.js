    jQuery(function() {
      $('#<%=photo[:id]%>').click(function (e) {
        
        //ajax call to fetch photo info
        
        var fetch_id = '<%=photo[:id]%>';
        var fetch_secret = '<%=photo[:secret]%>';  

        //Disable cache for AJAX requests for IE purposes
        $.ajaxSetup({ cache: false });


        $.ajax({
          type: 'GET',
          url: '/photos/fetch_info',
          dataType: 'json',
          data: { 'id' : fetch_id, 'secret' : fetch_secret },
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
                "<%= escape_javascript(image_tag photo[:url]) %>"+
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



            //load modal
            $('.basic_modal').modal({
              overlayClose:true
            });

          } //end success: function(result)
        });



        return false;
      });
    });
