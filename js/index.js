$('.nav__link_input').on('click', function(e) {
    e.preventDefault;
    $(this).toggleClass('nav__link_input_active');
    $('.nav__link').toggleClass('nav__link_active')
    $('.nav__link_input__item').toggleClass('nav__link_input__item_active')
});

$('.slider').slick({
  dots: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
});

$('.burger-menu-button').on('click', function(e) {
  e.preventDefault;
  $(this).toggleClass('burger-menu-button_active')
  $('.burger-links').toggleClass('burger-links_active')
  $('.burger-menu-button_wrapper').toggleClass('burger-menu-button_wrapper_active')
})

const anchors = document.querySelectorAll('a[href*="#"]');
const burgerButton = document.querySelector('.burger-menu-button');
const burgerLinks = document.querySelector('.burger-links')

for(let anchor of anchors) {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const blockID = anchor.getAttribute('href');
    document.querySelector('' + blockID).scrollIntoView({
      block: 'start',
      behavior: 'smooth'
    });
    burgerButton.classList.toggle('burger-menu-button_active');
    burgerLinks.classList.toggle('burger-links_active');
  });
};

// const blocks = Array.from(document.querySelectorAll('.block'));

// window.onscroll = function() {
//   blocks.forEach(elem => {
//     let currentScroll = window.pageYOffset;
//     let top = `${elem.offsetTop}`;
//     let bottom = `${elem.offsetTop + elem.offsetHeight}`;
//     if(currentScroll > top && currentScroll < bottom) {
//       burgerButton.style.background = 'white';
//       burgerButton.classList.add('background')
//     } else {
//       burgerButton.style.background = '#383838';
//       burgerButton.classList.remove('background')
//     }
//   });
// };

// const blocks = Array.from(document.querySelectorAll('.block'));

// window.onscroll = function() {
//   blocks.forEach(elem => {
//     let currentScroll = window.pageYOffset;
//     let top = `${elem.offsetTop}`;
//     let bottom = `${elem.offsetTop + elem.offsetHeight}`;
//     if(currentScroll > top && currentScroll < bottom) {
//       burgerButton.classList.add("white");
//       burgerButton.classList.add('background');
//       let white = document.querySelector('.white');
//       white.style.background = 'white';
//     } else {
//       burgerButton.classList.remove('white')
//       burgerButton.classList.remove('background');
//       burgerButton.style.background = '#383838';
//     }
//   });
// };

// const blocks = Array.from(document.querySelectorAll('.block'));

// blocks.forEach(elem => {
//   elem.onscroll = function() {
//     console.log(elem)
//     let currentScroll = window.pageYOffset;
//     let top = `${elem.offsetTop}`;
//     let bottom = `${elem.offsetTop + elem.offsetHeight}`;
//     if(currentScroll > top && currentScroll < bottom) {
//       burgerButton.classList.add("white");
//       burgerButton.classList.add('background');
//       let white = document.querySelector('.white');
//       white.style.background = 'white';
//     } else {
//       burgerButton.classList.remove('white')
//       burgerButton.classList.remove('background');
//       burgerButton.style.background = '#383838';
//     }
//   } ();
// });
