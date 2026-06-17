// =============================
// MOBILE NAV TOGGLE
// =============================
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Close nav when a link is clicked (mobile)
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
  });
});


// =============================
// MENU FILTER TABS
// =============================
const tabBtns = document.querySelectorAll('.tab__btn');
const menuCards = document.querySelectorAll('.menu__card');

tabBtns.forEach(btn => {
  btn.addEventListener('click', () => {

    // Set active tab
    tabBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const selected = btn.getAttribute('data-category');

    // Show / hide cards
    menuCards.forEach(card => {
      if (selected === 'all' || card.getAttribute('data-category') === selected) {
        card.classList.remove('hidden');
      } else {
        card.classList.add('hidden');
      }
    });
  });
});


// =============================
// CONTACT FORM
// =============================
const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // Simple validation check
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (name && email && message) {
    formSuccess.classList.add('show');
    contactForm.reset();

    // Hide success message after 4 seconds
    setTimeout(() => {
      formSuccess.classList.remove('show');
    }, 4000);
  }
});


// =============================
// STICKY HEADER SHADOW
// =============================
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.style.boxShadow = '0 4px 20px rgba(165, 133, 111, 0.2)';
  } else {
    header.style.boxShadow = '0 2px 16px rgba(165, 133, 111, 0.12)';
  }
});