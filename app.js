const btnHamburger = document.querySelector('.hamburger');
const menuPanel = document.querySelector('.menu-panel');
const menuLinks = document.querySelectorAll('.menu-panel a');
let close = document.querySelector('.close');
const frameImage = document.querySelector('#frame');
const images = ['1.webp', '2.webp', '3.webp', '4.webp', '5.webp', '6.webp', '7.webp'];

let currentImageIndex = 0;

frameImage.addEventListener('click', () => {
    currentImageIndex++;
    if(currentImageIndex >= images.length) currentImageIndex = 0;
    frameImage.src ='images_frame/' + images[currentImageIndex];
});

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
