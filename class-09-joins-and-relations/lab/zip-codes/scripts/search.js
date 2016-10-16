(function(module) {

  // TODID: Write the code to populate your filters, and enable the search queries here in search.js
  var stateSelector = $('#state-select');
  var citySelector = $('#city-select');
  var allStates = [];
  function populateStateFilter() {
    webDB.execute('SELECT DISTINCT state FROM zips', function(result){
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


populateStateFilter();
stateSelector.on('change', populateCityFilter);

  // TODO: You will also interact with the map.js file here


})(window)
