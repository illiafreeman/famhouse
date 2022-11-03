$(document).ready(function() {

    /*top menu toggle*/
    $('.menu-btn').click(function(){
        $('.header-nav').toggleClass('vis');
        $('body').toggleClass('oh');
        $(this).toggleClass('close');
    });

    /*end top menu toggle*/

    /*scroll to top*/
    var scrollTop = $(".scroll-top");
    $(window).scroll(function() {
        var topPos = $(this).scrollTop();
        if (topPos > 700) {
            $(scrollTop).addClass('vis');
        } else {
            $(scrollTop).removeClass('vis');
        }
    });
    $(scrollTop).click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
        return false;
    });
    /*end scroll to top*/
    $('#slick_1').slick({
        slidesToShow: 1,
        fade: true,
    });
    $('.more').click(function(){
        $('body').addClass('oh');
        $('.modal').addClass('vis');
    });
    $('.close').click(function(){
        $('body').removeClass('oh');
        $('.modal').removeClass('vis');
    });
    $(".phone").mask("+7 (999) 999-99-99");
});








