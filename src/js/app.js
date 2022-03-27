import * as flsFunctions from './modules/functions.js';

flsFunctions.isWebp();

const nav = document.querySelector('.header__nav');
const menu = document.querySelector('.header__flexMenu');
const burgerBtn = document.querySelector('.header__burger');
const backBtn = document.querySelector('.header__backBtn');

burgerBtn.addEventListener('click', () => {
    document.body.style.overflowY = 'hidden';
    nav.classList.add('active');
    menu.classList.add('active');
})

nav.addEventListener('click', event => {
    if (event.target === nav || event.target === backBtn) {
        nav.classList.add('removeAnim');
        menu.classList.add('removeAnim');
        setTimeout(() => {
            nav.classList.remove('removeAnim', 'active');
            menu.classList.remove('removeAnim', 'active');
            document.body.style.overflowY = 'auto';
        }, 600)
    }
})