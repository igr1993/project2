// Create our initial map object
// Set the longitude, latitude, and the starting zoom level
var myMap = L.map("map", {
  center: [20, 0],
  zoom: 3
});

// Add a tile layer (the background map image) to our map
// We use the addTo method to add objects to our map
L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/streets-v11",
  accessToken: API_KEY
}).addTo(myMap);

// Create a new marker
// Pass in some initial options, and then add it to the map using the addTo method
var marker = L.marker([4.2105, 101.9758], {
  draggable: false,
  title: "Bornean Orangutan"
}).addTo(myMap);

// Binding a pop-up to our marker
marker.bindPopup("Bornean Orangutan");

var marker = L.marker([30.15, 88.78], {
  draggable: false,
  title: "Snow Leopard"
}).addTo(myMap);

// Binding a pop-up to our marker
marker.bindPopup("Snow Leopard");
