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
  const phoneValue = document.getElementById('phone').value.trim();
  const organizationValue = document.getElementById('organization').value.trim();
  const messageValue = document.getElementById('message').value.trim();

  if (nameValue && emailValue && phoneValue && organizationValue && messageValue) {
    // Send the form data to the https://connect.pabbly.com/workflow/sendwebhookdata/IjU3NjYwNTZmMDYzMzA0MzE1MjZiNTUzNDUxMzUi_pc
    // const formData = new FormData();
    const formData = {
      name: nameValue,
      email: emailValue,
      phone: phoneValue,
      organization: organizationValue,
      message: messageValue
    };
    console.log(formData);
    const url = 'https://connect.pabbly.com/workflow/sendwebhookdata/IjU3NjYwNTZmMDYzMDA0M2Q1MjZmNTUzMTUxMzci_pc';
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
    alert('Thank you for contacting us! We will get back to you soon.');
    contactForm.reset();
  } else {
    alert('Please fill in all required fields.');
  }
});

// Add phone number validation
const phoneInput = document.getElementById('phone');
phoneInput.addEventListener('input', (e) => {
  const value = e.target.value;
  // Remove any characters that aren't numbers, spaces, dashes, plus signs, or parentheses
  e.target.value = value.replace(/[^\d\s\-+()]/g, '');
});
