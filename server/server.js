const express = require('express');

const app = express();
const port = process.env.PORT || 3000;


// TEST 1
app.get('/', (req, res) => {
  res.send('Hello world!');
});


// TEST 2
app.get('/bad', (req, res) => {
  res.status(404).send({
    error: 'Not found'
  });
});


// TEST 3
app.get('/projects', (req, res) => {
  res.send({
    year: 2016, 
    name: 'Mocha playground app'
  });
});


// TEST 4
app.get('/users', (req, res) => {
  res.send([
    {name: 'Pete', age: 25},
    {name: 'Andy', age: 24}
  ]);
});



app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

module.exports.app = app;
