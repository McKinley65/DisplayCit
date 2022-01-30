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






fetch('/api/weather')
  .then((response) => {
    return response.json()
  })
  .then((data) => {
    // Work with JSON data here
    var data = {
        "weather": data.weather
    }
    updateUI(data)
    console.log(data.weather)
  })
  .catch((err) => {
    // Do something for an error here
  })
















    updateUI(data)
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
    console.log(x.weather.tempurature)

    // X=JSON.parse(x)
    // y =JSON.parse(y)

    // var data = {
    //     "weather": x,
    //     // "news": y 
        
    //     }
    document.getElementById("weathertext").innerText= x.weather.tempurature

    document.getElementById("news").innerText= x.news


}