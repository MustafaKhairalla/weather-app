var city = $("#city");
var date = $("#date");
var icon = $("#currentIcon");
var tempreture = $("#temp");
var humidity = $("#hum");
var WindSpeed = $("#WS");
var btn =$("#submit");
var userSearch = $(".form-control").val();
var image = $("#currentIcon");

var dayOne =$("#date1");
var dayTwo =$("#date2");
var dayThree =$("#date3");
var dayFour =$("#date4");
var dayFive =$("#date5");

var iconOne =$("#icon1");
var iconTwo =$("#icon2");
var iconThree =$("#icon3");
var iconFour =$("#icon4");
var iconFive =$("#icon5");

var tempFone =$("#f-temp1");
var tempFtwo =$("#f-temp2");
var tempFthree =$("#f-temp3");
var tempFfour =$("#f-temp4");
var tempFfive =$("#f-temp5");

var humFone =$("#f-hum1");
var humFtwo =$("#f-hum2");
var humFthree =$("#f-hum3");
var humFfour =$("#f-hum4");
var humFfive =$("#f-hum5");
 


//var btn1 =$("#0");
//var btn2 = $("#1");
//var btn3 = $("#2");
 

var cities = [];

//var queryURL = "http://api.openweathermap.org/data/2.5/forecast?q=" + userSearch + "&appid=166a433c57516f51dfab1f7edaed8413&units=imperial"



function genButton(userSearch){
    
   console.log(userSearch)
        var newBtn = $("<button>").text(userSearch)
        newBtn.attr("class" , "btn btn-lg btn-block sideButton");
        $("#list-btn").append(newBtn);
     
}

var apiKey = "676eed284e8d18337ac8c1125af2a4a6"


$(document).ready(function(){

    
$("#submit").click(function(){
    event.preventDefault();
    //var result = $(".form-control").val();
    var userSearch = $(".form-control").val();
   
    cities.push(userSearch);
  
    genButton(userSearch)
    //var arr1 = cities[0];
    //btn1.text(arr1);
    //userSearch = result;
    //console.log(result)
    getWether( userSearch);
    

})



})


function getWether( userSearch){
    iconOne.empty();
    iconTwo.empty();
    iconThree.empty();
    iconFour.empty();
    iconFive.empty();
    image.empty();

//console.log( "s is " + userSearch)

var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + userSearch + "&appid=676eed284e8d18337ac8c1125af2a4a6&units=imperial"

$.ajax({
    url : queryURL ,
    method : "GET"
}).then(function(response){
    var cCity = response.city.name;
    console.log(cCity)
    city.text(cCity)
    var cDate = (moment().format("MMM Do YYYY") + " ")
    date.text(cDate);
    var icon = $("<img>").attr("src" , "https://openweathermap.org/img/wn/" + response.list[0].weather[0].icon + "@2x.png");
    icon.addClass("icon");
    image.append(icon);
    var cTempreture = response.list[0].main.temp;
    tempreture.text(cTempreture + " F");
    var cHumidity = response.list[0].main.humidity;
    humidity.text(cHumidity + " %");
    var cWindSpeed = response.list[0].wind.speed;
    WindSpeed.text(cWindSpeed + " MPH");

    var date1 = moment().add(1, 'd');
    //.format("MMM do YY")
    dayOne.text(date1);

    var date2 = moment().add(2, 'd');
    dayTwo.text(date2);
    var date3 = moment().add(3, 'd');
    dayThree.text(date3);
    var date4 = moment().add(4, 'd');
    dayFour.text(date4);
    var date5 = moment().add(5, 'd');
    dayFive.text(date5);

    iconOne.append($("<img>").attr("src" , "https://openweathermap.org/img/wn/" + response.list[6].weather[0].icon + "@2x.png").addClass("icon"))
    iconTwo.append($("<img>").attr("src" , "https://openweathermap.org/img/wn/" + response.list[14].weather[0].icon + "@2x.png").addClass("icon"))
    iconThree.append($("<img>").attr("src" , "https://openweathermap.org/img/wn/" + response.list[21].weather[0].icon + "@2x.png").addClass("icon"))
    iconFour.append($("<img>").attr("src" , "https://openweathermap.org/img/wn/" + response.list[28].weather[0].icon + "@2x.png").addClass("icon"))
    iconFive.append($("<img>").attr("src" , "https://openweathermap.org/img/wn/" + response.list[37].weather[0].icon + "@2x.png").addClass("icon"))
    
    tempFone.text("Temp: " + response.list[6].main.temp + " F");
    tempFtwo.text("Temp: " + response.list[14].main.temp + " F");
    tempFthree.text("Temp: " + response.list[21].main.temp + " F");
    tempFfour.text("Temp: " + response.list[28].main.temp + " F");
    tempFfive.text("Temp: " + response.list[37].main.temp + " F");

    humFone.text("Humidity: " + response.list[6].main.humidity + " %");
    humFtwo.text("Humidity: " + response.list[14].main.humidity + " %");
    humFthree.text("Humidity: " + response.list[21].main.humidity + " %");
    humFfour.text("Humidity: " + response.list[28].main.humidity + " %");
    humFfive.text("Humidity: " + response.list[37].main.humidity + " %");


})


}

$(document).on ('click', '.sideButton', function(){
const city = $(this).text();
console.log('click bt ' , city)
    getWether( city)
})