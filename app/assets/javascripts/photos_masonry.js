      $(function () {

        var $container = $('#photos_container');

        $container.imagesLoaded(function(){
          $container.masonry({
           itemSelector : '.each_photo_container',
          });
        });
        
        
       /*
        $container.infinitescroll({
          navSelector  : 'div.#page_navigation',            
                  // selector for the paged navigation (it will be hidden)
          nextSelector : 'div.#page_navigation a',    
                  // selector for the NEXT link (to page 2)
          itemSelector : '.each_photo_container'          
                   // selector for all items you'll retrieve

        },
        //trigger masonry on infinitescroll callback and add id to div
          function(newElements){
            var $newElems = $(newElements).css({ opacity: 0 });
            $newElems.imagesLoaded(function(){
              $newElems.animate({ opacity: 1 });
              $newElems.attr('id', this.id);
              $container.masonry('appended', $newElems, true);


            });
          }

        );
       */

      });
