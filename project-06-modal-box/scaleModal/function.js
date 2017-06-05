/**
 * Created by PC on 18/05/2017.
 */

$(function () {
    $('#nut').click(function (e) {
        $('.noidung').addClass('noidunghienra');
        $('.momo').addClass('momodira');
    });

    $('.nutdong, .momo').click(function (e) {
        $('.noidung').removeClass('noidunghienra');
        $('.momo').removeClass('momodira');
    })
});