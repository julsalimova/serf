let myMap;
const init = () => {
    myMap = new ymaps.Map("map", {
        center: [55.755854, 37.614818],
        zoom: 15,
        controls: []
    });


    const coords = [
        [55.755854, 37.614818]
    ]

    const myCollection = new ymaps.GeoObjectCollection({}, {
      draggable: false,
      iconLayout: 'default#image' ,
      iconImageHref: './img/Group.png',
      iconImageSize: [30, 42],
      iconImageOffset: [-3, -42],
  });
  
  coords.forEach(coord => {
    myCollection.add(new ymaps.Placemark(coord));
  })
  
  myMap.geoObjects.add(myCollection);
  myMap.behaviors.disable('scrollZoom');
}

ymaps.ready(init);