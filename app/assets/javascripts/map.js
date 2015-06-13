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

function showPosition(position) {
    var latlon = position[0] + "," + position[1];
    debugger;
    var img_url = "http://maps.googleapis.com/maps/api/staticmap?center="
    +latlon+"&zoom=14&size=400x300&sensor=false";
    document.getElementById("mapHolder").innerHTML = "<img src='"+img_url+"'>";
}