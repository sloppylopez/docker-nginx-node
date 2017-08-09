const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, "./app")));
app.use(express.static(path.join(__dirname, "./app/jspm_packages")));

app.get('/', function (req, res) {
  console.log('Serving index');
  res.sendFile(__dirname + '/app/index.html');
});

app.listen(3000);

console.log('Whalephant Node server listening on *:8080');