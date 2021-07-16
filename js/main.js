$(document).ready(function () {
    new WOW().init();

    //////////** fixed **//////////
    if ($(this).scrollTop() >= 50) {
        $("header").addClass("header-scroll");
    } else {
        $("header").removeClass("header-scroll");
    }
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 50) {
            $("header").addClass("header-scroll");
        } else {
            $("header").removeClass("header-scroll");
        }
    });
    //////////** testmonials-slider **//////////
    var mainswiper = new Swiper('.testmonials-slider .swiper-container', {
        spaceBetween: 10,
        loop: true,
        autoplay: {
            delay: 5000,
        },
    });
    //////////** feats slider **//////////
    if ($(window).width() <= 991) {
        $(".partner").wrap("<div class='swiper-slide'></div>");
        $(".partners-grid").addClass("swiper-wrapper").removeClass("partners-grid");

        var featswiper = new Swiper('.partners-content .swiper-container', {
            spaceBetween: 4,
            loop: true,
            // autoplay: {
            //     delay: 5000,
            // },
            pagination: {
                el: '.partners-content .swiper-pagination',
                clickable: true,
            },
            breakpoints: {
                0: {
                    slidesPerView: 2,
                },
                767: {
                    slidesPerView: 3,
                },
                991: {
                    slidesPerView: 4,
                },
            },
        });
    }
    ///////// ** menu ** ///////// 
    $('.menu-icon').click(function () {
        $(".side-menu-section").slideToggle("300", function () {
            $('.side-menu').toggleClass("active");;
        });
        $(".header-nav").toggleClass("menu-active");
        $(".menu-icon").toggleClass("active");
        $("body").toggleClass("overflow");
    })
    ///////// ** scroll ** ///////// 
    $('.scroll-btn').on('click', function (e) {
        $(document).off("scroll");

        var target = $(this).attr("data-href")
        menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top - 30
        }, 500, 'swing');
    });
});