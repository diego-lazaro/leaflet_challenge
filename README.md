![image](https://user-images.githubusercontent.com/115186079/229365913-c85237d7-108e-4891-a2fc-81cc5f847f09.png)

The United States Geological Survey, USGS for short, provides scientific data about natural hazards and the health of our ecosystems and environment. This includes earthquake data from all over the world, which gets updated every 5 minutes.

The [click USGS GeoJSON Feed] (http://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php) provides several datasets that return the earthquakes information in JSON format. I chose https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojso for this challenge.


![image](https://user-images.githubusercontent.com/115186079/229366026-20a6b1e6-047e-4d71-881a-885ceaa7a52c.png)

## Analysis

I pulled the dataset using the USGS GeoJSON to display All Earthquakes from the Past 7 Days to use for my visualization.

I utlizied Leaflet to create the plots of all the earthquakes from the  dataset based on the geograiphical coordinates.

The data markers reflected the magnitude of the earthquake by their size and the depth of the earthquake by its color. The Earthquake information is included in the popup when the marker is clicked.



![image](https://user-images.githubusercontent.com/115186079/229366963-d9f3c5f8-48d0-4fb5-b702-524cc555efb7.png)


## Conclusion
I was able to create a visualation to display the size and magnitude of Earthquakes.

## Note
An API Key is needed to display the map and is not included in the files.


