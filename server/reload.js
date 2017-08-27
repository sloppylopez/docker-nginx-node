const fs = require('fs');
const path = require('path');
const shell = require('shelljs');

const DIST_FOLDER = path.join(__dirname, '../app/dist');
const BUNDLE = 'npm run bundle:jspm';
const UNBUNDLE = 'npm run unbundle:jspm';

function reloadChanges(bs) {
  fs.readdir(DIST_FOLDER, function (err, files) {
    if (err) console.error(err);
    shell.exec(!files.length ? UNBUNDLE : BUNDLE, {async: true},
      (code, stdout, stderr) => {
        if (stderr) return console.log(stderr);
        bs.reload();
      });
  });
}

module.exports = reloadChanges;