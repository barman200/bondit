const express = require('express');

const loginController = require('./controllers/loginController');
const protfolioController = require('./controllers/protfolioController');
const dataController = require('./controllers/dataController');
const metadataController = require('./controllers/metadataController');
const bodyParser = require("body-parser");

let app = express();
let baseUrl = '/api/v1/';

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

app.all("/*", function(req, res, next){
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
  next();
});

app.listen(3000, () => {
	console.log('node server is running');
});

app.use(baseUrl+'login', loginController);
app.use(baseUrl+'my_portfolios/portfolios', protfolioController);
app.use(baseUrl+'my_portfolios/data', dataController);
app.use(baseUrl+'my_portfolios/metadata', metadataController);

