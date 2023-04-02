$(document).ready(function () {
    $('#pagepiling').pagepiling();
});


var swiper = new Swiper(".mySwiper", {
    direction: "vertical",
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
    },
    loop: true,
    speed: 5000,
    slidesPerView: '1',
    autoplay: {
        enabled: true,
        delay: 1,
    },

});

