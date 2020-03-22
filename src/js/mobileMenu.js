var wrapperMenu = document.querySelector('.header-mobile-btn');
var mobileMenu = document.querySelector('.header__mobile-menu');

wrapperMenu.addEventListener('click', function(){
  wrapperMenu.classList.toggle('header-mobile-btn--active');
  mobileMenu.classList.toggle('header__mobile-menu--active');
  document.body.classList.toggle('overflow-hidden');
})