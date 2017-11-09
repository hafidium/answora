const express = require('express')
var bodyParser = require('body-parser');
var logger = require('morgan');
const app = express();

//--------------------------------------------------

var routes = require('./routes/questions-answers');

//--------------------------------------------------

app.use(bodyParser.json());
app.use(logger('dev'));

//--------------------------------------------------

app.use('/questions-answers', routes);

//--------------------------------------------------

app.get('/', function (req, res) {
  res.send('Hello World!');
})

app.listen(3000, function () {
  console.log('Server listening on port 3000!');
})

//--------------------------------------------------

module.exports = app;