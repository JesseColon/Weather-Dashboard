$(function () {
  var currentCity;
  var APIKey = "5b7aef00fa1161dcd4e15780def2c64f";

  function appendList(city){
    var button = $("<button>")
      .addClass("tile button is-info is-child notification level-item")
      .text(city);
    $("#aside").append(button);
  } 

  $("#searchBtn").on("click", function () {
    var city = $("#city-search").val();
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&q=" + city + "&appid=" + APIKey + "&units=imperial"; 
    fetch(queryURL)
      .then(function (response) {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        
        var nameH2 = $("<h2>").attr("id", "name").addClass("title");
        var nameValue = data.name;
        nameH2.text(nameValue);
        $("#forcast").append(nameH2);

        var dt_textdiv = $("<div>").attr("id", "dt_text");
        var dt_textValue = data.dt_text;
        dt_textdiv.text(dt_textValue);
        $("#forcast").append(dt_textdiv);

        var weatherDiv = $("<div>").attr("id", "weather");
        var weatherValue = data.weather[0].icon;
        weatherDiv.text(weatherValue);
        $("#forcast").append(weatherDiv);

        var tempDiv = $("<div>").attr("id", "temp");
        var tempValue = data.main.temp;
        tempDiv.text("Temperature: " + tempValue);
        $("#forcast").append(tempDiv);

        var humidityDiv = $("<div>").attr("id", "humidity");
        var humidityValue = data.main.humidity;
        humidityDiv.text("Humidity: " + humidityValue);
        $("#forcast").append(humidityDiv);

        var windDiv = $("<div>").attr("id", "wind");
        var windValue = data.wind.speed;
        windDiv.text("Wind Speed: " + windValue);
        $("#forcast").append(windDiv);
      
      })
      .catch(function (error) {
        console.error("Error fetching data:", error);
      });
    appendList(city);
  });
      $("#searchBtn").on("click", function () {
        var city = $("#city-search").val();
        var AltQueryURL = "https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&q=" + city + "&appid=" + APIKey + "&units=imperial"; 
        fetch(AltQueryURL)
          .then(function (response) {
            if (!response.ok) {
              throw new Error("Network response was not ok");
            }
            return response.json();
          })
          .then(function (data) {
            console.log(data);


        var mainDiv = $("<div>").attr("id", "main");
        var mainValue = data.main;
        mainDiv.text("mainerature: " + mainValue);
        $("#fiveDayForecast").append(mainDiv);

          
          
          });


        })

});

