/**
 * Created by PC on 02/05/2017.
 */

// slideUp, slideDown, slideToggle, Click event
// this, next, children
// addClass, removeClass, toggleClass

$(function () {
    $('.ndmoikhoi').slideUp();

    $('.motkhoi h3').click(function (e) {
        //$('.ndmoikhoi').slideUp();
        $(this).children().children().toggleClass('hidden');
        $(this).toggleClass('bgCarrot');
        $(this).next('.ndmoikhoi').slideToggle(500);
    });
});