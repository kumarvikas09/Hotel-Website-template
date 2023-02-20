$(document).ready(function() {
    $('.t_content').owlCarousel({
        loop: true,
        // center: true,
        margin: 10,
        nav: true,
        dots: false,
        autoplay: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    })
    var scroll_pos = 0;
    $(document).scroll(function() {
        scroll_pos = $(this).scrollTop();
        if (scroll_pos > 100) {
            $(".vr_header").addClass("scroll");
        } else {
            $(".vr_header").removeClass("scroll");
        }
    });

    $(this).scrollTop();

    // my_fun();

    // function my_fun() {
    //     if (!isOnScreen($('.banner'))) {
    //         $(".vr_header").addClass("scroll");
    //     }
    // }

    // function isOnScreen(elem) {
    //     var $window = jQuery(window)
    //     var viewport_top = $window.scrollTop()
    //     var viewport_height = $window.height()
    //     var viewport_bottom = viewport_top + viewport_height
    //     var $elem = jQuery(elem)
    //     var top = $elem.offset().top
    //     var height = $elem.height()
    //     var bottom = top + height

    //     return (top >= viewport_top && top < viewport_bottom) ||
    //         (bottom > viewport_top && bottom <= viewport_bottom) ||
    //         (height > viewport_height && top <= viewport_top && bottom >= viewport_bottom)
    // }

    // setTimeout(() => {
    //     $(".preloader").hide();
    // }, 2000)
})