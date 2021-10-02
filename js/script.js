
$(document).ready(function () {
    $('#carouselButton').click(function () {
        if ($('#carouselButton').children('span').hasClass('fa-pause')) {
            $('#mycarousel').carousel('pause');
            $('#carouselButton').children('span').removeClass('fa-pause');
            $('#carouselButton').children('span').addClass('fa-play');
        }
        else if ($('#carouselButton').children('span').hasClass('fa-play')) {
            $('#mycarousel').carousel('cycle');
            $('#carouselButton').children('span').removeClass('fa-play');
            $('#carouselButton').children('span').addClass('fa-pause');
        }
    });
    $('#mycarousel').carousel({
        interval: 2000
    });

    $('#Reserve').click(function () {
        $('#ReserveModal').modal('show');
    });

    $('#reserveButton').click(function () {
        $('#ReserveModal').modal('hide');
    });

    $('#login').click(function () {
        $('#loginModal').modal('show');
    });

    $('#loginButton').click(function () {
        $('#loginModal').modal('hide')
    });
})
