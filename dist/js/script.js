// Navbar Fixed
window.onscroll = function () {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;
    const Up = document.querySelector('#up');

    if (window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
        Up.classList.remove('hidden');
    } else {
        header.classList.remove('navbar-fixed');
        Up.classList.add('hidden');
    }
};

// Hamburger Menu
const hamburger = document.querySelector('#hamburger');
const hamburgerIcon = document.querySelector('#hamburger-icon');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function () {
    const isCross = hamburgerIcon.dataset.state === 'cross';

    // Update SVG Icon
    hamburgerIcon.innerHTML = isCross
        ? `<rect x="3" y="5" width="18" height="2"></rect>
           <rect x="3" y="11" width="18" height="2"></rect>
           <rect x="3" y="17" width="18" height="2"></rect>`
        : `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x">
               <line x1="18" y1="6" x2="6" y2="18"></line>
               <line x1="6" y1="6" x2="18" y2="18"></line>
           </svg>`;

    // Toggle data-state
    hamburgerIcon.dataset.state = isCross ? 'hamburger' : 'cross';

    // Toggle menu visibility
    navMenu.classList.toggle('hidden');
});

document.getElementById('currentYear').textContent = new Date().getFullYear();