const verticalAcco = () => {
  const links = document.querySelectorAll(".menu-acco__link");
  const body = document.querySelector('body');



const calculateWidth = () => {
  const windowWidth = window.innerWidth;

  const max_width_open_menu = 520 ;
  const linksWidth = links[0].offsetWidth;

  const reqWidth =  windowWidth - (linksWidth*links.length);

  return reqWidth > max_width_open_menu ? max_width_open_menu:reqWidth;

}

function closeItem(activeElement) {
  const activeText = activeElement.querySelector(".menu-acco__content");
  activeText.style.width = "0px";
  activeElement.classList.remove("active");
  
}


links.forEach(function (elem) {
  elem.addEventListener('click', function(e){
    e.preventDefault();
    const currentlink = e.target.closest(".menu-acco__link");
    const active = document.querySelector(".menu-acco__item.active");
    
    if (active) {
      closeItem(active);
     
    } 

    if (!active || active.querySelector(".menu-acco__link") !== currentlink) {
      
      const current = currentlink.closest(".menu-acco__item");
      
      current.classList.add("active");
      
      const currentText = current.querySelector(".menu-acco__content");

      if (body.offsetWidth > 480) {
        currentText.style.width = calculateWidth()+"px";
      } else {
        currentText.style.width = '100%';
      }
    }
  });
});

document.addEventListener('click', e =>{
  e.preventDefault();
  let activePerson = document.querySelector(".menu-acco__item.active");
  const target = e.target;
  
  if (!target.closest(".menu-acco") && activePerson) {
    closeItem(activePerson);
  }
   if (target.classList.contains("close__btn") && activePerson) {
     closeItem(activePerson);
   }
  
});

}
verticalAcco() 
