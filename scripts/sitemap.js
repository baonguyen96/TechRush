$(function() {
    var $sitemapContainer = $('#sitemap-container');
    toggleSitemapAnchorAppearance($sitemapContainer);

    if(!isCurrentlyOnMobile()) {
        createTooltipsForEachAnchor($sitemapContainer);
        showTooltipOnHover($sitemapContainer);
    }
});


function toggleSitemapAnchorAppearance($sitemapContainer) {
    $sitemapContainer.find('.sublist').click(function (e) {
        e.stopPropagation();
        e.preventDefault();
        $(this).next().slideToggle();
        $(this).toggleClass('dropdown');
    });
}


function createTooltipsForEachAnchor($sitemapContainer) {
    $sitemapContainer.find('a').not('.sublist').each(function () {
        var $aThatIsNotASublist = $(this);
        var parentSublistText = $aThatIsNotASublist.closest('ul').closest('li').find('> .sublist').text();
        if(parentSublistText) {
            var $tooltip = '<span class="tooltiptext tooltiptext-right">From <b><i>' + parentSublistText + '</i></b></span>';
            $(this).append($tooltip);
        }
    });
}


function showTooltipOnHover($sitemapContainer) {
    $sitemapContainer.find('a').not('.sublist').hover(
        function (e) {
            setupTooltipLocation(e, $(this));
        },
        function (e) {
            resetTooltip(e, $(this));
        }
    );
}


function setupTooltipLocation(e, $anchor) {
    e.stopPropagation();
    e.preventDefault();

    var $tooltip = $anchor.find('span');
    var leftSpace = $anchor.offset().left;
    var rightSpace = $(window).width() - leftSpace - $anchor.width();
    var minWidth = $anchor.closest('ul').siblings('a').width() + 10;

    $tooltip.css({
        'display': 'inline-block',
        'width': 'fit-content',
        'height': 'auto',
        'min-width': minWidth + 'px'
    });


    var middleLocation =  $tooltip.height() / 2 -$anchor.height() / 2;

    if(leftSpace > rightSpace) {
        $tooltip.addClass('tooltiptext-left');
    }
    else {
        $tooltip.addClass('tooltiptext-right');
    }

    $tooltip.css({
        'top': -1 * middleLocation + 'px',
        'visibility': 'visible'
    });
}


function resetTooltip(e, $anchor) {
    e.stopPropagation();
    e.preventDefault();
    $anchor.find('span').css({'visibility': 'hidden'});
    $anchor.find('span').removeClass('tooltiptext-right');
    $anchor.find('span').removeClass('tooltiptext-left');
}


function isCurrentlyOnMobile() {
    return $(window).width() <= 480;
}