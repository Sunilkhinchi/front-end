const express = require('express');
const app = express();

// Enable CORS for a specific origin
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://headless-api.infinityfreeapp.com/");
  next();
});

// Your other routes and middleware here

app.listen(3002); // Adjust the port as needed
