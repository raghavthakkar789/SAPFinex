// Mobile Navbar Toggle
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

// Simple example form handling
const careerForm = document.getElementById('careerForm');
careerForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const nameValue = document.getElementById('name').value.trim();
  const emailValue = document.getElementById('email').value.trim();
  const phoneValue = document.getElementById('phone').value.trim();
  const messageValue = document.getElementById('message').value.trim();
  const resumeValue = document.getElementById('resume').value.trim();

  if (nameValue && emailValue && phoneValue && messageValue && resumeValue) {
    const formData = {
      name: nameValue,
      email: emailValue,
      phone: phoneValue,
      message: messageValue,
      resume: resumeValue
    };
    console.log(formData);
    const url = 'https://connect.pabbly.com/workflow/sendwebhookdata/IjU3NjYwNTZmMDYzMDA0M2Q1MjZlNTUzNzUxMzIi_pc';
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
    alert('Thank you for contacting us! We will get back to you soon.');
    careerForm.reset();
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

// Add this to your existing JavaScript
const resumeInput = document.getElementById('resume');
const fileChosen = document.getElementById('file-chosen');

resumeInput.addEventListener('change', function() {
    if(this.files.length > 0) {
        fileChosen.textContent = this.files[0].name;
    } else {
        fileChosen.textContent = 'No file chosen';
    }
});
