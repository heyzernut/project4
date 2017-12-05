
const express = require('express');
const path = require('path');

const app = express();
// const port = process.env.NODE_ENV === 'production' ? process.env.PORT : 5100 // this is for our express server

const PORT = process.env.PORT || 5100;

// Priority serve any static files.
app.use(express.static(path.resolve(__dirname, '../react-ui/build')));

// Answer API requests.
app.get('/', function (req, res) {
  console.log('hit root')
  res.send('{"message":"Hello from the custom server!"}');
});
app.get('/api', function (req, res) {
  res.set('Content-Type', 'application/json');
  res.send('{"message":"Hello from the custom server!"}');
});

// All remaining requests return the React app, so it can handle routing.
app.get('*', function(request, response) {
  response.sendFile(path.resolve(__dirname, '../react-ui/build', 'index.html'));
});

app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}`);
});
