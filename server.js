const express = require('express');
const path = require('path');
const app = express();
const PORT = 8080;

app.use(express.static(path.join(__dirname, "./app")));
app.use(express.static(path.join(__dirname, "./app/jspm_packages/github")));
app.use(express.static(path.join(__dirname, "./app/jspm_packages/npm")));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/app/index.html');
});

app.listen(PORT);

console.log(`Whalephant Node server listening on *:${PORT}`);