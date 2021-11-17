let menuOpenBurger = (function (options) {
  let href = document.querySelector(options.href);
  let menu = document.querySelector(options.menu);
  let close = document.querySelector('#close');
  let body = document.querySelector('body');
let _toggleMenu = function (e) {
  e.preventDefault()
menu.classList.toggle('open');
body.classList.toggle('body_active_menu');
}

let addListeners = function (){
  href.addEventListener('click', _toggleMenu);
  close.addEventListener('click', _toggleMenu);
}
 return {
   openMenu: addListeners,
 };

}) ({
    href:'#toggle',
    menu: '#active',
  })

  menuOpenBurger.openMenu();

  console.log(menuOpenBurger)




 /*  let href = document.querySelector('#toggle');
let menu = document.querySelector('#active');
let close = document.querySelector('#close');
let body = document.querySelector('body');

let _toggleMenu = function (e) {
  e.preventDefault()
menu.classList.toggle('open');
body.classList.toggle('body_active_menu');
}

href.addEventListener('click', _toggleMenu);
close.addEventListener('click', _toggleMenu);*/


