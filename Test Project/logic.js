// Function to determine marker size based on population
function markerSize(population) {
    return population / 0.05;
  }

// Each animal object contains the amimal’s name, location and population
var animals = [
    {
      name: "Bornean Orangutan",
      location: [4.2105, 101.9758],
      population_2020: 104700,
      population_2000: 12500,
      country: "Malaysia"
    },
    {
      name: "Snow Leopard",
      location: [30.15, 88.78],
      population_2020: 4000,
      population_2000: 9000,
      country: "China"
    },
    {
      name: "Giant Panda",
      location: [35.8617, 104.1954],
      population_2020: 3900,
      population_2000: 1596,
      country: "China"
    },
    {
      name: "Tiger",
      location: [20.5937, 78.9629],
      population_2020:  3900,
      population_2000: 5400,
      country: "India"
    },
    {
      name: "Whooping Crane",
      location: [53.9333, 116.5765],
      population_2020: 100,
      population_2000: 185,
      country: "Russia"
    },
    {
      name: "Blue Whale",
      location: [14.5994, 28.6731],
      population_2020: 5000,
      population_2000: 1800,
      country: "N/A"
    },
    {
      name: "Asian Elephant",
      location: [2.2180, 115.6628],
      population_2020: 20000,
      population_2000: 35000,
      country: "Indonesia",
    },
    {
      name: "Sea Otter",
      location: [57.0000, 144.0000],
      population_2020: 3000,
      population_2000: 8742,
      country: "United States"
    },
    {
      name: "Tazmanian Devil",
      location: [42.0409, 146.8087],
      population_2020: 10000,
      population_2000: 21000,
      country: "Australia"
    },
    {
      name: "Gorilla",
      location: [5.9175, 12.5484],
      population_2020: 1000,
      population_2000: 359,
      country: "Cameroon"
    }
  ];


  // Define arrays to hold created 2000 and 2020 markers
var markers_2020 = [];
var markers_2000 = [];

// Loop through locations and create 2000 and 2020 markers
for (var i = 0; i < animals.length; i++) {
  // Setting the marker radius for 2020 by passing population into the markerSize function
  markers_2020.push(
    L.circle(animals[i].location, {
      stroke: false,
      fillOpacity: 2.00,
      color: "white",
      fillColor: "white",
      radius: markerSize(animals[i].population_2020)
    })
  );

   // Setting the marker radius for the city by passing population into the markerSize function
   markers_2000.push(
    L.circle(animals[i].location, {
      stroke: false,
      fillOpacity: 2.00,
      color: "blue",
      fillColor: "blue",
      radius: markerSize(animals[i].population_2000)
    })
  );
}


// Streetmap Layer
var streetmap = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/streets-v11",
  accessToken: API_KEY
});

var darkmap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "dark-v10",
  accessToken: API_KEY
});

// Create two separate layer groups: one for 2000 and one for 2020
var yr_2000 = L.layerGroup(markers_2000);
var yr_2020 = L.layerGroup(markers_2020);

// Create a baseMaps object
var baseMaps = {
  "Street Map": streetmap,
  "Dark Map": darkmap
};

// Create an overlay object
var overlayMaps = {
  "2000 Population": yr_2000,
  "2020 Population": yr_2020
};

// Define a map object
var myMap = L.map("map", {
  center: [20, 0],
  zoom: 3,
  layers: [darkmap, yr_2000, yr_2020]
});

// Pass our map layers into our layer control
// Add the layer control to the map
L.control.layers(baseMaps, overlayMaps, {
  collapsed: false
}).addTo(myMap);