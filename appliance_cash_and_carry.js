jQuery(function($) {

    $(document).ready(function() {
        
        // normal refresh
        $('div#showroom_text').css('height', $("img#showroom_pic").height());

        // hard refresh
        $("img#showroom_pic").load(function(){
            $('div#showroom_text').css('height', $("img#showroom_pic").height());
          });

        // when windows are resizing
        $(window).resize(function() { 
            $("img#showroom_pic").each(function(){
                var height = $(this).height();
                if ($(window).width() > 959){
                    $('div#showroom_text').css('height', height);
                }
              });
        });
    });
});