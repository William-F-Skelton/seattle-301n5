function initMap(latitude, longitude, mapTitle) {
  // Create a map object and specify the DOM element for display.
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: latitude, lng: longitude},
    scrollwheel: true,
    zoom: 8
  });

  // // TODO: Follow the Google Maps API docs to create markers on the map based on the search options on the home page.
  // var latAndLong = new google.maps.LatLng(latitude, longitude);
  // var mapOptions = {
  //   zoom: 4,
  //   center: latAndLong
  // }
  // var map = new google.maps.Map(document.getElementById("map"), mapOptions);
  //
  // var marker = new google.maps.Marker({
  //     position: latAndLong,
  //     title: mapTitle
  // });
  //
  // // To add the marker to the map, call setMap();
  // marker.setMap(map);

  // var marker = new google.maps.Marker({
  //   position: {lat: latitude, lng: longitude},
  //   map: map,
  //   title: mapTitle
  // });

}
