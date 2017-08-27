const PORT = 8080;
const BS_PORT = 7000;
const BUNDLE = 'npm run bundle:node';
const UNBUNDLE = 'npm run unbundle:node';
const DIST_FOLDER = './app/dist';

const fs = require('fs');
const bs = require('browser-sync').create();
const shell = require('shelljs');

bs.init(null, {
  proxy: `http://docker.nginx.node.com:${PORT}`,
  browser: "google chrome",
  port: BS_PORT,
  watchOptions: {
    ignoreInitial: true
  },
  files: [
    {
      match: ["app/components", "app/stylesheets"],
      fn: function (event, file) {
        if (event === 'change') {
          console.log(`${event} => ${file}`);
          fs.readdir(DIST_FOLDER, function(err, files) {
            if (err) console.error(err);
            if (!files.length) {
              shell.exec(UNBUNDLE, {async: true}, (code, stdout, stderr) => {
                if (stderr) return console.log(stderr);
                bs.reload();
              });
            } else {
              shell.exec(BUNDLE, {async: true}, (code, stdout, stderr) => {
                if (stderr) return console.log(stderr);
                bs.reload();
              });
            }
          });
        }
      },
      options: {
        ignored: ["app/jspm_packages", "app/node_modules", "app/dist"]
      }
    }
  ]
});

console.log(`Browser-Sync server listening on *:${BS_PORT}`);

module.exports = bs;