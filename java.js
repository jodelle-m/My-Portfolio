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
const contactForm = document.getElementById('contact-form');
const feedback = document.getElementById('form-feedback');

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
function isValidName(name) {
  return /^[A-Za-z\s]+$/.test(name);
}

if (contactForm){
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const message = document.getElementById('message').value.trim();

    // Basic validations
    if (!name || !isValidName(name)) {
        feedback.textContent = 'Please enter your name (letters and spaces only).';
        return;
    }
    if (!email || !isValidEmail(email)) {
        feedback.textContent = 'Please enter a valid email address.';
        return;
    }
    if (!subject) {
        feedback.textContent = 'Please enter a subject.';
        return;
    }
    if (!message) {
        feedback.textContent = 'Please enter your message.';
        return;
    }

    // If all valid, show success and reset (replace with your submit logic)
    feedback.style.color = 'green';
    feedback.textContent = 'Message sent! (demo only)';
    contactForm.reset();

    setTimeout(()=>{ feedback.textContent=''; feedback.style.color=''; }, 3000);
  });
}

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
