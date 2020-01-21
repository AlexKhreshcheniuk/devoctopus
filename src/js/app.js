import './menu-toggler';

const handleEmailJsFail = (error) => {
  console.warn('Failed ...', error);
};

document.addEventListener('DOMContentLoaded', () => {
  // email form handler
  document.getElementById('contact-form').addEventListener('submit', (event) => {
    event.preventDefault();

    emailjs.sendForm('gmail', 'template_asI2nKbM', this).then(
      () => {
        document.getElementById('contact-us-title').textContent = 'We will reach out to you shortly';
        document.getElementById('contact-form').style.display = 'none';
      },
      handleEmailJsFail,
    );
  });

  document.querySelector('.subscribe-form').addEventListener('submit', (event) => {
    event.preventDefault();

    emailjs.sendForm('gmail', 'subscription', this).then(
      () => {
        document.querySelector('.footer__subscribe-label').textContent = 'You have been successfully subscribed';
        document.getElementById('footer__subscribe-input').style.display = 'none';
        document.querySelector('.footer__subscribe-button-set').style.display = 'none';
      },
      handleEmailJsFail,
    );
  });

  // Read More handler
  document.getElementById('app').onclick = (e) => {
    if (e.target.classList.contains('do-button')) {
      const containerId = e.target.getAttribute('data-container');
      if (containerId) {
        document.getElementById(containerId).style.display = 'block';
        e.target.style.display = 'none';
      }
    }
  };
});
