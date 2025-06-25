const btnMenu = document.querySelector('.btn-menu');
const mobileMenu = document.querySelector('.mobile__menu');
const closeMenu = document.querySelector('.mobile__btn-menu');

btnMenu.addEventListener('click', () => {
  mobileMenu.classList.add('active');
});
closeMenu.addEventListener('click', () => {
  mobileMenu.classList.remove('active');
});