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

function placeAllMarkers(map, locations){
  for(var i = 0; i < locations.length; i++){
    var coords = new google.maps.LatLng(locations[i][0], locations[i][1]);
    var marker = new google.maps.Marker({
      position: coords,
      map: map,
      title: 'Hello World!'
    });
  };
}