const request = require('request');

const forecast = (latitude, longitude, callback) => {
  const url = 'http://api.weatherstack.com/current?access_key=9a8be277d5082cd17452f38365ab9c8f&query=' + latitude + ',' + longitude + '&units=f';

  request( {url: url, json: true}, (error, response) => {
    if (error) {
      callback('Unable to connect to weather service.', undefined)    
    } else if (response.body.error) {
      callback('Unable to find location', undefined)
    } else {
        const data = response.body.current;
        let weatherCast = response.body.current.weather_descriptions[0];

        if (weatherCast === undefined) {
            weatherCast = 'Unable to find weather cast'
        }
        callback(undefined, `${weatherCast}. It is currently ${data.temperature} degrees outside. It feels like ${data.feelslike} degrees outside.`)
    }
  })
};

module.exports = forecast;