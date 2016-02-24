//Main file

// function to make leaflet map
function createMap(){
	// create the leaflet map 
	var map = L.map('map',{
		// set lat & long of the map center 
		center: [20, 8],
		zoom: 2
	});
	
	//adds the map layer from Open Street Map
	L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
		attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery   <a href="http://mapbox.com">Mapbox</a>',
		maxZoom: 18,
		id: 'aamendez2.p668ap8k',
		accessToken: 'pk.eyJ1IjoiYWFtZW5kZXoyIiwiYSI6ImNpZ2I5NjVzaDBlaW93ZG03cWt0OW5sMzgifQ.th4dPR3RKIF9DZYCHu-qxA'
	}).addTo(map);
	
	//call function to getData
	getData(map);
};
	
/* //calculate radius of proportional symbols
function calcPropRadius(attnValue){
	//scale factor - adjust size evenly (What exactly does this mean?)
	var scaleFactor = 50;
	//area
	var area = attValue * scaleFactor;
	//calculate radius from area
	var radius = Math.sqrt(area/Math.PI);
	
	return radius;
};
	
//function to create proportional symbols
function createPropSymbols(data, map, attribute){
    //create marker options
    L.geoJson(data, {
		pointToLayer: function(feature, latlng){
			return pointToLayer(feature, latlng, attributes);
		}
	}).addTo(map);
	
	//
	function createPropSymbols(data){

    //Determine which attribute to visualize with proportional symbols
    var attribute = "Yr_2005-2009";

	//create a Leaflet GeoJSON layer and add it to the map
	L.geoJson(data, {
        pointToLayer: function (feature, latlng) {
			
			var attValue = Number(feature.properties[attribute]);
			//see if attValue is right
			console.log(feature.properties, attValue);
			
			//give each circle marker a radius based on attValue
			geojsonMarkerOptions.radius = calcPropRadius(attValue);
			//create circle markers
            return L.circleMarker(latlng, geojsonMarkerOptions);
        }
    }).addTo(map);
};
*/
//add geojson file to the map
function getData(map){
	$.ajax("data/co2Country.geojson", {
		dataType: "json",
		success: function (response){
			//calling function that creates PropSymbols
			createPropSymbols(resposnse, map);
		}
	});
};

// $(document).ready(createMap); 

createMap();
 