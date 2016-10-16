function initMap(args) {
  // Create a map object and specify the DOM element for display.
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 47.611435, lng: -122.330456},
    scrollwheel: true,
    zoom: 8
  });
  console.log(map);
  // TODO: Follow the Google Maps API docs to create markers on the map based on the search options on the home page.

  args.forEach(function(currentValue, index) {
    var marker = new google.maps.Marker({
      position: {lat: args[index][0], lng: args[index][1]},
      map: map,
      title: args[index][2]
    });
  })

}
