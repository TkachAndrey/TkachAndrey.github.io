$(document).ready(function(){
	$('.slider__image').slick({
	  dots: false,
	  autoplay: true,
	  autoplaySpeed: 3000,
	  infinite: true,
	  speed: 1000,
	  cssEase: 'linear',
	  appendArrows: $('.slider__arrows'),
	  prevArrow: '<div class="slider__arrow slider__arrow_left"><img src="img/left-arrow.png" alt=""></div>',

	  nextArrow: '<div class="slider__arrow slider__arrow_right"><img src="img/right-arrow.png" alt=""></div>'
	});



	// pop up window
  $('.top__item_logIn').click(function(){
    var popup_id =  $('#' + $(this).attr("rel"));
    $(popup_id).show();
    $('.overlay_popup').show();
  });
  $('.overlay_popup, .popup-close').click(function(){
    $('.overlay_popup, .popup').hide();
  });

  // fixed navi
  $(window).scroll(function(){
    if($(this).scrollTop() >= 92) {
      $("#navi").addClass("navi-fixed");
      $("body").css('padding-top', '77px');
    }
    else{
      $("#navi").removeClass("navi-fixed");
      $("body").css('padding-top', '0');
    };
  });


// show/hide password
  	var inputCheck = $(".checkIn__form_password-input");
	$("#eyeCheck").click(function(){
		
		if (inputCheck.attr("type") == "password"){
			$(this).css("background", "url(../img/password-eye1.svg) no-repeat center center");
			inputCheck.attr("type", "text");
		}else{
			$(this).css("background", "url(../img/password-eye-close1.svg) no-repeat center center");
			inputCheck.attr("type", "password");
		};
	});

	var inputReg = $(".registration__form_password-input");
	$("#eyeReg").click(function(){
		
		if (inputReg.attr("type") == "password"){
			$(this).css("background", "url(../img/password-eye.svg) no-repeat center center");
			inputReg.attr("type", "text");
		}else{
			$(this).css("background", "url(../img/password-eye-close.svg) no-repeat center center");
			inputReg.attr("type", "password");
		};
	});



	$('.checkIn__form_link').click(function(){
	    $('.checkIn').css('display', 'none');
	    $('.registration').css('display', 'block');
	});

	$('.registration__form_link').click(function(){
	    $('.registration').css('display', 'none');
	    $('.checkIn').css('display', 'block');
	});


});

// scroll up-------------------------------------

$('#scrollup').click(function(){
    $("html, body").animate({ scrollTop: 0 }, 2000);
    return false;
});
// -----------------------------------------------

