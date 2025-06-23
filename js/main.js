const btnMenu = document.querySelector('.btn-menu');
  const mobileMenu = document.querySelector('.mobile__menu');
  const closeBtn = document.querySelector('.mobile__btn-menu');

  btnMenu.addEventListener('click', () => {
    mobileMenu.classList.add('active');
  });

  closeBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
  });