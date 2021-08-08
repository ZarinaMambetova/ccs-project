window.addEventListener('load', function() {
  var hamburger = document.querySelector('.hamburger');
  var body = document.querySelector('body');

  hamburger.addEventListener('click', function() {
    if (document.documentElement.clientWidth < 721) {
      if (body.classList.contains('menu-open')) {
        body.classList.remove('menu-open');
      } else {
        body.classList.add('menu-open');
      }
    }
  });
});
