window.onload = function(){

 fetch("/api/weather")
.then(x => console.log(x.text()))


}