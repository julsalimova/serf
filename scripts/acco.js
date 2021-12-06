const openItem = item => {
const container = item.closest(".team__item");
const title = container.find(".team__title");
const contentBlock = container.find(".team__content");
const textBlock = contentBlock.find(".team__content-block");
const reqHeight = textBlock.height();


container.addClass("active");
title.addClass("active");
contentBlock.height(reqHeight+10); 
}

const closeEveryItem = container => {
  const items = container.find(".team__content");
  const itemContainer = container.find(".team__item");
  const itemTitle = container.find(".team__title");

  itemContainer.removeClass("active");
  itemTitle.removeClass("active");
  items.height(0);
}


$(".team__title").click(e =>{
  const $this = $(e.currentTarget);
  const container = $this.closest(".team"); 
  const elemContainer = $this.closest(".team__item");
 
if (elemContainer.hasClass("active")) {
  closeEveryItem(container);
}
else {
  closeEveryItem(container);
  openItem($this);
}

  
})
 