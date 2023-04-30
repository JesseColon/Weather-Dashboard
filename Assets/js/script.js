$(function () {
  var forcastArea = $("#forcast");
  var APIKey = "5b7aef00fa1161dcd4e15780def2c64f";

  function appendList(city){
    var button = $("<button>")
      .addClass("tile button is-info is-child notification level-item")
      .text(city);
    $("#aside").append(button);
  } 

  $("#searchBtn").on("click", function () {
    var city = $("#city-search").val();
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey + "&units=imperial"; 
    fetch(queryURL)
      .then(function (response) {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        
        var tempDiv = $("<div>").attr("id", "temp");
        var tempValue = data.main.temp;
        tempDiv.text("Temperature: " + tempValue);
        $("#forcast").append(tempDiv);

      })
      .catch(function (error) {
        console.error("Error fetching data:", error);
      });
    appendList(city);
  });
});
console.log