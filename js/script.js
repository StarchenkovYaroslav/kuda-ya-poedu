window.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.header__nav'),
  menuItem = document.querySelectorAll('.healder__menu-item'),
  hamburger = document.querySelector('.burger');

  hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('burger_active');
      menu.classList.toggle('header__nav_active');
  });

  menuItem.forEach(item => {
      item.addEventListener('click', () => {
          hamburger.classList.toggle('burger_active');
          menu.classList.toggle('header__nav_active');
      })
  })
})
