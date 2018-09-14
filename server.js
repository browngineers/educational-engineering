const express = require('express');
const app = express()

app.get('/', function(req, res) {
  res.send('Hello World!')
})



app.listen('3000', function() {
  console.log('Server listening on port 3000!');
})


// mehul added line
app.listen('3001', function() {
  console.log('Server listening on port 3001!');
})
