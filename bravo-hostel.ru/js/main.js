$(document).ready(function(){

	/*tabs window*/
 	$( function() {
    	$( "#tabs_1" ).tabs();
      $( "#tabs_2" ).tabs();
  	} );


  	
 	/*vk Widgets*/
    VK.init({apiId: 5676364, onlyWidgets: true});
    VK.init({apiId: 6388453, onlyWidgets: true});

    $(document).ready(function() {
    	VK.Widgets.CommunityMessages("vk_community_messages", 158882697);
    }); 



    /*FancyBox*/
    $(document).ready(function() { 
        $("a.grouped_elements").fancybox({
            'hideOnOverlayClick' : true,
          'transitionIn'  : 'elastic',
          'transitionOut' : 'elastic',
          'speedIn'   : 600, 
          'speedOut'    : 200, 
          'overlayShow' : true,
          'margin' : 10,
          'overlayOpacity' : 0.9,
          'overlayColor' : '#000'
          });
      }); 
} );