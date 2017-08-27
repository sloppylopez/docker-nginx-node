const PORT = 8080;

const express = require('express');
const path = require('path');
const app = express();
const chalk = require('chalk');
const log = console.log;

require('./browsersync-init');

app.use(express.static(path.join(__dirname, "../../app")));
app.use(express.static(path.join(__dirname, "../../app/jspm_packages/github")));
app.use(express.static(path.join(__dirname, "../../app/jspm_packages/npm")));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '../../app/index.html'));
});

app.listen(PORT);

log(chalk.magenta('(づ ￣ ³￣)づ ') + chalk.blue(`Node server listening on *:${PORT}`));