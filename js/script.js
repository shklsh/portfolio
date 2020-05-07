$(window).on("load", function() {

    $(".loader .inner").fadeOut(500, function() {
        $(".loader").fadeOut(750);
    });

    $(".items").isotope({
        filter: '*',
        animationOptions: {
            duration: 1500,
            easing: 'linear',
            queue: false
        }
    });

})

$(document).ready(function() {

    $('#slides').superslides({
        animation: 'fade',
        play: 3000,
        pagination: false
    });

    let typed = new Typed(".typed", {
        strings: ["Junior Frontend Developer", "Ex-Hotelier", "Exercise Enthusiast"],
        typeSpeed: 70,
        loop: true,
        startDelay: 1000,
        showCursor: false
    });

    $("[data-fancybox]").fancybox();
    
    $("#navigation li a, .titleMessage a").click(function(e) {
      e.preventDefault();

      let targetElement = $(this).attr("href");
      let targetPosition = $(targetElement).offset().top;
      $("html, body").animate({ scrollTop: targetPosition - 50 }, "slow");
    });

    const nav = $("#navigation");
    const navTop = nav.offset().top;

    $(window).on("scroll", stickyNavigation);

    function stickyNavigation () {
        
        let body = $("body");

        if($(window).scrollTop() >= navTop) {
            body.css("padding-top", nav.outerHeight() + "px");
            body.addClass("fixedNav");
        }
        else {
            body.css("padding-top", 0);
            body.removeClass("fixedNav");
        }
    }

});