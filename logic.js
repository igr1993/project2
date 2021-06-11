// Create our initial map object
// Set the longitude, latitude, and the starting zoom level
var myMap = L.map("map", {
  center: [20, 0],
  zoom: 2
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

// Define a markerSize function that will give each animal a different radius based on how endangered population
function markerSize(population) {
  return population / 0.5;
}

// Each animal object contains the amimal’s name, location and population
var animals = [
  {
    name: "Bornean Orangutan",
    location: [4.2105, 101.9758],
    population: 104700
  },
  {
    name: "Snow Leopard",
    location: [30.15, 88.78],
    population: 4000
  },
  {
    name: "Giant Panda",
    location: [35.8617, 104.1954],
    population: 3900
  },
  {
    name: "Tiger",
    location: [20.5937, 78.9629],
    population:  3900
  },
  {
    name: "Whooping Crane",
    location: [53.9333, -116.5765],
    population: 100
  },
  {
    name: "Blue Whale",
    location: [14.5994, 28.6731],
    population: 5000
  },
  {
    name: "Asian Elephant",
    location: [2.2180, 115.6628],
    population: 20000
  },
  {
    name: "Sea Otter",
    location: [57.0000, -130.0000],
    population: 3000
  },
  {
    name: "Tazmanian Devil",
    location: [-42.0409, 146.8087],
    population: 10000
  },
  {
    name: "Gorilla",
    location: [5.9175, 12.5484],
    population: 1000
  }
];

// Loop through the animals array and create one marker for each animal object
for (var i = 0; i < animals.length; i++) {
  L.circle(animals[i].location, {
    fillOpacity: 2.00,
    color: "red",
    fillColor: "blue",
    // Setting our circle's radius equal to the output of our markerSize function
    // This will make our marker's size proportionate to its population
    radius: markerSize(animals[i].population)
  }).bindPopup("<h1>" + animals[i].name + "</h1> <hr> <h3>Population: " + animals[i].population + "</h3>").addTo(myMap);
}

//When user clicks button, toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

