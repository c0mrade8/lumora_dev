document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle');
    const sideNav = document.getElementById('sideNav');
    const overlay = document.getElementById('overlay');
    const body = document.body;

    // Function to toggle the menu state
    function toggleMenu() {
        menuToggle.classList.toggle('active');
        sideNav.classList.toggle('active');
        overlay.classList.toggle('active');
        // Prevent scrolling of the body when the menu is open
        body.classList.toggle('no-scroll');
    }

    // Event listener for the hamburger icon
    menuToggle.addEventListener('click', toggleMenu);

    // Event listener for the overlay (to close menu by clicking outside)
    overlay.addEventListener('click', toggleMenu);

    // Optional: Close menu when a link inside is clicked
    sideNav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', (e) => {
            // e.preventDefault(); // Uncomment if you want to handle navigation via JS, otherwise let it navigate normally
            toggleMenu(); // Close the menu after clicking a link
        });
    });
});