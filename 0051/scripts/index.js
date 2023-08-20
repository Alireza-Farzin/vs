$(document).ready(function () {

    let scrollBtn = $('.top-scroll');


    $(window).scroll(function () {

        if ($(Window).scrollTop() > 100) {
            scrollBtn.fadeIn(500)

        } else {

            scrollBtn.fadeOut(500)
        }



    })

    scrollBtn.click(function () {

        $('html').animate({

            scrollTop: 0

        }, 1000)
    })


})