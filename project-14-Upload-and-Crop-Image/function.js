let $uploadCrop = $('#upload-image').croppie({
    enableExif: false,
    viewport: {
        width: 200,
        height: 200
    },
    boundary: {
        width: 300,
        height: 300
    }
});

$('#upload').on('change', function () {
    if (this.files && this.files[0]) {
        const reader = new FileReader();

        reader.onload = function (e) {
            $('.upload-image').addClass('ready');
            $uploadCrop.croppie('bind', {
                url: e.target.result,
                // points: [200,200,200,200]
            }).then(function(){
                console.log('jQuery bind complete');
            });
        };

        reader.readAsDataURL(this.files[0]);

        console.log(this);
        console.log($(this));
    } else {
        alert('Sorry - you\'re browser doesn\'t support the FileReader API')
    }
});

$('.upload-result').on('click', function (ev) {
    $uploadCrop.croppie('result', {
        type: 'canvas',
        size: 'viewport',
        format: 'jpeg',
        // circle: true
    }).then(function (resp) {
        $('#newImg').attr('src', resp);
        // console.log(resp);
    });
});
