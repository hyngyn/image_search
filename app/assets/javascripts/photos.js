   jQuery(function() {
      $('#<%=p[:id]%>').click(function (e) {
        
        //ajax call to fetch photo info
        
        var fetch_id = '<%=p[:id]%>';
        var fetch_secret = '<%=p[:secret]%>';  

        $.ajax({
          type: 'GET',
          url: '/photos/fetch_info',
          dataType: 'json',
          data: { 'id' : fetch_id, 'secret' : fetch_secret },
          success: function(data){

            console.log(data)
            console.log(data.title)
 

            //edit innerHTML of basic_modal
            $('.basic_modal').html(
              "<div id='modal_image'><%= escape_javascript(image_tag p[:url]) %></div><div id='photo_title'><%=%></div>"
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
