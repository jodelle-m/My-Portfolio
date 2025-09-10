/* ---------- NAV MENU TOGGLE (mobile) ---------- */
const myNavMenu = document.getElementById("myNavMenu");
const navToggle = document.getElementById("navToggle");

navToggle.addEventListener("click", () => {
  myNavMenu.classList.toggle("responsive");
});

const navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 860) { // Only apply on mobile view
            myNavMenu.classList.remove('responsive');
        }
    });
});

/*--type name--*/
if (window.Typed) {
  new Typed('.typedText', {
    strings: ['Jamie Jodelle', 'IT Student', 'Jamie Jodelle'], // short list
    typeSpeed: 90,
    backSpeed: 50,
    backDelay: 1400,
    loop: true
  });
}

/*--active link--*/
const sections = document.querySelectorAll('section[id]');
function scrollActive(){
    const scrollY = window.scrollY + 90; // account for navbar height
    sections.forEach(sec => {
        const top = sec.offsetTop;
        const h = sec.offsetHeight;
        const id = sec.getAttribute('id');
        const link = document.querySelector(`.nav-links a[href="#${id}"]`);
        if (!link) return;
        if (scrollY >= top && scrollY < top + h) {
        link.classList.add('active-link');
        } else link.classList.remove('active-link');
    });
}

window.addEventListener('scroll', scrollActive);
scrollActive();

/*--project--*/
document.querySelectorAll('.project-card').forEach((card, index) => {
    const title = card.dataset.title;
    const desc = card.dataset.desc;
    const iconClass = card.dataset.icon;
    const overlay = card.querySelector('.proj-overlay');

    card.style.setProperty('--i', index); // For staggered fade-in animation

    if (overlay) {
  const h3 = overlay.querySelector('h3');
  const p = overlay.querySelector('p');
  const imgSrc = card.dataset.img;
  if (imgSrc) {
    h3.innerHTML = `<img src="${imgSrc}" alt="${title} icon" class="proj-icon-img" />${title}`;
  } else {
    h3.textContent = title;
  }
  p.textContent = desc;
}
});

/*--contacts--*/
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();

  // Clear previous error messages
  const errorMessages = this.querySelectorAll('.error-message');
  errorMessages.forEach(msg => msg.remove());

  let valid = true;

  // Validation functions
  function showError(input, message) {
  valid = false;
  const error = document.createElement('div');
  error.className = 'error-message';
  error.style.color = 'red';
  error.style.fontSize = '0.8rem';   // smaller font size
  error.style.marginTop = '6px';     // spacing below input
  error.textContent = message;
  input.insertAdjacentElement('afterend', error);
}

  const nameInput = this.querySelector('#name');
  const emailInput = this.querySelector('#email');
  const subjectInput = this.querySelector('#subject');
  const messageInput = this.querySelector('#message');

  // Validate Name: Required + letters and spaces only
  if (!nameInput.value.trim()) {
    showError(nameInput, 'Fill out this part.');
  } else if (!/^[a-zA-Z\s]+$/.test(nameInput.value.trim())) {
    showError(nameInput, 'Name must contain only letters and spaces.');
  }

  // Validate Email: Required + valid email format
  if (!emailInput.value.trim()) {
    showError(emailInput, 'Fill out this part.');
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value.trim())) {
    showError(emailInput, 'Enter a valid email address.');
  }

  // Validate Subject: Required
  if (!subjectInput.value.trim()) {
    showError(subjectInput, 'Fill out this part.');
  }

  // Validate Message: Required
  if (!messageInput.value.trim()) {
    showError(messageInput, 'Fill out this part.');
  }

  // If form is valid, submit or show success message
  if (valid) {
    // For example, you can do form submission here or show success feedback
    // this.submit(); // to submit normally
    const feedback = document.getElementById('form-feedback');
    feedback.textContent = 'Message sent successfully!';
    feedback.style.color = 'green';

    // Optionally clear the form:
    this.reset();
  }
});
/*--current year--*/
document.getElementById('year') && (document.getElementById('year').textContent = new Date().getFullYear());

const themeToggle = document.getElementById('themeToggle');

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    document.body.classList.toggle('light');

    // Optional: save preference
    if (document.body.classList.contains('dark')) {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }
  });
}

// Apply saved theme on load
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  document.body.classList.remove('light', 'dark');
  document.body.classList.add(savedTheme);
} else {
  document.body.classList.add('light'); // default
}
