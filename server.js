const express = require("express");
const axios = require("axios");
const PORT = process.env.PORT || 5000;
const cors = require("cors");
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

//  ---  /api/location/(woeid)/

app.get('/api/location', cors(), async (req, res) => {
  const { woeid } = req.query;
  const url = encodeURI(`https://www.metaweather.com/api/location/${woeid}`);
  const {data} = await axios.get(url);
  res.json(data);
});

app.get('/api/init', cors(), async (req, res) => {
  const url = encodeURI(`https://www.metaweather.com/api/location/2442047`);
  const {data} = await axios.get(url);
  res.json(data);
});

app.get('/api/query', cors(), async (req, res) => {
  const { location } = req.query;
  const url = 'https://www.metaweather.com/api/location/search/';
  const {data} = await axios.get(url, {
    params: {
      query: location
    }
  });
  res.json(data);
});

app.get('/api/latlong', cors(), async (req, res) => {
  const { lat, long } = req.query;
  const url = 'https://www.metaweather.com/api/location/search/';
  const {data} = await axios.get(url, {
    params: {
      lattlong: `${lat},${long}`
    }
  });
  res.json(data);
});

app.listen(PORT, () => {
  console.log(`Server is started on port ${PORT}`);
});