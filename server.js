const express = require("express");
const axios = require("axios");
const PORT = process.env.PORT || 5000;

const app = express();

app.get('/api/location', async (req, res) => {
  const url = "https://www.metaweather.com/api/location/2487956"
  const {data} = await axios.get(encodeURI(url));
  res.json(data);
});

app.listen(PORT, () => {
  console.log(`Server is started on port ${PORT}`);
});