const fs = require('fs');
const path = require('path');
const shell = require('shelljs');
const chalk = require('chalk');
const log = console.log;

const DIST_FOLDER = path.join(__dirname, '../../app/dist');
const BUNDLE = 'npm run bundle:jspm';
const UNBUNDLE = 'npm run unbundle:jspm';

function exec(command, options) {
  return new Promise((resolve, reject) => {
    shell.exec(command, options,
      (code, stdout, stderr) => {
        if (stderr) reject(stderr);
        log(chalk.magenta('(づ ￣ ³￣)づ ') + chalk.green('Reloaded application dependencies'));
        resolve();
      })
  });
}

function getAppStatus() {
  return new Promise((resolve, reject) => {
    fs.readdir(DIST_FOLDER, function (err, files) {
      if (err) reject(err);
      resolve(files)
    });
  });
}

function reloadChanges(event, file) {
  return new Promise((resolve) => {
    log(chalk.magenta('(づ ￣ ³￣)づ ') + chalk.green(`${event} => ${file}`));
    if (event === 'change' && file !== 'app/index.html') {
      this.getAppStatus()
        .then(files => exec(!files.length ? UNBUNDLE : BUNDLE, {async: true}))
    } else {
      resolve()
    }
  });
}


module.exports = {
  exec: exec,
  getAppStatus: getAppStatus,
  reloadChanges: reloadChanges
};