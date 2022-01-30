window.onload = function(){


    fetch('/api/weather')
  .then((response) => {
    return response.json()
  })
  .then((data) => {
    // Work with JSON data here
    var data = {
        "weather": data.weather
    }
    console.log(data.weather)
  })
  .catch((err) => {
    // Do something for an error here
  })

//  fetch("/api/weather")
// .then(x => 
//     // x.text()
//     console.log(x.JSON())
//     // updateUI(x.text())
//     // fetch("/api/news")
//     // .then(y => 

        
        
//     // )
//     )



// updateUI({
// "weather":{temp: "50", describe:""},
// "news": "Making Money Online, the Hard Way"

// })
}


var updateUI = function(x){

    console.log(x)

    // X=JSON.parse(x)
    // y =JSON.parse(y)

    // var data = {
    //     "weather": x,
    //     // "news": y 
        
    //     }
    console.log(data)
    document.getElementById("weathertext").innerText= x.weather.temp

    document.getElementById("news").innerText= x.news


}