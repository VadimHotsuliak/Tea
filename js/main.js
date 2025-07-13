const btnMenu = document.querySelector('.btn-menu');
const mobileMenu = document.querySelector('.mobile__menu');
const closeMenu = document.querySelector('.mobile__btn-menu');
const menuItems = document.querySelectorAll('.menu__item-mobile');

btnMenu.addEventListener('click', () => {
  mobileMenu.classList.add('active');
});

closeMenu.addEventListener('click', () => {
  mobileMenu.classList.remove('active');
});

 menuItems.forEach(item => {
  item.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
  });
});
