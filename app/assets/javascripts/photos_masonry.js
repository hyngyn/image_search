/* Masonry/InfiniteScroll for Pinterest-like Layout */

$(function () {

  var $container = $('#photos_container');

  //masonry setup
  $container.imagesLoaded(function(){
    $container.masonry({
     itemSelector : '.each_photo_container'
    });
  });
              
  //infinitescroll setup
  $container.infinitescroll({
    navSelector  : '#page_navigation',   // selector for the paged navigation (it will be hidden)
    nextSelector : '#next_button a',    // selector for the NEXT link (to page 2)
    itemSelector : '.each_photo_container',  // selector for all items you'll retrieve
    bufferPx: 40,
    animate: false,
    extraScrollPx: 50,
    loading  : {
      img: "assets/bg_color.png",
      msgText: '<div id="no_more_text"><p>Loading more images...</p></div>',
      finishedMsg: '<div id="no_more_text"><p>No more images to load.</p></div>'
    }

  },

  //trigger masonry on infinitescroll callback and adds onClick to new images
    function(newElements){
      var $newElems = $(newElements).css({ opacity: 0 });
      $newElems.imagesLoaded(function(){
        $newElems.attr('id', this.id);
        $newElems.attr('data-id', this.id);
        $newElems.attr('data-secret', this.secret);
        $newElems.attr('data-server', this.server);
        $newElems.attr('data-farm', this.farm);

        //add click listener on new elements
        $newElems.click(clickModal(this.id, this.secret, this.farm, this.server));

        $newElems.animate({ opacity: 1 });
        $container.masonry('appended', $newElems, true);
      });
    }

  );
 
});
