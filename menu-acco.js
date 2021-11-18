const verticalAcco = () => {
  const links = document.querySelectorAll(".menu-acco__link");
  const body = document.querySelector('body');
}


function closeItem(activeElement) {
  const activeText = activeElement.querySelector(".menu-acco__content");
  activeText.style.widht = "0px";
  activeElement.classList.remove("active");
}


links.forEach(function (elem) {
  elem.addEventListener('click', function(e){
    e.preventDefault()
    const currentlink = e.target.closest(".menu-acco__link");
    const active = document.querySelector(".menu-acco__item.active");
    if (active) {
      closeItem(active);
    } 

    if (!active || active.querySelector(".menu-acco__link") !== link) {
      const current = link.closest(".menu-acco__item");
      current.classList.add("active");
      const currentText = current.querySelector(".menu-acco__content");
    }
  });
});