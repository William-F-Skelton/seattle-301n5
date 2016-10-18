(function(module) {

  // TODID: Write the code to populate your filters, and enable the search queries here in search.js
  var stateSelector = $('#state-select');
  var citySelector = $('#city-select');
  var allStates = [];
  function populateStateFilter() {
    webDB.execute('SELECT DISTINCT state FROM zips ORDER BY state', function(result){
      result.forEach(function(currentValue){
        stateSelector.append('<option class="stateOption" value=' + currentValue.state + '>' + currentValue.state +'</option>')
      })
    })
  }

  function populateCityFilter() {
    var selectedState = this.value;
    var args = [];
    console.log("=========================");
    console.log('selectedState: ' + selectedState);
    console.log("=========================");
    webDB.execute([{
      'sql': 'SELECT DISTINCT city FROM zips  WHERE state=? ORDER BY city',
      'data': [selectedState]}], function(result) {
        console.log("=========================");
        console.log('First Result: ');
        console.log(result[0]);
        console.log("=========================");
        citySelector.empty();
        citySelector.append('<option value="city">Select a City</option>')
        result.forEach(function(currentValue){
          var cityString = currentValue.city + '';
          citySelector.append('<option class="cityOption" value=' + cityString.replace(/ /g, "") + '>' + cityString.toLowerCase() +'</option>');
          // console.log(cityString.replace(/ /g, ""));
        })
      }
    )
    citySelector.on('change', function(){
      var selectedCity = this.value;
      // console.log('1: ' + this.value);
      webDB.execute([{
        'sql': 'SELECT DISTINCT latitude, longitude, city FROM zips WHERE city=?',
        'data': [selectedCity]}], function(result) {
          console.log(result);
          // console.log('args:');
          // console.log(result);
          args = result;
          // console.log(args);
          // console.log(args[0].latitude);
          // console.log(args[0].longitude);
          // console.log(args[0].city);
          plotMarkers(args);
        }
      )
    })
  }


  function zipSearch(event){
    event.preventDefault();
    var zipCode = $('#input').val();
    webDB.execute('SELECT * FROM zips WHERE zip=' + zipCode, function(result) {
      var lat = result.latitude;
      var long = result.longitude;
      var name = result.city;
      plotMarkers([lat, long, name]);
      console.log(result);
    })
  }

  populateStateFilter();
  stateSelector.on('change', populateCityFilter);



  // TODOID: You will also interact with the map.js file here
  var form = $('form');
  form.on('submit', zipSearch);

})(window)
