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
    console.log(data)
    return(data)
  }).then((data) => {
      




    fetch('/api/news')
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      // Work with JSON data here
      var data = {
        "weather": datafirst,
        "news": data.news
    }


      console.log(data)
    updateUI(data)

    })
    .catch((err) => {
      // Do something for an error here
    })






  })
  .catch((err) => {
    // Do something for an error here
  })

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