
const findBlockByAlias = alias => {
  return $(".reviews__item").filter((ndx,item) => {
    console.log(item);
    console.log($(item).attr("data-linked-with"));
    console.log(alias);
    return $(item).attr("data-linked-with") == alias;
  });
};

$(".interactive-avatar__link").click((e) => {
  e.preventDefault();

  const $this = $(e.currentTarget).closest('.reviews-switcher__item');
  const target = $this.attr("data-open");

  const itemToShow = findBlockByAlias(target);
  const curItem = $this.closest(".reviews-switcher__item");

  itemToShow.addClass("active").siblings().removeClass("active");
  curItem.addClass("active").siblings().removeClass("active");
});

