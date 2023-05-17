try {
  window.addEventListener("load", function () {
    let myMap;
    let myPlacemark;

    try {
      ymaps.ready(init);
    } catch (error) {}

    function init() {
      myMap = new ymaps.Map("map", {
        center: [55.82493514012901, 49.14675582085202],
        zoom: 17,
      });
      // myMap.setType('yandex#map');
      // myMap.setCenter([55.82384567557404,49.14547363672293], 17);

      if (window.innerWidth <= 1250) {
        myMap.setCenter([55.82578488199605, 49.14604753428242], 17);
      }

      if (window.innerWidth <= 740) {
        myMap.setCenter([55.82552101113472, 49.148595002451664], 17);
      }

      if (window.innerWidth <= 420) {
        myMap.setCenter([55.82552252097534, 49.14931651667667], 17);
      }

      if (window.innerWidth <= 350) {
        myMap.setCenter([55.82551346760382, 49.1494990076702], 17);
      }

      myPlacemark = new ymaps.Placemark(
        [55.82647694866468, 49.139917029444426],
        {
          // hintContent: 'Москва!',
          // balloonContent: 'Столица России'
        },
        {
          iconImageHref: "./assets/images/contacts/yandex-map-marker.svg",
          iconImageSize: [220, 220],
          // iconImageOffset: [-3, -42]
        }
      );

      myMap.geoObjects.add(myPlacemark);
    }

    // ++++++++++++++++++++++++
    let calibrationList;
    let calibrationListTop;
    let map;
    let leftSide;
    let mapHeight;

    // list
    // list sizes
    try {
      calibrationList = document.querySelector(".contacts__left-contacts-list");
      calibrationListTop = calibrationList.offsetTop;

      // map
      map = document.querySelector("#map");
      // left side
      leftSide = document.querySelector(".contacts__left");
      // map height

      mapHeight = map.getBoundingClientRect().height;

      // set top for map

      map.style.top = `${calibrationListTop - 60}px`;
    } catch (error) {}

    if (window.innerWidth <= 1250) {
      try {
        // reset top for map
        map.style.top = "unset";
        // set top for map
        leftSide.style.marginTop = `${mapHeight + 50}px`;
      } catch (error) {}
    }
  });
} catch (error) {}
