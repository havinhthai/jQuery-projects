/**
 * Created by PC on 02/05/2017.
 */

$(function () {
    $('.accordion div.row').slideUp();

    $('h2').click(function (e) {
        $(this).next().slideToggle();
        $(this).toggleClass('bgChange');
        $(this).children().toggleClass('change');
    });

    $('.fancybox').fancybox();
});