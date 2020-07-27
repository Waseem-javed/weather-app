// Init Ui Object
const ui = new UI;

// init storage object
const storage = new Storage();
const weatherLocation = storage.getLocation();
// Init weather Object
const weather = new Weather(weatherLocation.city);

// get weather on dom loader
document.addEventListener("DOMContentLoaded", getWeather);
// weather.changeLocation('pakistan');

// change location event
document.querySelector(".saveChanges").addEventListener('click', (e) => {
    
    // take user input from location modal
    const input = document.querySelector("#city_name").value;

    // change the location function call here below
    weather.changeLocation(input);

    // set location in localstorage
    storage.setlocation(input);
    // then call get location ok;
    getWeather();

    // jquery for modal hide
    $('#form').modal('hide');

});

function getWeather() {
    weather.getWeather()
        .then((data) => {
            //ui call to display a weather information on DOM 
            ui.showOnDom(data);
        })
        .catch((error) => {
            alert('Location Not Found Something Wrong');
        });
}


