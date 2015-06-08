$(document).ready(function(){
  // $("#demo").click(getLocation);
  setHeight();
});

function getLocation() {
  if (navigator.geolocation) {
      navigator.geolocation.watchPosition(showPosition);
  } else {
      x.innerHTML = "Geolocation is not supported by this browser.";
  }
}
function showPosition(position) {
  $("#demo").html("Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude);
}

function setHeight(){
  var h = $(this).height()/2;
  // debugger;
  $(".button").height(h);
  $(".button").css("line-height", (h + "px"))
}