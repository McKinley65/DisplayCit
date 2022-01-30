window.onload = function(){

 fetch("/api/weather")
.then(x => 
    // x.text()
    console.log(x.text())
    // updateUI(x.text())
    // fetch("/api/news")
    // .then(y => 

        
        
    // )
    )



// updateUI({
// "weather":{temp: "50", describe:""},
// "news": "Making Money Online, the Hard Way"

// })
}


var updateUI = function(x, y){

    console.log(x, y)

    X=JSON.parse(x)
    y =JSON.parse(y)

    var data = {
        "weather": x,
        "news": y 
        
        }
    console.log(data)
    document.getElementById("weathertext").innerText= data.weather.temp

    document.getElementById("news").innerText= data.news


}