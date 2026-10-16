const menuToggle = document.querySelector('.header__toggle');
const mainNav = document.querySelector('.header__nav');

menuToggle.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('header__nav--open');
  menuToggle.setAttribute('aria-expanded', isOpen);
});
