$(document).ready(function(){
  // $("#demo").click(getLocation);
  setHeight(".button", 0.5);
  $("#recordHole").click(getLocation);
});

function setHeight(selector, percent){
  var h = $(this).height()*percent;
  // debugger;
  $(selector).height(h);
  if(selector === ".button"){
    $(selector).css("line-height", (h + "px"))
  }
}

// function setWidth(selector, percent){
//   var h = $(this).width()*percent;
//   // debugger;
//   $(selector).height(h);
//   $(selector).css("line-height", (h + "px"))
// }

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