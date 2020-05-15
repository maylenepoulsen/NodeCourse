const request = require('request');

const url = 'http://api.weatherstack.com/current?access_key=9a8be277d5082cd17452f38365ab9c8f&query=37.8267,-122.4233&units=f';

request({ url: url, json: true }, (error, response) => {
   const data = response.body.current
   const weatherCast = response.body.current.weather_descriptions[0];
   console.log(weatherCast);
   console.log(`It is currently ${data.temperature} degrees outside. It feels like ${data.feelslike} degrees outside.`);
})