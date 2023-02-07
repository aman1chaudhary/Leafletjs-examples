var map = L.map('map').setView([22.9074872,79.07306671], 5);
var googleStreets = L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',{
    subdomains:['mt0','mt1','mt2','mt3']
});
googleStreets.addTo(map);





function style(feature) {
    return {
        fillColor: "none",
        weight: 2,
        opacity: 1,
        color: 'black',
    };
}
L.geoJson(statesData, {style: style}).addTo(map);


