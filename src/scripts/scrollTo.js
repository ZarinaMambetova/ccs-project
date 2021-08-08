// Скролл с кнопок главного экрана:
$(function() {
  $('#toForm').on('click', function(e) {
    $('html,body').stop().animate({ scrollTop: $('#form').offset().top - 100 }, 1000);
    e.preventDefault();
  });

  $('.order-desc').on('click', function(e) {
    $('html,body').stop().animate({ scrollTop: $('.order__text').offset().top - 110 }, 1000);
    e.preventDefault();
  });
});

// Закрытие гамбургер-меню при нажатии на пункт меню:
$(function() {
  if ($(window).width() <= '720') {
    $('html').on('click', '.navigation__link', function(e) {
      $('.hamburger').trigger(e.type);
    });
  }
});
