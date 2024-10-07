const btnHamburger = document.querySelector('.hamburger');
const menuPanel = document.querySelector('.menu-panel');
const menuLinks = document.querySelectorAll('.menu-panel a');
let close = document.querySelector('.close');

close.addEventListener('click', () => {
    menuPanel.classList.remove('active');
});

btnHamburger.addEventListener('click', () => {
    menuPanel.classList.toggle('active');
});

document.addEventListener('click', (event) => {
    if (
        !menuPanel.contains(event.target) &&
        !btnHamburger.contains(event.target)
    ) {
        menuPanel.classList.remove('active');
    }
});

menuLinks.forEach((link) => {
    link.addEventListener('click', () => {
        menuPanel.classList.remove('active');
    });
});
