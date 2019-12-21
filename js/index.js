$('.nav__link_input').on('click', function(e) {
    e.preventDefault;
    $(this).toggleClass('nav__link_input_active');
    $('.nav__link').toggleClass('nav__link_active')
    $('.nav__link_input__item').toggleClass('nav__link_input__item_active')
});

$('.slider').slick({
    slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
});

$('.burger-menu-button').on('click', function(e) {
  e.preventDefault;
  $(this).toggleClass('burger-menu-button_active')
  $('.burger-links').toggleClass('burger-links_active')
  $('.burger-menu-button_wrapper').toggleClass('burger-menu-button_wrapper_active')
})
