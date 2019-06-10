$(document).ready(function(){

  // slick slider
	$('.colored-blocks').slick({
	  dots: true,
	  infinite: true,
	  speed: 10,
	  fade: true,
	  arrows: false,
	  initialSlide: 3
	});

  // grivna_description_link
	$('.right-side__description_link').click(function(){
    $('.right-side__description').css('display', 'none');
    $('.right-side__info').css('display', 'block');
	});

	$('.right-side__info_link').click(function(){
    $('.right-side__info').css('display', 'none');
    $('.right-side__description').css('display', 'block');
	});


 // pop up window
  $('.menu__link_feedback').click(function(){
    var popup_id =  $('#' + $(this).attr("rel"));
    $(popup_id).show();
    $('.overlay_popup').show();
  });
  $('.overlay_popup, .popup-close').click(function(){
    $('.overlay_popup, .popup').hide();
  });

  // fixed top-nav
  $(window).scroll(function(){
    if($(this).scrollTop() >= 171) {
      $("#top-nav").addClass("top-nav-fixed");
      $(".content").css('padding-top', '65px');
    }
    else{
      $("#top-nav").removeClass("top-nav-fixed");
      $(".content").css('padding-top', '0');
    };
  });


  // animations for different blocks
  $(window).scroll(function(){
    if($(this).scrollTop() > 627 ) {
      $(".red-lines").addClass('animated').addClass('lightSpeedIn');
    }
  });
  $(window).scroll(function(){
    if($(this).scrollTop() > 640 ) {
      $(".text").addClass('animated').addClass('fadeInLeftBig');
    }
  });
  $(window).scroll(function(){
    if($(this).scrollTop() > 1000 ) {
      $(".video").addClass('animated').addClass('fadeInRightBig');
    }
  });
  $(window).scroll(function(){
    if($(this).scrollTop() > 1600 ) {
      $(".left-side__description").addClass('animated').addClass('bounceInLeft');
    }
  });
  $(window).scroll(function(){
    if($(this).scrollTop() > 1600 ) {
      $(".right-side__asphalt-phone").addClass('animated').addClass('bounceInRight');
    }
  });
  $(window).scroll(function(){
    if($(this).scrollTop() > 2000 ) {
      $(".blue-lines").addClass('animated').addClass('lightSpeedIn');
    }
  });
  $(window).scroll(function(){
    if($(this).scrollTop() > 2200 ) {
      $(".gestures").addClass('animated').addClass('fadeInLeftBig');
    }
  });
  $(window).scroll(function(){
    if($(this).scrollTop() > 2700 ) {
      $(".online__left-side").addClass('animated').addClass('bounceInLeft');
    }
  });
  $(window).scroll(function(){
    if($(this).scrollTop() > 2700 ) {
      $(".online__right-side").addClass('animated').addClass('bounceInRight');
    }
  });


  $('.menu__link:not(.menu__link_feedback)').click(function(){
    $('.menu__link').removeClass('menu__link_current');
    $(this).addClass('menu__link_current');
  });


});


function clickToElement(element, height_header) {
  var echLink = $(element);
  echLink.on('click', function () {
      var currLink = $(this);
      var tmp = currLink.attr('href');

      $('html, body').animate({
        'scrollTop': $($(this).attr('href')).offset().top - height_header
      }, 2000);

      return false;
  });
}

$(document).on('scroll', function () {
    scrollToElement('.top-nav a:not(.menu__link_feedback)', 65);
});

clickToElement('.top-nav a:not(.menu__link_feedback)', 65);

      




