/**
 * Created by PC on 20/05/2017.
 */

$(function () {
    // TweenMax.to($('.img1'), 2, {x: 400, opacity: 0});
    //TweenMax.to($('.img2'), 2, {x: -400, opacity: 0, visibility: 'hidden'});
    // TweenMax.from($('.img2'), 2, {y: 400, opacity: 0, delay: 1});
    //TweenMax.fromTo($('.img3'), 3, {x: -400, opacity: 0}, {y: -200, opacity: 1});

    $('.img1').click(function (e) {
        TweenMax.to($(this), 1, {scale: "+=.3", x: '+=150'})
    });

    TweenMax.staggerFrom($('img'), 2, {y: 200, opacity: .3}, .2);
});