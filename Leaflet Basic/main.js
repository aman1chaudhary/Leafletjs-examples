var map = L.map('map').setView([23, 80], 5);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);



// Add marker
var marker = L.marker([23.2114, 72.6842]).addTo(map)
marker.bindPopup("IIT Gandhinagar");


// Add circle
var circle = L.circle([22, 73], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 50000
}).addTo(map);
circle.bindPopup("I am a circle.");

// Add polygon
var polygon = L.polygon([
    [22, 70],
    [25, 71],
    [23, 71.5],
    [24, 72]
]).addTo(map);
polygon.bindPopup("I am a polygon.");