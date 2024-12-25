// Mobile menu toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');
    
    // Function to check if we're at a breakpoint where the toggle should be active
    function isToggleBreakpoint() {
        return window.innerWidth <= 1200; // Adjust this value to match your CSS breakpoints
    }

    // Function to reset nav state
    function resetNav() {
        if (!isToggleBreakpoint()) {
            navLinks.classList.remove('open');
            navLinks.style.display = '';
            navToggle.innerHTML = '☰';
        }
    }

    if (navToggle && navLinks) {
        // Toggle menu
        navToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            if (isToggleBreakpoint()) {
                navLinks.classList.toggle('open');
                this.innerHTML = navLinks.classList.contains('open') ? '×' : '☰';
                
                // Set explicit display style
                navLinks.style.display = navLinks.classList.contains('open') ? 'flex' : 'none';
            }
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (isToggleBreakpoint() && 
                !navLinks.contains(e.target) && 
                !navToggle.contains(e.target) && 
                navLinks.classList.contains('open')) {
                navLinks.classList.remove('open');
                navLinks.style.display = 'none';
                navToggle.innerHTML = '☰';
            }
        });

        // Handle window resize
        let resizeTimer;
        window.addEventListener('resize', function() {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(function() {
                resetNav();
                
                // Update initial display state based on screen size
                if (isToggleBreakpoint()) {
                    navLinks.style.display = navLinks.classList.contains('open') ? 'flex' : 'none';
                }
            }, 250); // Debounce resize events
        });

        // Initial setup
        resetNav();
    }
});
