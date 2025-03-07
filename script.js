let searchform = document.getElementById('.search-form');

document.querySelector('#search-btn').onclick = () => {
  searchform.classList.toggle('active');
    navbar.classList.remove('active');
}

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () => {
  navbar.classList.toggle('active');
    searchform.classList.remove('active');
}

let slides = document.querySelectorAll('.home .slides-container .slide');
let index = 0;

function next() {
  slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}

function prev() {
  slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}

window.onscroll = () => {
  searchform.classList.remove('active');
    navbar.classList.remove('active');

    if (window.scrollY > 30) {
        document.querySelector('header').classList.add('header-active');
        }
    else {
        document.querySelector('header').classList.remove('header-active');
    }
}