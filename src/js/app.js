document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();
    emailjs.sendForm('gmail', 'template_asI2nKbM', this).then(function (response) {
      document.getElementById('contact-us-title').textContent = 'We will reach out to you shortly';
      document.getElementById('contact-form').style.display = 'none';
    }, function (error) {
      console.log('FAILED...', error);
    });
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
