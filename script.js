var city = $("#city");
var date = $("#date");
var icon = $("#currentIcon");
var tempreture = $("#temp");
var humidity = $("#hum");
var WindSpeed = $("#WS");
var btn =$("#submit");
var userSearch = $(".form-control").val();
var image = $("#currentIcon");

//var btn1 =$("#0");
//var btn2 = $("#1");
//var btn3 = $("#2");
 

var cities = [];

//var queryURL = "http://api.openweathermap.org/data/2.5/forecast?q=" + userSearch + "&appid=166a433c57516f51dfab1f7edaed8413&units=imperial"

function genButton(){
    $("<buttom>").remove();
    for (var i=0 ; i < cities.length ; i++){
        var newBtn = $("<button>").text(cities[i])
        newBtn.attr("class" , "btn btn-lg btn-block");
        $("#list-btn").append(newBtn);
    }
}

var apiKey = "676eed284e8d18337ac8c1125af2a4a6"


$(document).ready(function(){

    
$("#submit").click(function(){
    event.preventDefault();
    //var result = $(".form-control").val();
    var userSearch = $(".form-control").val();
    cities.push(userSearch);
    genButton()
    //var arr1 = cities[0];
    //btn1.text(arr1);
    //userSearch = result;
    //console.log(result)



//console.log( "s is " + userSearch)

var queryURL = "http://api.openweathermap.org/data/2.5/forecast?q=" + userSearch + "&appid=676eed284e8d18337ac8c1125af2a4a6&units=imperial"

$.ajax({
    url : queryURL ,
    method : "GET"
}).then(function(response){
    var cCity = response.city.name;
    console.log(cCity)
    city.text(cCity)
    var cDate = (moment().format("MMM Do YYYY") + " ")
    date.text(cDate);
    var icon = $("<img>").attr("src" , queryURL + response.list[0].weather[0].icon + ".png");
    image.append(icon);
    var cTempreture = response.list[0].main.temp;
    tempreture.text(cTempreture);
    var cHumidity = response.list[0].main.humidity;
    humidity.text(cHumidity);
    var cWindSpeed = response.list[0].wind.speed;
    WindSpeed.text(cWindSpeed);

})

})



})


