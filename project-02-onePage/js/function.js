/**
 * Created by PC on 02/05/2017.
 */

// .animate(scrollTop)
// offset().top
// ease jquery gsgd

$(function () {
    $('.collapse .nav li a').click(function (e) {
        if (this.hash !== '') {
            e.preventDefault();

            let hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top - 55
            }, 1200, 'easeOutExpo',function () {
                window.location.hash = hash;
            });
        }
    });
});