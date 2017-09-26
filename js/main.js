$(document).ready(function () {
    $('#fullpage').fullpage({
        navigation: true,
        navigationPosition: 'right',
        easing: 'easeOutQuint',
        autoScrolling: true,
        fadingEffect: true,
        parallax: true,
        scrollingSpeed: 700,
        dragAndMove: true,
        scrollOverflow: false,
        menu: '#menu',
    });
});