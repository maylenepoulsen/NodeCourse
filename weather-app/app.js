const request = require("request");
const geocode = require('./utils/geocode');

//const url = 'http://api.weatherstack.com/current?access_key=9a8be277d5082cd17452f38365ab9c8f&query=37.8267,-122.4233&units=f';
//const mapBoxUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoibWF5bGVuZXNraSIsImEiOiJja2E4dHBkbWowZzAxMnlxa3djaGhqZHNrIn0.fPycVFMT1nKWqNCxcKmVeg&limit=1';

// request({ url: url, json: true }, (error, response) => {
//   if (error) {
//     console.log('Unable to connect to weather service.')
//   } else if (response.body.error) {
//     console.log('Unable to find location')
//   } else {
//     const data = response.body.current;
//     const weatherCast = response.body.current.weather_descriptions[0];
//     console.log(weatherCast);
//     console.log(
//       `It is currently ${data.temperature} degrees outside. It feels like ${data.feelslike} degrees outside.`
//     );
//   }
// });

// request({ url: mapBoxUrl, json: true }, (error, response) => {
//     if (error) {
//       console.log('Unable to connect to geocoding service')
//     } else if (response.body.features.length === 0){
//       console.log('Sorry, there were no matching results. Please try a different location.')
//     } else {
//     const latitude = response.body.features[0].center[1];
//     const longitude = response.body.features[0].center[0];
//     console.log(latitude, longitude)
//     }
// })

geocode('San Antonio', (error, data) => {
  console.log('Error', error)
  console.log('Data', data)
})
