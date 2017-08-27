const PORT = 8080;
const BS_PORT = 7000;
const bs = require('browser-sync').create();
const reloadChanges = require('./reload');

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
          reloadChanges(bs);
        }
      }
    }
  ]
});

console.log(`Browser-Sync server listening on *:${BS_PORT}`);