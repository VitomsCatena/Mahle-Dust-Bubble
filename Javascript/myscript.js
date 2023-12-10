const menuBtn = document.querySelector('.menu-bar');
const menu = document.querySelector('nav');

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    menuBtn.classList.toggle('fa-times');
});