//when the search button is pressed
  //prevent default
  //search the value in the weather api
    //if the curl is successful and there isnt an entry in the local storage for that city
      //set a selection variable to the city
      //add a item to the local storage array
      //create a new li at the bottom
    //if the curl is successful but there is already a city that name
      //set a selection variable to the city

//on load
  //check the selection variable
    //if it is blank
      //display la habra by default
    //if it is populated
      //fill in all information in the current day section
      //fill in the 5-day forcast


//populate current day function
  //set 1st row inner text to {city name}{(date)}{weather emoji}
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
  //start a for loop for 5
   //