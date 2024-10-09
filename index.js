console.log("file is running....");

document.getElementById('getLocationBtn').addEventListener('click', () => {
    document.getElementById("click-state").textContent="Button clicked"
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, handleError, {
            enableHighAccuracy: true, // Fetches a more accurate location
            timeout: 5000,            // Time before error is thrown (optional)
            maximumAge: 0             // Ensures that no cached location is used
        });
    } else {
        alert("Geolocation is not supported by this browser.");
    }
});

function showPosition(position) {
    //location.reload(true);
    document.getElementById("lat-el").textContent='Latitude: ' + position.coords.latitude
    //console.log();
    document.getElementById("long-el").textContent='Longitude: ' + position.coords.longitude
    //console.log();
    document.getElementById("accuracy-el").textContent='accuarcy : '+position.coords.accuracy+' metres'
    //console.log()
}

function handleError(error) {
    console.error('Error code: ' + error.code + ', Message: ' + error.message);
}
