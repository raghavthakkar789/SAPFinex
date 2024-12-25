// Mobile menu toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');
    
    // Toggle menu when hamburger icon is clicked
    navToggle.addEventListener('click', function() {
        navLinks.classList.toggle('open');
        // Optional: Toggle icon between hamburger and X
        navToggle.innerHTML = navLinks.classList.contains('open') ? '×' : '☰';
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInside = navToggle.contains(event.target) || navLinks.contains(event.target);
        if (!isClickInside && navLinks.classList.contains('open')) {
            navLinks.classList.remove('open');
            navToggle.innerHTML = '☰';
        }
    });

    // Close menu when window is resized above mobile breakpoint
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768 && navLinks.classList.contains('open')) {
            navLinks.classList.remove('open');
            navToggle.innerHTML = '☰';
        }
    });
});
