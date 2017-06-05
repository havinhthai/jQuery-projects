/**
 * Created by PC on 19/05/2017.
 */

$(function () {

    let autoSlide = setInterval(function () {
        $('.nextBtn').trigger('click');
    }, 4000);

    $('.nextBtn').click(function (e) {
        clearInterval(autoSlide);

        const active = $('.active');
        const nextImg = active.next();

        if (nextImg.length === 0) {
            $('.dots li:nth-child(1)').addClass('active');
            active.addClass('leftOut').removeClass('active').one('webkitAnimationEnd', function () {
                $(this).removeClass('leftOut');
            });
            $('.slideImg:nth-child(1)').addClass('active').addClass('leftIn').one('webkitAnimationEnd', function () {
                $(this).removeClass('leftIn');
            });
        } else {
            active.addClass('leftOut').removeClass('active').one('webkitAnimationEnd', function () {
                $(this).removeClass('leftOut');
            });
            nextImg.addClass('active').addClass('leftIn').one('webkitAnimationEnd', function () {
                $(this).removeClass('leftIn');
            });
        }

        autoSlide = setInterval(function () {
            $('.nextBtn').trigger('click');
        }, 4000)
    });

    $('.prevBtn').click(function (e) {
        clearInterval(autoSlide);

        const active = $('.active');
        const prevImg = active.prev();

        if (prevImg.length === 0) {
            $('.dots li:nth-child(3)').addClass('active');
            active.addClass('rightOut').removeClass('active').one('webkitAnimationEnd', function () {
                $(this).removeClass('rightOut');
            });
            $('.slideImg:nth-child(3)').addClass('active').addClass('rightIn').one('webkitAnimationEnd', function () {
                $(this).removeClass('rightIn');
            });
        } else {
            active.addClass('rightOut').removeClass('active').one('webkitAnimationEnd', function () {
                $(this).removeClass('rightOut');
            });
            prevImg.addClass('active').addClass('rightIn').one('webkitAnimationEnd', function () {
                $(this).removeClass('rightIn');
            });
        }

        autoSlide = setInterval(function () {
            $('.nextBtn').trigger('click');
        }, 4000);
    });

    $('.dots li').click(function (e) {
        clearInterval(autoSlide);

        $('.dots li').removeClass('active');
        $(this).addClass('active');

        $('.slideImg:nth-child(' + ($(this).index()+1) + ')').addClass('active').addClass('rightIn').one('webkitAnimationEnd', function () {
            $(this).removeClass('rightIn');
        });

        autoSlide = setInterval(function () {
            $('.nextBtn').trigger('click');
        }, 4000);
    });
});