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

// Light & Dark mode toggle
// Access toggle switch HTML element
const themeSwitcher = document.querySelector('#theme-toggle');
const setMode = document.querySelector('.set-theme');

// Set theme to persist after reload
let theme = JSON.parse(localStorage.getItem('theme'));

const setTheme = (theme) => {
    if (theme === 'dark') {
        setMode.setAttribute('class', 'dark');
    } else {
        setMode.setAttribute('class', 'light');
    }
};

setTheme(theme);

// Listen for a click event on toggle switch
themeSwitcher.addEventListener('click', function () {
    // If mode is dark, apply light background
    if (theme === 'dark') {
    theme = 'light';
    }
    // If mode is light, apply dark background
    else {
        theme = 'dark';
    }
    setTheme(theme);
    localStorage.setItem('theme', JSON.stringify(theme));
});

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

