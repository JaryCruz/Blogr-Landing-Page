// Get DOM Elements
const hamburgerBtn = document.getElementById('hamburger-btn');
const mobileMenu = document.getElementById('mobile-menu');
const toggleBtn = document.querySelectorAll('.toggle-btn');

// Click events for toggling
hamburgerBtn.addEventListener('click', navToggle);

// Toggle the different small menus
toggleBtn.forEach(toggle => {
    toggle.addEventListener('click', () => {
        // Get the next menu div
        const menu = toggle.nextElementSibling;

        // Toggle between displaying and not
        if(menu.style.display === 'none') {
            menu.style.display = 'block';
            toggle.style.rotate = '180deg'
        } else {
            menu.style.display = 'none';
            toggle.style.rotate = '0deg'
        }
    })
})

// Toggle mobile menu
function navToggle() {
    switchIcon();

    mobileMenu.classList.toggle('shown');
}

// Flip icons for hamburger menu
function switchIcon() {
    // Switch Mobile Menu Icon
    if(hamburgerBtn.classList.contains('fa-bars')) {
        hamburgerBtn.classList.remove('fa-bars');
        hamburgerBtn.classList.add('fa-xmark');
    } else {
        hamburgerBtn.classList.remove('fa-xmark');
        hamburgerBtn.classList.add('fa-bars');
    }
}
