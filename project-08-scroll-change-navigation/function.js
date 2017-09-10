/**
 * Created by PC on 19/05/2017.
 */

$(function () {
    $(window).scroll(function () {
        console.log($(window).scrollTop());
        let offsetTop = $('body').scrollTop();
        console.log(offsetTop);
        console.log('> ', $('body').offset().top);

        if (offsetTop >= 430) {
            $('#mainNav').addClass('active');
        } else {
            $('#mainNav').removeClass('active');
        }
    });
});