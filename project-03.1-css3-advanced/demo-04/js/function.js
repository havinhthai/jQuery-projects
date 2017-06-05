/**
 * Created by PC on 03/05/2017.
 */

$(function () {
    $('.noidungthem').slideUp();
    $('.nutload').click(function (e) {
        $('.noidungthem').slideDown();
        TweenMax.staggerFrom($('.noidungthem .to'), .4, {top: 100, opacity: 0}, .4)
    })
});