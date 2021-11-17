

const slider = $(".products").bxSlider({
  pager: false,
  controls: false
});

 $(".product__arrow-prev").click(e => {
  e.preventDefault();
  slider.goToPrevSlide();

 });

 $(".product__arrow-next").click(e => {
  e.preventDefault();
  slider.goToNextSlide();
 });
























/*const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const itemsList = document.querySelector(".products");
const computedStyles = window.getComputedStyle(itemsList);
const items = document.querySelectorAll(".product__item");

const minRight = 0;
const itemWidth = getComputedStyle(items[0]).width;
const step = parseInt(itemWidth);
const preShownItems = 900 / step;
const maxRight = (items.length - preShownItems) * step;
let currentRight = 0;

itemsList.style.right = currentRight;



prev.addEventListener("click", e => {
e.preventDefault ();

if (currentRight < maxRight){
  currentRight += step;
  itemsList.style.right = `${currentRight}px`;
} 
});

next.addEventListener("click", e => {
  e.preventDefault();

  if (currentRight > minRight) {
    currentRight -= step;
    itemsList.style.right = `${currentRight}px`;
  }
});*/