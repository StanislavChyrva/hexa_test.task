console.log('hello');

//SWIPER INITIALISATION ------------------------------------------------------

window.addEventListener('DOMContentLoaded', initSwiper);

function initSwiper() {
    const mySwiper = new Swiper('.swiper-container', {
        pagination: {
            el: '.swiper-pagination',
        },
        navigation: {
            nextEl: '.main__swiper-button-next',
            prevEl: '.main__swiper-button-prev',
        },
    });
}