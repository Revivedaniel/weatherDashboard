//initializing local storage
var listOfCities = {}
//validating if there is an item in local storage with the key listOfCities
if (localStorage.getItem("listOfCities")) {
  //set the listOfCities variable to the value from local storage
  listOfCities = JSON.parse(localStorage.getItem("listOfCities"));
  //set the city selected item in local storage to the first city in listOfCities' locationName
  localStorage.setItem("citySelected", listOfCities[0].locationName)
} else {
  listOfCities = {
    LaHabra: {
      locationName: "LaHabra",
      lat: 33.9318591,
      lng: -117.946137
    }
  }
  localStorage.setItem("listOfCities", JSON.stringify(listOfCities))
}
//variable for city selected
var citySelected = localStorage.getItem("citySelected");
//slecting the current weather article
var currentWeather = document.querySelector("#currentWeather");
//selecting all the children of current weather
var currentWeatherChildren = currentWeather.children;
//Selecting the search area
var searchCityEl = document.querySelector("#searchCity");
//submit button
var submitBtnEl = document.querySelector("#submitButton")
//begining of api
const beginAPI = "https://maps.googleapis.com/maps/api/geocode/json?"
const apiKey = "&key=AIzaSyAjHWedDwUnS1H21XfbW-e388yuURcoWU0"

var latLng = {
  lat: 0,
  lng: 0,
}

//when the search button is pressed
submitBtnEl.addEventListener("click", function(event) {
  //prevent default
  event.preventDefault();
  //search the value in geocode api

})
  //search the value in the weather api
      //set a selection item in localStorage to the city
      //add a item to the local storage array
      //create a new li at the bottom
    //if the curl is successful but there is already a city that name
      //set a selection item in localStorage to the city

//on load
  //check the selection item in localStorage
  //if it is blank
    //set to La Habra as default
if (!localStorage.getItem("citySelected")) {
  localStorage.setItem("citySelected", "LaHabra");
  citySelected = "LaHabra"
}

      //fill in all information in the current day section
      //fill in the 5-day forcast

function callGeolocation() {
  fetch(beginAPI + searchCityEl.value.replace(/\s+/g, '') + apiKey)
    .then(function(response) {
      if (response === 200) {
        //if the curl is successful and there isnt an entry in the local storage for that city
        if (condition) {
          
        }

      }
      return response.json();
    })
    .then(function(data) {
      latLng.lat = data.geometry.location.lat;
      latLng.lng = data.geometry.location.lng;
    })
}


//populate current day function
  //set 1st row inner text to {city name}{(date)}{weather emoji}
function populateCurrentDay() {
  // currentWeatherChildren[0].textContent =
}
  //set second row innner text to Temp: {temp}
  //set third row inner text to Wind: {wind}
  //set fourth row to Humidity: {humidity}
  //set fifth row to UV Index: <span>{UV Index}</span>
    //if the index is favorable
      //set span background color to green and color to white
    //if the index is moderate
      //set span background color to yellow and color to black
    //if the index is severe
      //set span background color to red and color to white

//populate 5-da forecast function
  //create an array with tomorrow's date and the next four dates after that
  //start a for loop for 5
   //use index to select the first article
   //from that element select the forecastDate
   //update the inner text with the date using the index
   //select forecastEmoji and update it with the weather emoji
   //select forecastTemp and set inner text to the Temp: {temp}
   //select forecastWind and set inner tect to Wind: {wind}
   //select forecastHumidity and set inner text to Humidity: {humidity}

//when a city is selected
  //
   