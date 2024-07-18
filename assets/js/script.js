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
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
}

initMap();

// Functions to open and close a modal
function openModal() {
    const modal = document.querySelector('#modal-element');
    modal.classList.add('is-active');
}
const modalButton = document.querySelector('#modal-button');
modalButton.addEventListener('click', openModal);

function closeModal($el) {
  $el.classList.remove('is-active');
}

(document.querySelectorAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button') || []).forEach(($close) => {
  const $target = $close.closest('.modal');

  $close.addEventListener('click', () => {
    closeModal($target);
  });
});

// Function to display map in modal
const displayModalMap = function () {
    const modalMapScript = document.getElementById("modal-map-script");
    const apiKey = googleMapsApi;
    modalMapScript.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&loading=async&libraries=maps,marker&v=beta`;
};

  const googleMapsUrl = `https://maps.googleapis.com/maps/api/js?key=${googleMapsApi}&callback=myMap`;


// Funtion to showcase googleMap
function googleMap() {
    const googleMap = new google.maps.Map(
      document.getElementById("google-maps-script")
    );
}

const service = new google.maps.places.PlacesService(map);
