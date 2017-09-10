function formatMoney(money) {
    let total;
    let a;
    if (money > 1e9) {
        a = money / 1e9;
        if (money % 1e9 === 0) {
            total = a + ' tỷ';
        } else {
            total = Math.floor(a) + ' tỷ ' + (money % 1e9) / 1e6;
        }
    } else if (money > 1e6) {
        a = money / 1e6;
        if (money % 1e6 === 0) {
            total = a + ' triệu';
        } else {
            total = Math.floor(a) + ' triệu ' + (money % 1e6) / 1e3;
        }
    } else if (money > 1e3) {
        a = money / 1e3;
        if (money % 1e3 === 0) {
            total = a + ' nghìn đồng';
        } else {
            total = Math.floor(a) + ' nghìn ' + (money % 1e3);
        }
    }

    return total;
}

$('#price').keyup(function () {
    const $price = $(this).val() * 1000;
    if ($price === 0) {
        $('#demoPrice').text('');
        $('#realPrice').val(0);
    } else {
        $('#realPrice').val($price);
//            $('#demoPrice').text($price.replace(/(?:(^\d{1,3})(?=(?:\d{3})*$)|(\d{3}))(?!$)/mg, '$1$2.'))
        $('#demoPrice').text(formatMoney($price));
    }
});