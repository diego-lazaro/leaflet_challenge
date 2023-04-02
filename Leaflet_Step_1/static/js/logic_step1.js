// Create the map 
var myMap = L.map('map', {
    center: [39.8283, -98.5795],
    zoom: 5
  });
  
  // Create the tile layers for the background of our map
  L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "light-v10",
    accessToken: API_KEY
  }).addTo(myMap);
  
  // Creates the circle layer from the GeoJSON data set 
  function createCircleMarker(feature, latlng){
    // Change the circles appearance
    let options = {
      radius: getRadius(feature.properties.mag) ,
      fillColor: getColor(feature.geometry.coordinates[2]),
      color: "black",
      weight: 1,
      opacity: 1,
      fillOpacity: 0.8
    }
    return L.circleMarker(latlng, options);
  }
  
  // Give each earthquake a different radius based on their magnitude
  function getRadius(magnitude) {
    if (magnitude == 0) {
      return 1;
    }
    return magnitude * 4;
  }
  
  // Give each earthquake a different color based on depth of the earthquakes
  function getColor(depth) {
    switch (true) {
      case (depth <= 10):
        return "#39FF14";
      case (depth >= 10 && depth <= 30):
        return "#DEFF00";
      case (depth > 30 && depth <= 50):
        return "#FCAE1E";
      case (depth > 50 && depth <= 70):
        return "#FF6700";
      case (depth > 70 && depth <= 90):
        return "#F89880";
      case (depth > 90):
        return "#FE019A";
      default:
        return "#000000";
    }
  }
  
  // Store our API endpoint as queryUrl
  var queryUrl = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";
  
  // Perform a GET request to the query URL
  d3.json(queryUrl).then(function(data) {
    console.log(data.features);
    
    // Use Leaflet's geoJSON method to turn the data into a feature layer
    L.geoJSON(data.features, {
      // Call the function createCircleMarker - creates symbol for this layer
      pointToLayer: createCircleMarker,
      // Create pop up layer
      onEachFeature: function(feature, layer) {
        layer.bindPopup("<h3>" + feature.properties.place + "</h3><h4>" 
                        + new Date(feature.properties.time) + "</h4><h4> Magnitude: " 
                        + feature.properties.mag + "</h4><h4> Depth: " 
                        + feature.geometry.coordinates[2] + "</h4>")
      }
    }).addTo(myMap) 
  
    // Set up the legend
    var legend = L.control({ position: "bottomright" });
  
    legend.onAdd = function() {
      var div = L.DomUtil.create("div", "info legend");
  
      var limits = ["-10-10", "10-30", "30-50", "50-70", "70-90", "90+"];
      var colors = ["#39FF14", "#DEFF00", "#FCAE1E", "#FF6700", "#F89880", "#FE019A", "#000000"];
      labels = [];
  
      limits.forEach((limit, i) => {    
        labels.push("<li><div class=\"color-box\" style=\"background-color: " 
                    + colors[i] + "\"></div><p>" + limits[i] +"</p></li>");
      });
      div.innerHTML += "<ul>" + labels.join("") + "</ul>";
  
        return div;
    };
  
    // Adding legend to the map
    legend.addTo(myMap);
  });