var apiKey= "d7798a44e841b86ebffed70246d4cd4e"

var searchEl = document.querySelector(".search-btn");
var searchInputEl = document.querySelector("#citySearch");


function renderCurrentForcast(cityName, result1){
    //to be done
    console.log(result1);
    console.log(result1);
    console.log(result1);

}
function getCordintates(cityName){
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`
    console.log(url);
    fetch(url).then(function(response){
        console.log(response.json());
        return response.json();
    }).then(function(result1){
        console.log(result1);
        renderCurrentForcast(cityName, result1);
    })
    .catch(function(error){
        console.log(error);
    })
}
let response;
function getWeather(cityName){
    console.log(cityName);
    response = getCordintates(cityName);
    console.log(response);
    // getCurrentFortcast();
    console.log(response);
    console.log(response);
    console.log(response);
    console.log(response);

}
function searchHandler(){
    // console.log("search works");
    let cityName = searchInputEl.value;
    console.log(cityName, "cityName");
    getWeather(cityName);
    
}


searchEl.addEventListener("click", searchHandler);

// https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}