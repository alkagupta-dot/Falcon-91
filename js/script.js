```javascript
document.addEventListener('DOMContentLoaded', function () {
  // Mobile navigation
  const menuToggle = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');

  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', function () {
      navMenu.classList.toggle('open');
    });
  }

  // Demo dashboard profile
  const playerName = document.getElementById('player-name');
  const editButton = document.getElementById('edit-name');

  if (playerName) {
    playerName.textContent =
      localStorage.getItem('falcon91-name') || 'Guest Player';
  }

  if (editButton && playerName) {
    editButton.addEventListener('click', function () {
      const name = prompt('Enter your player name:', playerName.textContent);

      if (name && name.trim()) {
        const cleanName = name.trim().slice(0, 30);
        localStorage.setItem('falcon91-name', cleanName);
        playerName.textContent = cleanName;
      }
    });
  }

  // Demo contact form
  const contactForm = document.getElementById('contact-form');

  if (contactForm) {
    contactForm.addEventListener('submit', function (event) {
      event.preventDefault();

      const status = document.getElementById('form-status');

      if (status) {
        status.textContent =
          'Demo only: message not sent. Connect an email service to receive messages.';
      }
    });
  }
});
```
