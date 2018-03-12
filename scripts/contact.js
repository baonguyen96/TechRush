$(function () {
    $('#contact-form').submit(function (e) {
        e.preventDefault();
        $('#form-submit-alert').fadeIn(500).delay(3000).fadeOut(500);
        $('#contact-form')[0].reset();
    });
});