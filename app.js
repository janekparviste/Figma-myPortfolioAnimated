const btnHamburger = document.querySelector('.hamburger');
const menuPanel = document.querySelector('.menu-panel');
const menuLinks = document.querySelectorAll('.menu-panel a');
let close = document.querySelector('.close');
const frameImage = document.querySelector('#frame');
const images = [
    '1.webp',
    '2.webp',
    '3.webp',
    '4.webp',
    '5.webp',
    '6.webp',
    '7.webp',
];
const modal = document.querySelector('.modal');
const btnOpenModal = document.querySelector('#btn-open-form');
const inputName = document.querySelector('#name2');
const inputEmail = document.querySelector('#email2');
const inputMessage = document.querySelector('#message2');
const contactForm = document.querySelector('#contact-form');

contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = inputName.value;
    const email = inputEmail.value;
    const message = inputMessage.value;

    //object literal
    const formData = {
        userName: name,
        userEmail: email,
        userMessage: message,
    };

    localStorage.setItem('name', JSON.stringify(formData.userName));
    localStorage.setItem('email', JSON.stringify(formData.userEmail));
    localStorage.setItem('message', JSON.stringify(formData.userMessage));
});

btnOpenModal.addEventListener('click', () => {
    modal.style.display = 'block';
});

window.onclick = (event) => {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
};

let currentImageIndex = 0;

frameImage.addEventListener('click', () => {
    currentImageIndex++;
    if (currentImageIndex >= images.length) currentImageIndex = 0;
    frameImage.src = 'images_frame/' + images[currentImageIndex];
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
