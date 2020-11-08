//API Key a877d2c6ed19aff0fd1776e7df46844f

//psuedo code

//Show Current Weather (city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index)
var findCurrentWeather = function(city) {
    //current weather by city
    var apiCurrentUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=a877d2c6ed19aff0fd1776e7df46844f"

    
    fetch(apiCurrentUrl).then(function(response) {
        return response.json();
    })
    .then(function(data){
        console.log(data);
        //Current City
        var currentCity = data.name
        console.log(currentCity)
        // Current Date
        var currentDate = moment().format('M/DD/YYYY')
        console.log(currentDate)
        // Curren Icon
        var currentIcon = data.weather[0].icon
        console.log(currentIcon)
        // Current Temp
        var currentTemp = data.main.temp
        console.log(currentTemp)
        //Current Humidity
        var currentHumid = data.main.humidity
        console.log(currentHumid)
        //Current Windspeed
        var currentWind = data.wind.speed
        console.log(currentWind)
        //Current Latitude
        var currentLat = data.coord.lat
        console.log(currentLat)
        //Current Longitude
        var currentLon = data.coord.lon
        console.log(currentLon)

        // Display Current UV Index
        findCurrentUvi(currentLat, currentLon);
    })

    
}

//Find UV Index for Current City
var findCurrentUvi = function(lat, lon) {
var apiUviUrl = "http://api.openweathermap.org/data/2.5/uvi?lat="+ lat + "&lon=" + lon + "&appid=a877d2c6ed19aff0fd1776e7df46844f"

fetch(apiUviUrl).then(function(response) {
        return response.json();
    })
    .then(function(data){
        console.log(data);
        // UVI Index
        var currentUvi = data.value
        console.log(currentUvi);
        
    })
}
 
findCurrentWeather("Knoxville")


//Save Searched City to Search History

// Change UV Index's Color (favorable, moderate, or severe)

//Show 5-day forecast (date, an icon representation of weather conditions, the temperature, and the humidity)

//Show weather from search history