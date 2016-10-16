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
    console.log("=========================");
    console.log(selectedState);
    webDB.execute([{
      'sql': 'SELECT DISTINCT city FROM zips WHERE state=?',
      'data': [selectedState]}], function(result) {
        result.forEach(function(currentValue){
          citySelector.append('<option class="cityOption" value=' + currentValue.city + '>' + currentValue.city +'</option>')
        })
      }
    )
  }

  function zipSearch(event){
    event.preventDefault();
    var zipCode = $('#input').val();
    webDB.execute('SELECT * FROM zips WHERE zip=' + zipCode, function(result) {
      var lat = result.latitude;
      var long = result.longitude;
      var name = result.city;
      initMap(lat, long, name);
      console.log(result);
    })
  }

  populateStateFilter();
  stateSelector.on('change', populateCityFilter);

  // TODOID: You will also interact with the map.js file here
  var form = $('form');
  form.on('submit', zipSearch);

})(window)
