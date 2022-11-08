$(document).ready(function() {

    /*top menu toggle*/
    
    $('.hambu').click(function(){
        $('.header-navgroup').toggleClass('vis');
        $('body').toggleClass('oh');
        $('#nav-icon4').toggleClass('open');
    });
    $('.menu').click(function () {
        $('.navleft').removeClass('vis');
        $('body').removeClass('oh');
        $('#nav-icon4').removeClass('open');
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
        $('.scroll-top').addClass('none');
    });
    $('.close').click(function(){
        $('body').removeClass('oh');
        $('.modal').removeClass('vis');
        $('.scroll-top').removeClass('none');
    });
    $(".phone").mask("+7 (999) 999-99-99");
});








