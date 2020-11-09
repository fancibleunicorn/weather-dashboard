//API Key a877d2c6ed19aff0fd1776e7df46844f


//Show Current Weather (city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index)
var findCurrentWeather = function(city) {
    //current weather by city
    var apiCurrentUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=a877d2c6ed19aff0fd1776e7df46844f"

    
    fetch(apiCurrentUrl).then(function(response) {
        return response.json();
    })
    .then(function(data){
        //Current City
        var currentCity = data.name;
        $("#current-city").empty().append(currentCity);

        // Current Date
        var currentDate = moment().format(' (M/DD/YYYY)')
        $("#current-city").append(currentDate);

        // Current Icon
        var iconCode = data.weather[0].icon
        var icon = "http://openweathermap.org/img/wn/" + iconCode + "@2x.png"
       $("#current-icon").attr('src', icon);

        // Current Temp
        var currentTemp = data.main.temp
        $("#current-temp").empty().append('Temperature: ' + currentTemp +' °F')

        //Current Humidity
        var currentHumid = data.main.humidity
        $("#current-humidity").empty().append('Humidity: ' + currentHumid + "%")

        //Current Windspeed
        var currentWind = data.wind.speed
        $("#current-wind").empty().append('Wind Speed: ' + currentWind +" mph")

        //Current Latitude
        var currentLat = data.coord.lat

        //Current Longitude
        var currentLon = data.coord.lon

        // Display Current UV Index
        findCurrentUvi(currentLat, currentLon);

        
        //Show 5-day forecast (date, an icon representation of weather conditions, the temperature, and the humidity)
        var fiveDayWeather = function(lat, lon) {
        var apiFiveUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&units=imperial&exclude=current,minutely,hourly,alerts&appid=a877d2c6ed19aff0fd1776e7df46844f"
        
            fetch(apiFiveUrl).then(function(response){
                return response.json();
            })
            .then(function(data) {
                    
                    //Day 1
                    // 5 Day Date
                    var currentDate = moment().add(1, 'days').format('M/DD/YYYY');
                    $("#5-day-date-1").empty().append(currentDate);
                
                    // 5 Day Icons
                    var iconCode = data.daily[0].weather[0].icon
                    var icon = "http://openweathermap.org/img/wn/" + iconCode + "@2x.png"
                    $("#5-day-icon-1").attr("src", icon);

                    // 5 Day Temperature
                    var currentTemp = data.daily[0].temp.day
                    $("#5-day-temp-1").empty().append('Temp: ' + currentTemp +' °F')

                    // 5 Day Humidity
                    var currentHumid = data.daily[0].humidity
                    $("#5-day-humid-1").empty().append('Humidity: ' + currentHumid + "%")

                    //Day 2
                    // 5 Day Date
                    var currentDate = moment().add(2, 'days').format('M/DD/YYYY');
                    $("#5-day-date-2").empty().append(currentDate);
                
                    // 5 Day Icons
                    var iconCode = data.daily[1].weather[0].icon
                    var icon = "http://openweathermap.org/img/wn/" + iconCode + "@2x.png"
                    $("#5-day-icon-2").attr("src", icon);

                    // 5 Day Temperature
                    var currentTemp = data.daily[1].temp.day
                    $("#5-day-temp-2").empty().append('Temp: ' + currentTemp +' °F')

                    // 5 Day Humidity
                    var currentHumid = data.daily[1].humidity
                    $("#5-day-humid-2").empty().append('Humidity: ' + currentHumid + "%")

                    //Day 3
                    // 5 Day Date
                    var currentDate = moment().add(3, 'days').format('M/DD/YYYY');
                    $("#5-day-date-3").empty().append(currentDate);
                
                    // 5 Day Icons
                    var iconCode = data.daily[2].weather[0].icon
                    var icon = "http://openweathermap.org/img/wn/" + iconCode + "@2x.png"
                    $("#5-day-icon-3").attr("src", icon);

                    // 5 Day Temperature
                    var currentTemp = data.daily[2].temp.day
                    $("#5-day-temp-3").empty().append('Temp: ' + currentTemp +' °F')

                    // 5 Day Humidity
                    var currentHumid = data.daily[2].humidity
                    $("#5-day-humid-3").empty().append('Humidity: ' + currentHumid + "%")

                    //Day 4
                    // 5 Day Date
                    var currentDate = moment().add(4, 'days').format('M/DD/YYYY');
                    $("#5-day-date-4").empty().append(currentDate);
                
                    // 5 Day Icons
                    var iconCode = data.daily[3].weather[0].icon
                    var icon = "http://openweathermap.org/img/wn/" + iconCode + "@2x.png"
                    $("#5-day-icon-4").attr("src", icon);

                    // 5 Day Temperature
                    var currentTemp = data.daily[3].temp.day
                    $("#5-day-temp-4").empty().append('Temp: ' + currentTemp +' °F')

                    // 5 Day Humidity
                    var currentHumid = data.daily[3].humidity
                    $("#5-day-humid-4").empty().append('Humidity: ' + currentHumid + "%")

                    //Day 4
                    // 5 Day Date
                    var currentDate = moment().add(5, 'days').format('M/DD/YYYY');
                    $("#5-day-date-5").empty().append(currentDate);
                
                    // 5 Day Icons
                    var iconCode = data.daily[4].weather[0].icon
                    var icon = "http://openweathermap.org/img/wn/" + iconCode + "@2x.png"
                    $("#5-day-icon-5").attr("src", icon);

                    // 5 Day Temperature
                    var currentTemp = data.daily[4].temp.day
                    $("#5-day-temp-5").empty().append('Temp: ' + currentTemp +' °F')

                    // 5 Day Humidity
                    var currentHumid = data.daily[4].humidity
                    $("#5-day-humid-5").empty().append('Humidity: ' + currentHumid + "%")
            })
        }
        fiveDayWeather(currentLat, currentLon);
    })
}

//Find UV Index for Current City
var findCurrentUvi = function(lat, lon) {
var apiUviUrl = "http://api.openweathermap.org/data/2.5/uvi?lat="+ lat + "&lon=" + lon + "&appid=a877d2c6ed19aff0fd1776e7df46844f"

fetch(apiUviUrl).then(function(response) {
        return response.json();
    })
    .then(function(data){
        // UVI Index
        var currentUvi = data.value
        $("#current-UVI").empty().removeClass().append(currentUvi);
        
        // Change UV Index's Color (favorable:1-2, moderate: 3-5, or severe: 6+)
        if (currentUvi < 2.01) {
            $("#current-UVI").addClass("bg-success text-white p-2")
        }
        else if (currentUvi <5.01) {
            $("#current-UVI").addClass("bg-warning text-white p-2")
        }
        else {
            $("#current-UVI").addClass("bg-danger text-white p-2")
        }

    })
}

//When Search Button is clicked
$("#city-btn").click(function(event) {
    event.preventDefault();
    var cityName = $("#city").val();
    findCurrentWeather(cityName);
    //Add searched City to Search History
    $("#recent").append("<li id='recent-city' class='list-group-item'>" + cityName +"</li>");
})

//When Recent City is clicked
$("#recent").on("click", "li", function (event) {
    event.preventDefault();
    var recentCity =$(this).text();
    findCurrentWeather(recentCity)
})

//Bugs:

//don't show a city if you search it multiple times

//error message if invalid city