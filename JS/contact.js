// Mobile Navbar Toggle
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

// Simple example form handling
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const nameValue = document.getElementById('name').value.trim();
  const emailValue = document.getElementById('email').value.trim();
  const messageValue = document.getElementById('message').value.trim();

  if (nameValue && emailValue && messageValue) {
    alert('Thank you for contacting us! We will get back to you soon.');
    contactForm.reset();
  } else {
    alert('Please fill in all required fields.');
  }
});
