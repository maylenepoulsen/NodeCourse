const path = require('path');
const express = require('express');

const app = express();
const publicDirectoryPath = path.join(__dirname, '../public')

app.set('view engine', 'hbs')
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
  res.render('index', {
    title: 'Weather',
    name: 'Maylene Poulsen'
  })
})

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About Me',
    name: 'Maylene Poulsen'
  })
})

app.get('/help', (req, res) => {
  res.render('help', {
    title: 'Help Page',
    message: 'Refer back to the Node Course videos if you are stuck on some of the content.'
  })
})

app.get('/weather', (req, res) => {
  res.send({
      forecast: 'Hot and Sunny, about 90 degrees',
      location: 'Cedar Park, TX'
  })    
})

app.listen(3000, () => {
    console.log('Server is up on port 3000')
})