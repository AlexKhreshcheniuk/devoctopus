function menuToggleHandler() {
  const menuToggler = document.querySelector('.js_menu-button');
  const header = document.querySelector('.js_header');
  const documentBody = document.getElementsByTagName("body")[0];

  if (menuToggler) {
    menuToggler.addEventListener('click', () => {
      header.classList.toggle('header_opened');
      documentBody.classList.toggle('scroll-fixed');
    });
  }
}

document.addEventListener('DOMContentLoaded', menuToggleHandler);
