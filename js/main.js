$(document).ready(function() {
    $('.slide-areas').slick({
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000
    });
    $('.slider-programacao').slick({
        slidesToShow: 3,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        infinite: true,
        dots: false
    });
});