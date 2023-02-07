var map = L.map('map').setView([22.9074872, 79.07306671], 5);
var googleStreets = L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
    subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
});
googleStreets.addTo(map);



L.control.scale({ position: 'bottomright' }).addTo(map);

// map coordinate function
map.on('mousemove', function (e) {
    $('.coordinate').html(`Lat: ${e.latlng.lat.toFixed(3)} Lng: ${e.latlng.lng.toFixed(3)}`)
})


// Search Bar

L.Control.geocoder().addTo(map);