let href = document.querySelector('#toggle');
let menu = document.querySelector('#active');
let close = document.querySelector('#close');
let body = document.querySelector('body');

let _toggleMenu = function (e) {
menu.classList.toggle('active');
body.classList.toggle('body_active_menu');
}


href.addEventListener('click', _toggleMenu);
close.addEventListener('click', _toggleMenu);

console.log(href)