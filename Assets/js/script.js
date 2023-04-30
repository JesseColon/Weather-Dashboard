$(function () {
var city = $("#city-search").val();
var APIKey = "5b7aef00fa1161dcd4e15780def2c64f";
var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;

fetch(queryURL)
.then(function (response) {
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
})
.then(function (data) {
  console.log(data);
})
.catch(function (error) {
  console.error("Error fetching data:", error);
});

console.log(city);

  function appendList(){

    var button = $("<button>")

    .addClass("tile button is-info is-child notification level-item")
    .text(city);
  $("#aside").append(button);

   } 

// $('#searchBtn').click( function(){
//   appendList();
// });

$("#searchBtn").on("click", function () {
  city = $("#city-search").val();
  appendList();
});

});