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

    webDB.execute([{
      'sql': 'SELECT DISTINCT city FROM zips  WHERE state=? ORDER BY city',
      'data': [selectedState]}], function(result) {

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
      webDB.execute('SELECT DISTINCT latitude, longitude, city FROM zips WHERE city="' + selectedCity + '" AND state="' + selectedState + '"',
        function(result) {
          args = result;

          plotMarkers(args);
        }
      )
    })
  }


  function zipSearch(event){
    event.preventDefault();
    var zipCode = $('#input').val();
    console.log('zip code');
    console.log(zipCode);
    webDB.execute('SELECT latitude, longitude, city FROM zips WHERE zip="' + zipCode + '"', function(result) {
      console.log('result:');
      console.log(result[0]);

      var zip = {};
      zip.latitude = result[0].latitude;
      zip.longitude = result[0].longitude;
      zip.city = result[0].city;

      var args = [zip];
      console.log(zip);
      plotMarkers(args);
    })
  }

  populateStateFilter();
  stateSelector.on('change', populateCityFilter);



  // TODOID: You will also interact with the map.js file here
  var form = $('form');
  form.on('submit', zipSearch);

})(window)
