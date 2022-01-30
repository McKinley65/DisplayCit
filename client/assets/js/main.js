window.onload = function(){

 fetch("/api/weather")
.then(x => 
    // x.text()
    fetch("/api/news")
    .then(y => 

    updateUI(x.text(),(y.text())
        
    )
    )
)


// updateUI({
// "weather":{temp: "50", describe:""},
// "news": "Making Money Online, the Hard Way"

// })
}


var updateUI = function(x, y){


    var data = {
        "weather":JSON.parse(x),
        "news": JSON.parse(y)
        
        }
    console.log(data)
    document.getElementById("weathertext").innerText= data.weather.temp

    document.getElementById("news").innerText= data.news


}