$(document).ready(function(){
  // $("#demo").click(getLocation);
  setHeight();
  $("#recordHole").click(getLocation);
});

function setHeight(){
  var h = $(this).height()/2;
  // debugger;
  $(".button").height(h);
  $(".button").css("line-height", (h + "px"))
}