/**
 * Created by PC on 19/05/2017.
 */
// Làm thủ công
/* $(function () {
    $('nav ul li a').click(function (e) {
        e.preventDefault();

        let listName = $(this).data('class');

        $('h3').text($(this).text());

        $('.content ul li').each(function () {
            if ($(this).hasClass(listName)) {
                $(this).show(300);
            } else {
                $(this).hide(300);
            }
        });
    });
}); */

// Isotope

$(function () {
    $('.keyword').keypress(function (e) {
        if (e.keyCode === 13) {
            let keyword = $('.keyword').val();

            if (keyword === '') {
                $('.content ul').isotope({
                    filter: ''
                });
            } else {
                $('.content ul').isotope({
                    filter: '.' + keyword
                });
            }
        }
    });

    // SetInterval to auto reload search
    // setInterval(function () {
    //     let keyword = $('.keyword').val();
    //     if (keyword === '') {
    //         $('.content ul').isotope({
    //             filter: ''
    //         });
    //     } else {
    //         $('.content ul').isotope({
    //             filter: '.' + keyword
    //         });
    //     }
    // });

    $('.content ul').isotope({
        itemSelector: 'li'
    });

    $('nav ul li a').click(function (e) {
        e.preventDefault();

        let listName = $(this).data('class');

        $('h3').text($(this).text());

        if (listName === 'all') {
            $('.content ul').isotope({
                filter: ''
            });
        } else {
            $('.content ul').isotope({
                filter: '.' + listName
            });
        }
    })
});