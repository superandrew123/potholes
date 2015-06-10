
function getLocation() {
  alert("Give me a sec to find you");
  navigator.geolocation.getCurrentPosition(geoSuccess, geoFail);
}

function geoSuccess(position){
  var location = [position.coords.latitude, position.coords.longitude]
  recordLocation(location);
}

function geoFail(){
  alert("Can't find you!");
}

function recordLocation(location){
  // send data to hole controller
  var data = {
    location: {
      latitude: location[0],
      longitude: location[1]
    }
  }
  $.ajax("/hole", {
    method: "POST",
    data: data,
    complete: function(){
      window.location.href = "/test";
    }
  })
}
