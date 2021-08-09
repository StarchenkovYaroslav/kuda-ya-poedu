window.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.header'),
  menuItems = document.querySelectorAll('.healder__menu-item'),
  hamburger = document.querySelector('.burger');

  hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('burger_active');
      header.classList.toggle('header_active');
  });

  menuItems.forEach(item => {
      item.addEventListener('click', () => {
          hamburger.classList.toggle('burger_active');
          header.classList.toggle('header__nav_active');
      })
  })
})
