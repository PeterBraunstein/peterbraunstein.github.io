// change nav bar colors
$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 600) {
        $(".navLink").removeClass("whiteLink");
        $(".brand").removeClass("brandYellow");
        $(".menuBar").removeClass("barWhite");
    } else {
        $(".navLink").addClass("whiteLink");
        $(".brand").addClass("brandYellow");
        $(".menuBar").addClass("barWhite");
    }
});
