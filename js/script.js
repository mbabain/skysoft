const hamburger = document.querySelector('.hamburger');
const hamburgerBackground = document.querySelector('.hamburger-background');
const hamburgerBackgroundBlack = document.querySelector('.hamburger-background-black');
const bar1 = document.getElementById('bar1');
const bar2 = document.getElementById('bar2');
const bar3 = document.getElementById('bar3');
const nav = document.querySelector('.section-header-nav');
const contacts = document.querySelector('.section-header-contacts');
const applyButton = document.querySelector('.section-header-apply');

nav.classList.add('none');
contacts.classList.add('none');
applyButton.classList.add('none');

hamburger.addEventListener('click', () => {
    hamburgerToggle();
    hamburgerAnimToggle();
    barAnimation();
});

hamburgerBackgroundBlack.addEventListener('click', () => {
    hamburgerToggle();
    hamburgerAnimToggle();
    barAnimation();
});

$(document).ready(function(){
    $('.section-banner-slider').slick({
        fade: true,
        dots: true
    });
});

function hamburgerToggle () {
    nav.classList.toggle('none');
    contacts.classList.toggle('none');
    applyButton.classList.toggle('none');
    hamburgerBackground.classList.toggle('on');
    hamburgerBackgroundBlack.classList.toggle('on');
    document.querySelector('.main').classList.toggle('hamburger-off-scroll');
    document.querySelector('body').classList.toggle('hamburger-off-scroll');
    document.querySelector('html').classList.toggle('hamburger-off-scroll');
}

function hamburgerAnimToggle () {
    nav.classList.toggle('hamburger-animation');
    contacts.classList.toggle('hamburger-animation');
    applyButton.classList.toggle('hamburger-animation');
    hamburgerBackground.classList.toggle('hamburger-animation');
    hamburgerBackgroundBlack.classList.toggle('hamburger-animation-black');
}

function barAnimation () {
    bar1.classList.toggle('anim');
    bar3.classList.toggle('anim');
    bar2.classList.toggle('anim');
}