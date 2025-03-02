const navPanel = document.getElementById('nav');
const menuButton = document.getElementById('menu');
const header = document.querySelector('header');
let active = false;

menuButton.addEventListener('click', () => {
    active = !active;

    if (active) {
        header.style.borderRadius = '16px 16px 0 0';
        menuButton.style.rotate = '90deg';
        navPanel.classList.add('active'); 
        setTimeout(() => {
            navPanel.classList.add('show');
        }, 10);
    } else {
        header.style.borderRadius = '16px';
        menuButton.style.rotate = '0deg';
        navPanel.classList.remove('show');
        setTimeout(() => {
            if (!active) navPanel.classList.remove('active');
        }, 400);
    }
});
