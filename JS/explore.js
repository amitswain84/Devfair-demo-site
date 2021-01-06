var Tabs = {};

Tabs.tabbedContainer = function(selector, containers, nav) {
    $(selector + ' #tab1').addClass('tabbed-container-active');
    $(nav + ' li:first-child a').addClass('nav-active');
    $(nav + ' li a').click(function(e) {
        e.preventDefault();
        $(nav + ' li a').removeClass('nav-active');
        $(this).addClass('nav-active');
        $(containers).removeClass('tabbed-container-active');
        var $href = $(this).attr('href');
        $($href).addClass('tabbed-container-active');

    });
};

jQuery(document).ready(function($) {
    Tabs.tabbedContainer('.tabs', '.tabbed-container', '.tabbed-nav');
});