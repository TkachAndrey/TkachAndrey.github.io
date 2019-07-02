$(function(){
    // slickSlider
    $('.slider__inner, .news__slider_inner').slick({
        nextArrow: '<button type="button" class="slick-next slick-btn"></button>',
        prevArrow: '<button type="button" class="slick-prev slick-btn"></button>',
        infinite: false
    });

    // mobile menu
    $(".header__btn_menu").on("click", function(){
        $(".menu ul").slideToggle();
    });

    // styler of select
    $('.form__box-inner select').styler();

});