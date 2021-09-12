let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: new google.maps.LatLng(-23.258493, -47.665471),
    zoom: 15,
  });

  const icons = {
    info: {
      icon: "https://i.ibb.co/gtBrNzn/gp.png",
    },
  };
  const features = [
    {
      position: new google.maps.LatLng(-23.265326, -47.661314),
      type: "info",
    },
    {
      position: new google.maps.LatLng(-23.258493, -47.665471),
      type: "info",
    },
    {
      position: new google.maps.LatLng(-23.258454, -47.668114),
      type: "info",
    },
    {
      position: new google.maps.LatLng(-23.257901, -47.666742),
      type: "info",
    },
    {
      position: new google.maps.LatLng(-23.257669, -47.664462),
      type: "info",
    },
    {
      position: new google.maps.LatLng(-23.265693, -47.670593),
      type: "info",
    },
    {
      position: new google.maps.LatLng(-23.264778, -47.672249),
      type: "info",
    },
    {
      position: new google.maps.LatLng(-23.262665, -47.6732),
      type: "info",
    },
    {
      position: new google.maps.LatLng(-23.261122, -47.670763),
      type: "info",
    },
  ];

  // Create markers.
  for (let i = 0; i < features.length; i++) {
    const marker = new google.maps.Marker({
      position: features[i].position,
      animation: google.maps.Animation.DROP,
      icon: icons[features[i].type].icon,
      map: map,
    });
  }
}
