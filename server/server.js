const PORT = 8080;

const express = require('express');
const path = require('path');
const app = express();
require('./browsersync-init.js');

app.use(express.static(path.join(__dirname, "../app")));
app.use(express.static(path.join(__dirname, "../app/jspm_packages/github")));
app.use(express.static(path.join(__dirname, "../app/jspm_packages/npm")));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '../app/index.html'));
});

app.listen(PORT);

console.log(`Node server listening on *:${PORT}`);