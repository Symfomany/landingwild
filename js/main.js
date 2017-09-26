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
        onLeave: function (index, nextIndex, direction) {
            console.log(index)
            if (index === 0) {
                $("#wrapper").css('background-color', '#152318');
            }
            else if (index === 1) {
                $("#wrapper").css('background-color', '#18251c');
            } else if (index === 2) {
                $("#wrapper").css('background-color', '#1d1825');

            } else if (index === 3) {
                $("#wrapper").css('background-color', '#252118');

            } else if (index === 4) {
                $("#wrapper").css('background-color', '#251821');

            } else if (index === 5) {
                $("#wrapper").css('background-color', '#0e1616');

            }
            else if (index === 6) {
                $("#wrapper").css('background-color', '#0b040c');
            }
            else {
                $("#wrapper").css('background-color', '#05060a');

            }

        }

    });



});