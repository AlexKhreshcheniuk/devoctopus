function menuToggleHandler() {
  const menuToggler = document.querySelector('.js_menu-button');
  const header = document.querySelector('.js_header');

  if (menuToggler) {
    menuToggler.addEventListener('click', () => {
      header.classList.toggle('header_opened');
    });
  }
}

document.addEventListener('DOMContentLoaded', menuToggleHandler());
