$(document).ready(function() {

    /*top menu toggle*/
    
    $('.hambu').click(function(){
        $('.header-navgroup').toggleClass('vis');
        $('body').toggleClass('oh');
        $('#nav-icon4').toggleClass('open');
    });
    $('.menu').click(function () {
        $('.header-navgroup').removeClass('vis');
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
    if($(window).width() > 1023){
        //alert('asd')
        
    }
});
$( window ).on( "load", function() {

    new WOW().init();

});
$('.header-nav__link').on('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top - 10
    }, 1500, 'easeInOutExpo');
    remove_hash_from_url();
    $('.header-navgroup').removeClass('vis');
    $('body').removeClass('oh');
    $('#nav-icon4').removeClass('open');
    event.preventDefault();
    //remove_hash_from_url();
});
function remove_hash_from_url() {
    var uri = window.location.toString();

    if (uri.indexOf("#") > 0) {
        var clean_uri = uri.substring(0,
            uri.indexOf("#"));

        window.history.replaceState({},
            document.title, clean_uri);
    }
}





