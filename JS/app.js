document.addEventListener('DOMContentLoaded', () => {
    // Get the current URL path
    const currentPath = window.location.pathname.split('/').pop();

    // Get all navigation links
    const navLinks = document.querySelectorAll('.nav-link');

    // Loop through each link
    navLinks.forEach(link => {
        // Check if the link's href matches the current path
        if (link.getAttribute('href') === currentPath) {
            // Add the 'active' class to the matching link
            link.classList.add('active-page');
        }
    });
});