/**
 * Created by PC on 19/05/2017.
 */

$(function () {
    $(window).scroll(function () {
        $('img').each(function () {
            let windowOffset = $(window).scrollTop() + 600;
            let elementsOffset = $(this).offset().top;

            if (elementsOffset <= windowOffset) {
                // $(this).addClass('fadeIn');
                $(this).addClass('fadeInUp animated');
                console.log('Ok');
            }
        });
    });
});