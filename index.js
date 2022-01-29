const express = require('express')
const app = express()

let Parser = require('rss-parser');
let parser = new Parser();


app.get('/', function (req, res) {

  (async () => {
    let feed = await parser.parseURL('https://rss.nytimes.com/services/xml/rss/nyt/Technology.xml');

    console.log(feed.items[2].title)
    res.send(feed.items[2].title)

  })();
})



const request = require('request');
var API_KEY = '6d4345254a23efccfb861669c6f141cc';

const forecast = function (city) {

// var url = `http://api.openweathermap.org/data/2.5/weather?`
// 			+`lat=${latitude}&lon=${longitude}&appid=${API_KEY}`

let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${API_KEY}`

	request({ url: url, json: true }, function (error, response) {
		if (error) {
			console.log('Unable to connect to Forecast API');
		}
		else {
      console.log(response)

			// console.log('It is currently '
			// 	+ response.body.main.temp
			// 	+ ' degrees out.'
			// );

			// console.log('The high today is '
			// 	+ response.body.main.temp_max
			// 	+ ' with a low of '
			// 	+ response.body.main.temp_min
			// );

			// console.log('Humidity today is '
			// 	+ response.body.main.humidity
			// );
		}
	})
}

var latitude = 22.7196; // Indore latitude
var longitude = 75.8577; // Indore longitude

// Function call
forecast("greenville,sc");


app.listen(3000)



