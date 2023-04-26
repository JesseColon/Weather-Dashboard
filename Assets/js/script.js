var searchBtn = document.getElementById("#searchBtn");
var city = document.getElementById("city-search");
var APIKey = "5b7aef00fa1161dcd4e15780def2c64f";
var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;



fetch(queryURL)
.then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });

  console.log(city);

  function cityList() { 



 }

searchBtn.onclick = () => {

  console.log(city);

}

