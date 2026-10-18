const menuToggle = document.querySelector('.header__toggle');
const mainNav = document.querySelector('.header__nav');

menuToggle.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('header__nav--open');
  menuToggle.setAttribute('aria-expanded', isOpen);
});

const billingSwitch = document.querySelector('.pricing__billing-switch');
const billingLabels = document.querySelectorAll('.pricing__billing-label');

billingSwitch.addEventListener('click', () => {
  const isAnnual = billingSwitch.getAttribute('aria-pressed') !== 'true';
  billingSwitch.setAttribute('aria-pressed', isAnnual);
  billingLabels[0].classList.toggle('pricing__billing-label--active', !isAnnual);
  billingLabels[1].classList.toggle('pricing__billing-label--active', isAnnual);
});
