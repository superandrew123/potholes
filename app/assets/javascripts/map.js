$(document).ready(function(){
  setHeight(".button", 0.5);
  setHeight("#map-holder", 1);
  $("#recordHole").click(getLocation);
  $(window).resize(function(){
    setHeight(".button", 0.5);
    setHeight("#map-holder", 1);
  });
});

function setHeight(selector, percent){
  var h = $(this).height()*percent;
  $(selector).height(h);
  if(selector === ".button"){
    $(selector).css("line-height", (h + "px"))
  }
}

function placeAllMarkers(map, locations){
  for(var i = 0; i < locations.length; i++){
    var coords = new google.maps.LatLng(locations[i][0], locations[i][1]);
    var message = "Reported " + locations[i][2] + " times" + "\n" + locations[i][3];
    var marker = new google.maps.Marker({
      position: coords,
      animation: google.maps.Animation.DROP,
      map: map,
      title: message
    });
  };
}