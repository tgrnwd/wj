const express = require('express');
const path = require('path');

const app = express();

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client')));

// API
app.get('/api/test', (req, res) => {
  const count = 5
  let random = Array.from(Array(count).keys()).map(x => Math.random() * Math.floor(100))
  
  res.json(random);
  console.log(`Sent JSON`);
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`App listening on ${port}`);