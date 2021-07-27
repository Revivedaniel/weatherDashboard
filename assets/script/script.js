//when the search button is pressed
  //prevent default
  //search the value in the weather api
    //if the curl is successful and there isnt an entry in the local storage for that city
      //set a selection item in localStorage to the city
      //add a item to the local storage array
      //create a new li at the bottom
    //if the curl is successful but there is already a city that name
      //set a selection item in localStorage to the city

//on load
  //check the selection item in localStorage
  //if it is blank
    //display la habra by default
var citySelected = localStorage.getItem("citySelected") || "La Habra";

//slecting the current weather article
var currentWeather = document.querySelector("#currentWeather");
//selecting all the children of current weather
var currentWeatherChildren = currentWeather.children;
//Selecting the search area
var searchCityEl = document.querySelector("#searchCity");



    //if it is populated
      //fill in all information in the current day section
      //fill in the 5-day forcast



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
   