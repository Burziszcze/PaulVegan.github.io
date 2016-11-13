jQuery(function($) {


// Parallax JS
$('.parallax-window').parallax({ imageSrc: './images/img_3.jpg' });


(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.scroll-up').fadeIn();
        } else {
            $('.scroll-up').fadeOut();
        }
    });
}());

});