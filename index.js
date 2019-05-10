const express = require('express');
const app = express();

// API
app.get('/api/test', (req, res) => {
  const count = 5
  let random = Array.from(Array(count).keys()).map(x => Math.random() * Math.floor(100))
  res.json(random);
  console.log(`Sent JSON`);
});



const port = process.env.PORT || 3000;
app.listen(port);
console.log(`App listening on ${port}`);