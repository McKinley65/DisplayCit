window.onload = function(){

 fetch("/api/weather")
.then(x => console.log())


updateUI({
"weather":{temp: "50", describe:""},
"news": "this is the newadlkfja asklf kajsdf lkasdjf laks"

})
}


var updateUI = function(x){
    document.getElementById("weathertext").innerText= x.weather.temp

    document.getElementById("news").innerText= x.news


}