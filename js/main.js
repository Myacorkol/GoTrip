

//Carusel

$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
  });

  const owl = $('.owl-carousel');
owl.owlCarousel({
    center: true,
    loop: true,
    margin: 30,
    startPosition: 1,
    items: 1,
    responsive : {
        540 : {
            items: 3,
        },
        // breakpoint from 850 up
        850 : {
            items: 3,
        },

        // breakpoint from 1200 up
        1200 : {
            margin: 30,
            items: 3,
        }
    }
});
$('.slider__btn--prev').click(function() {

    owl.trigger('prev.owl.carousel');
})

$('.slider__btn--next').click(function() {
    owl.trigger('next.owl.carousel');
})

//nav icon
const navBtn = document.querySelector('.nav__toggle');
const nav = document.querySelector('.nav');
const menuIcon = document.querySelector('.menu-icon');

document.querySelector('.menu-icon-wrapper').onclick = function(){
    nav.classList.toggle('nav--mobile');
    document.querySelector('.menu-icon').classList.toggle('menu-icon-active');
    document.body.classList.toggle('no-scroll');
}