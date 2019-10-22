const menuToggler = document.querySelector('.js_menu-button');
const header = document.querySelector('.js_header');

function menuToggleHandler(menuButtonItem) {
  if (menuButtonItem) {
    menuButtonItem.addEventListener('click', () => {
      console.log(menuToggler);
      console.log(header.classList);
      header.classList.toggle('header_opened');
      console.log(menuToggler);
      console.log(header.classList);
    });
  }
}

document.addEventListener('DOMContentLoaded', menuToggleHandler(menuToggler));
