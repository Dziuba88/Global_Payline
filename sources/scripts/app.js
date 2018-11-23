$(document).ready(function () {
  console.log('document ready');
  $("[data-scrollto]").click(function (event) {
    event.preventDefault();
    var target = $(this).data('scrollto');
    $('html, body').animate({
      scrollTop: $(target).offset().top
    }, 1000);
  });
  $('.owl-carousel').owlCarousel({
    loop: true,
    nav: true,
    items: 1,
    mouseDrag: false,
    navText: ['<i class="icon__left"></i>','<i class="icon__right"></i>'],
    responsiveRefreshRate: 0
  });
  $('select').niceSelect();
});