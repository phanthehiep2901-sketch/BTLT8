$(document).ready(function () {
    // Xử lý Passport
    $('input[name="passport"]').change(function () {
        if ($(this).val() === 'Yes') {
            $('#passportBox').show();
        } else {
            $('#passportBox').hide();
        }
    });

    // Xử lý Credit Card
    $('input[name="credit"]').change(function () {
        if ($(this).val() === 'Yes') {
            $('#creditBox').show();
        } else {
            $('#creditBox').hide();
        }
    });
});