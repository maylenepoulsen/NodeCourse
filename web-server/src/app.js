const path = require('path');
const express = require('express');
const hbs = require('hbs');

const app = express();

//Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

//Setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

//Setup static directory to serve
app.use(express.static(publicDirectoryPath));

app.get('', (req, res) => {
  res.render('index', {
    title: 'Weather',
    name: 'Maylene Poulsen'
  });
});

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About Me',
    name: 'Maylene Poulsen'
  });
});

app.get('/help', (req, res) => {
  res.render('help', {
    title: 'Help Page',
    name: 'Maylene Poulsen',
    message: 'Refer back to the Node Course videos if you are stuck on some of the content.'
  });
});

app.get('/weather', (req, res) => {
  res.send({
      forecast: 'Hot and Sunny, about 90 degrees',
      location: 'Cedar Park, TX'
  });   
});

app.get('/help/*', (req, res) => {
  res.render('404', {
    title: '404',
    name: 'Maylene Poulsen',
    error: 'Help article not found',
  })
})

app.get('*', (req, res) => {
  res.render('404', {
    title: '404',
    name: 'Maylene Poulsen',
    error: 'Page not found', 
  })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000')
});