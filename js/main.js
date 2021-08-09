$(window).on('load', function () {
    if ($(window).width() >= 1500) {
        numbers(1500)
    } else {
        numbers(500)
    }
});
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
            $('.side-menu').toggleClass("active");
        });
        $(".header-nav").toggleClass("menu-active");
        $("header").toggleClass("header-active");
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
    ///////// ** file ** ///////// 
    $("[type=file]").change(function () {
        var file = $('[type=file]')[0].files[0]
        if (file) {
            $(this).siblings("input").val(file.name)
        }
    });
    ///////// ** select2 ** /////////
    $("select.form-control").select2({
        minimumResultsForSearch: Infinity
    });
    $(window).scroll(function () {
        if ($(window).width() >= 1500) {
            numbers(1500)
        } else {
            numbers(700)
        }
    });

    //////////** scope slider **//////////
    var scopeswiper = new Swiper('.scope-slider .swiper-container', {
        breakpoints: {
            0: {
                slidesPerView: 2,
                spaceBetween: 15,
                loop: true,
            },
            767: {
                slidesPerView: 3,
                spaceBetween: 23,
            },
            1199: {
                slidesPerView: 4,
                spaceBetween: 90,
            },
        },
        pagination: {
            el: '.scope-slider .swiper-pagination',
            clickable: true,
        },
    });
    //////////** lg slider **//////////
    var lgswiper = new Swiper('.lg-design-slider .swiper-container', {
        spaceBetween: 50,
        autoplay: {
            delay: 5000,
        },
        centeredSlides: true,
        loop: true,
        pagination: {
            el: '.lg-design-slider .swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            767: {
                slidesPerView: 1.552,
            },
        },
    });
    //////////** xs slider **//////////
    var xsswiper = new Swiper('.xs-design-slider .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 15,
        autoplay: {
            delay: 5000,
        },
        centeredSlides: true,
        loop: true,
        navigation: {
            nextEl: '.xs-design-slider .swiper-btn-next',
            prevEl: '.xs-design-slider .swiper-btn-prev',
        },
    });
});

var a = 0;
function numbers(width) {
    if ($("div").hasClass("statistics")) {
        if (a === 0 && $(this).scrollTop() >= ($(".statistics").offset().top) - width) {
            $('.number span').each(function () {
                $(this).prop('Counter', 0).animate({
                    Counter: $(this).text()
                }, {
                    duration: 1000,
                    easing: 'swing',
                    step: function (now) {
                        $(this).text(Math.ceil(now));
                    }
                });
            });
            a = 1
        }
    }
}