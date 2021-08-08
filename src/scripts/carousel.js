$(function() {
  if ($(window).width() <= '720') {
    $('.circuit__list').slick({
      slide: 'li',
      dots: true,
      prevArrow: '<button type="button" class="slider__control slick-prev"></button>',
      nextArrow: '<button type="button" class="slider__control slick-next"></button>',
      infinite: false,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1
    });
  }
});
