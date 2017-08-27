const PORT = 8080;
const BS_PORT = 7000;
const bs = require('browser-sync').create();
const reload = require('./reload');
const chalk = require('chalk');
const log = console.log;

bs.init(null, {
  proxy: `http://docker.nginx.node.com:${PORT}`,
  browser: "google chrome",
  port: BS_PORT,
  https: true,
  watchOptions: {
    ignoreInitial: true
  },
  files: [
    {
      match: ["app/components", "app/stylesheets", "app/index.html"],
      fn: function (event, file) {
        reload.reloadChanges(event, file).then(bs.reload());
      }
    }
  ]
});

log(chalk.magenta('(づ ￣ ³￣)づ ') + chalk.blue(`Browser-Sync server listening on *:${BS_PORT}`));