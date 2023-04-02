![image](https://user-images.githubusercontent.com/115186079/229365913-c85237d7-108e-4891-a2fc-81cc5f847f09.png)

The United States Geological Survey (USGS) provides scientific data about natural hazards and the health of ecosystems and environments. This encompasses earthquake data from all over the world. This information is updated every 5 minutes.

The [click USGS GeoJSON Feed] (http://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php) provides several datasets that return the earthquakes information in JSON format. I chose https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojso for this challenge.


![image](https://user-images.githubusercontent.com/115186079/229366026-20a6b1e6-047e-4d71-881a-885ceaa7a52c.png)

## Analysis

* I pulled the dataset using the USGS GeoJSON to display All Earthquakes from the Past 7 Days for my visualization model.

* I utlizied Leaflet to create the plots of all the earthquakes dataset based on the geographical coordinates.

* The data markers reflect the magnitude of the earthquake by their size and the depth by their color. When the popup markers are clicked, they display the Earthquake information.



![image](https://user-images.githubusercontent.com/115186079/229366963-d9f3c5f8-48d0-4fb5-b702-524cc555efb7.png)


## Conclusion 
I was able to create a visualation to display the size and magnitude of Earthquakes.

## Note
An API Key is needed to display the map and is not included in the files.


