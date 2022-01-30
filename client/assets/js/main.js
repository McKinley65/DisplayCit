window.onload = function(){

 fetch("/api/weather")
.then(x => 
    // x.text()
    fetch("/api/weather")
    .then(y => 

    updateUI({
        "weather":JSON.parse(x.text()),
        "news": JSON.parse(y.text())
        
        })
    )
    )


updateUI({
"weather":{temp: "50", describe:""},
"news": "Making Money Online, the Hard Way"

})
}


var updateUI = function(x){

    console.log(x)
    document.getElementById("weathertext").innerText= x.weather.temp

    document.getElementById("news").innerText= x.news


}