const express = require('express')
const Parser = require('rss-parser');
const request = require('request');

const app = express()
let parser = new Parser();

var API_KEY = '6d4345254a23efccfb861669c6f141cc';
const newRSS = "https://rss.nytimes.com/services/xml/rss/nyt/Technology.xml"
let city = "greenville"



app.get('/', function (req, res) {
  parser.parseURL(newRSS, function (err, feed) {


    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${API_KEY}`



    request(url, { json: true }, (error, res, body) => {
      if (error) {
        return console.log(error)
      };

      if (!error && res.statusCode == 200) {
        console.log(body.main.temp)
        console.log(body.weather[0].main)

        // sendData.weather = { "temp": body.main.temp, "description": body.weather[0].main }
        // res.send(sendData)

      };
    })
    






    res.json({
      "news": feed.items[2].title,
      "weather": {
        "tempurature": "",
        "description": ""
      }
    });
  })
})



app.listen(3000)



