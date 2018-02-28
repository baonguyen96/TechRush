$(function() {

    $('#sitemap-container').find('.sublist').click(function (e) {
        e.stopPropagation();
        $(this).next().slideToggle();
    });

});