const humburger = document.querySelector('.humburger');
const navMenu = document.querySelector('.nav-menu');

humburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});
