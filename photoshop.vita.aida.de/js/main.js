$(document).ready(function(){

	// slickSlider

	$('.slider').slick({
	  dots: false,
	  infinite: true,
	  speed: 1000,
	  fade: false,
	  arrows: true,
	  initialSlide: 0,
	  autoplay: true,
	  mobileFirst: true,
	  responsive: [
	    {
	      breakpoint: 319,
	      settings: {
	        arrows: false
	      }
	    },
	    {
	      breakpoint: 575,
	      settings: {
	        arrows: true,
	        prevArrow: $(".slider__arrows_left"),
	  		nextArrow: $(".slider__arrows_right")
	      }
	    }
	  ]
	});



	/************* scroll up button */
  	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.toTopArrow').fadeIn();
		} else {
			$('.toTopArrow').fadeOut();
		}
	});

	$('.toTopArrow').click(function(){
		$("html, body").animate({ scrollTop: 0 }, 2000);
		return false;
	});
	

	/******************* isotope */

	var $grid = $('.fotoshootingBlock__isotope').isotope({
  		itemSelector: '.fotoshootingBlock__isotope_item',
	  	layoutMode: 'fitRows'
	});

	// filter items on button click
	$('.fotoshootingBlock__filterGroup').on( 'click', ".fotoshootingBlock__btn", function() {
	  var filterValue = $(this).attr('data-filter');
	  $grid.isotope({ filter: filterValue });
	});

	/*** filtring in isotope category ***/
	$(".fancybox").on("click", function(){
		var visibleLinks = $(".facybox:visible");

	});

   	/* adding active class for links in isotop-gallery section with jQuery */

	function addActiveClass(){
	    const $this = $(this);
    	$this.parent().siblings().find('.fotoshootingBlock__btn_active').removeClass('fotoshootingBlock__btn_active');
        $this.addClass('fotoshootingBlock__btn_active');
    }

	$(".fotoshootingBlock__btn").on('click', addActiveClass);


	/************ FancyBox **********/
	$('.fotoshootingBlock__link').on('click', function() {
	  const visibleLinks = $('.fotoshootingBlock__link:visible');

	  $.fancybox.open( visibleLinks, {}, visibleLinks.index( this ) );

	  return false;
	});
 
    /******** burgerMenu animation ***** */

  $(".header__burgerMenu").on("click", function(event){
    event.preventDefault();
    $(this).toggleClass("header__burgerMenu_active");
  });

  /******* mobile_menu visibylity button ********/

  $(".header__burgerMenu").on("click", function(){
    $(".header__nav_mobileMenu").toggleClass("header__mobileMenu_visible");
  });


  ////////// equalHeight
  function equalHeight(){
	$(".middleBlock__p").css("height", "auto");

  	let firstCol = $(".middleBlock__p_first").height();
  	let secondCol = $(".middleBlock__p_second").height();
  	let thirdCol = $(".middleBlock__p_third").height();
  	let fourthCol = $(".middleBlock__p_fourth").height();

  	let max = Math.max(firstCol, secondCol, thirdCol, fourthCol);

  	$(".middleBlock__p").css("height", max);
  }

  equalHeight();
  $(window).resize(equalHeight);

}); // end of ready