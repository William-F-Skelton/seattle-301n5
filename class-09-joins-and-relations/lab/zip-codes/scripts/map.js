function initMap() {
  // Create a map object and specify the DOM element for display.
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 47.611435, lng: -122.330456},
    scrollwheel: true,
    zoom: 8
  });

  // TODO: Follow the Google Maps API docs to create markers on the map based on the search options on the home page.
  // var marker = new google.maps.Marker({
  //   position: {lat: 47.611435, lng: -122.330456},
  //   map: map,
  //   title: 'Hello World!'
  // });
  }


function plotMarkers(args) {
  // Create a map object and specify the DOM element for display.
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: args[0].latitude, lng: args[0].longitude},
    scrollwheel: true,
    zoom: 8
  });
  // TODO: Follow the Google Maps API docs to create markers on the map based on the search options on the home page.
  args.forEach(function(currentValue, index) {
    // console.log(args[index].latitude);
    // console.log(args[index].longitude);
    // console.log(args[index].city);
    var marker = new google.maps.Marker({
      position: {lat: args[index].latitude, lng: args[index].longitude},
      map: map,
      title: args[index].city
    })
  })
}
