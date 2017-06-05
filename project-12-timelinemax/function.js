/**
 * Created by PC on 21/05/2017.
 */

$(function () {
    const cd = new TimelineMax({repeat: -1, repeatDelay:0});
    cd
        .to($('.img1'), 1, {x: -300, rotation: 120})
        // .to($('.img1'), 2, {y: 300, scale: 1.2}, '+=2')
        .to($('.img1'), 2, {y: 300, scale: 1.2, rotationY: 360})
        .to($('.img1'), 2, {x: 0, scale: 1, rotation: 210})
        .to($('.img1'), 2, {y: 0, rotation: 0, ease: Back.easeOut.config(1.7)});

    $('.btn-success').click(function (e) {
        e.preventDefault();
        cd.play();
    });
    $('.btn-danger').click(function (e) {
        e.preventDefault();
        cd.stop();
    });
    $('.btn-warning').click(function (e) {
        e.preventDefault();
        cd.reverse();
    });
});