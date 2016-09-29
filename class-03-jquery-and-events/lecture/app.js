//nav handler
$('nav a').on('click', function() {
  var $whereToGo = $(this).data('tab');
  $('.tab-content').hide()
  $('#' + $whereToGo).show()
})


//event logger
function logTarget() {
  console.log(this);
  console.log($(this));

  var $target = $(this).text();
  var $newFeedback = $('#feedback p:first-child').clone();

  $newFeedback.text('You clicked on ' + $target);
  $('#feedback').append($newFeedback);
}

//not delegated - event bound to all the 'li's
//no selector specified in .on() method
$('#menu1 > li').on('click', logTarget);

//delegated - event is bound to parent
//'li' is specified in .on()
$('#menu2').on('click', 'li', logTarget);

//button handlers
//adder1
$('button[name="adder1"]').on('click', function() {
  var $newLi = $('#menu1 li:first-child').clone();
  $newLi.text('new Menu1 el');
  $('#menu1').append($newLi);
})

//adder2
$('button[name="adder2"]').on('click', function() {
  var $newLi = $('#menu2 li:first-child').clone();
  $newLi.text('new Menu2 el');
  $('#menu2').append($newLi);
})

//clear
$('button[name="clear"]').on('click', function() {
  $('#feedback p:first-child').siblings().remove();
})

//checkbox handler - change event.
//shows difference between attr & prop
$('input[name=check]').on('change', function() {
  var $checkbox = $(this);

  $('#checked-state').html('.attr("checked"): ' + $checkbox.attr('checked') + '<br>.prop( "checked" ): ' + $checkbox.prop('checked'));

}).change();

//select box filtering
$('select[name="icecream"]').on('change', function() {
  var $flavor = $(this).val();
  $('img').hide()
  $('img[data-flavor="' + $flavor + '"]').show()
})

//DOM-ready function
$(document).ready(function() {
  $('.tab-content').hide()
})
