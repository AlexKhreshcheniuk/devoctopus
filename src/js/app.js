import { menuTogglerHandler } from './menuToggler';

async function includeHTML(callback) {
  let i;
  let element;
  let file;
  let length;

  /* Loop through a collection of all HTML elements: */
  const z = document.querySelectorAll('[do-include-html]');
  length = z.length;
  for (i = 0; i < length; i += 1) {
    element = z[i];
    /* search for elements with a certain attribute: */
    file = element.getAttribute('do-include-html');
    if (file) {
      let response = await fetch(file);
      if (length - 1 == i) {
        // TODO: find approach to execute script inside loaded file
        addHandler()
      }
      if (response.ok) {
        element.innerHTML = await response.text();
      } else {
        element.innerHTML = 'Page not found.';
      }
    }
  }

  callback();
}

function addHandler() {
  document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();
    emailjs.sendForm('gmail', 'template_asI2nKbM', this).then(function (response) {
      document.getElementById('contact-us-title').textContent = 'We will reach out to you shortly';
      document.getElementById('contact-form').style.display = 'none';
    }, function (error) {
      console.log('FAILED...', error);
    });
  });
}

document.getElementById('app').onclick = (e) => {
  if (e.target.classList.contains('do-button')) {
    const containerId = e.target.getAttribute('data-container');
    if (containerId) {
      document.getElementById(containerId).style.display = 'block';
      e.target.style.display = 'none';
    }
  }
};

includeHTML(menuTogglerHandler);
