// Google Maps API Key
const googleMapsApiFirst = "AIzaSyC4o_3wr-";
const googleMapsApiSecond = "rxXJXUJeT88KC_Z7QVg6y1nOM";
const googleMapsApi = `${googleMapsApiFirst}${googleMapsApiSecond}`;

// Grab script element in html
const googleMapsScript = document.getElementById("google-maps-script");
const modalMapScript = document.getElementById("modal-map-script");

// Add googleMapsApi to script element
// if (googleMapsScript) {
//     const apiKey = googleMapsApi;
//     googleMapsScript.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&loading=async&libraries=places&callback=initMap`;
// }

// Display map in modal
let map;

async function initMap() {
    const { Map } = await google.maps.importLibrary("maps");

    map = new Map(document.getElementById("map"), {
        center: { lat: 32.779, lng: -96.808 },
        zoom: 8,
        mapId: 'cf24dfd97c2ed23f'
    });
}

// initMap();

