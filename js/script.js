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


// jQuery scroll to
(function() {
    $('li a[href*=#]').bind("click", function(e) {
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top - 79
        }, 1000);
        e.preventDefault();
    });
}());
});