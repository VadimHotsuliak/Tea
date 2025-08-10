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
document.addEventListener("DOMContentLoaded", () => {
    const cartCount = document.querySelector(".cart-count");

    window.updateCartCount = () => {
        const cart = JSON.parse(localStorage.getItem("cart")) || {};
        const uniqueItems = Object.keys(cart).length;

        if (cartCount) {
            cartCount.textContent = uniqueItems;
            cartCount.classList.toggle("visible", uniqueItems > 0);
        }
    };

    updateCartCount();
});


});
