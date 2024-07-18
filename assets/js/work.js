var map;
var service;
var infowindow;

function initilize () {
var California = new google.maps.LastLng(-33.8665433, 151.1956316);

map = new google.maps.Map(document.getElementById)('map'), {
    center: California,
    zoom: 15
}

var request = {
    location: California,
    radius: '400',
    query: 'beach'
};

service = new google.maps.places.PlacesService(map);
service.textSearch(request, requestIdleCallback)
}