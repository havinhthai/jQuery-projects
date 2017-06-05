/**
 * Created by PC on 18/05/2017.
 */

$(function() {
    $('button').click(function () {
        $('nav').toggleClass('moveIn');
        $('main').toggleClass('moveOut');
        console.log(
            'Fine~'
        )
    });
});