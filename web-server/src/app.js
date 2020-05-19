const path = require('path');
const express = require('express');

const app = express();

const publicDirectoryPath = path.join(__dirname, '../public')
app.use(express.static(publicDirectoryPath))

app.get('/weather', (req, res) => {
  res.send({
      forecast: 'Hot and Sunny, about 90 degrees',
      location: 'Cedar Park, TX'
  })    
})

app.listen(3000, () => {
    console.log('Server is up on port 3000')
})