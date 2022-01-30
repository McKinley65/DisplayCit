const express = require('express')
const Parser = require('rss-parser');
const request = require('request');

const app = express()
let parser = new Parser();

var API_KEY = '6d4345254a23efccfb861669c6f141cc';
const newRSS = "https://rss.nytimes.com/services/xml/rss/nyt/Technology.xml"
let city = "greenville"


let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${API_KEY}`

app.get('/news', function (req, res) {
  parser.parseURL(newRSS, function (err, feed) {

    res.json({
      "news": feed.items[between(1, feed.items.length)].title,
    });
  })
})

function between(min, max) {
  return Math.floor(
    Math.random() * (max - min) + min
  )
}

app.get('/weather', function (req, res) {
  request(url, { json: true }, (error, res2, body) => {
    if (error) {
      res.send("error")
      return console.log(error)
    };

    if (!error && res.statusCode == 200) {
      console.log(body.main.temp)
      console.log(body.weather[0].main)

      res.json({
        "weather": {
          "tempurature": body.main.temp,
          "description": body.weather[0].description
        },
      });
      // sendData.weather = { "temp": body.main.temp, "description": body.weather[0].main }
      // res.send(sendData)

    };
  })





})



app.listen(3000)



