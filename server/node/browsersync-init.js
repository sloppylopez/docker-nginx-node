const PORT = 8080;
const BS_PORT = 7000;
const bs = require('browser-sync').create();
const reload = require('./reload');

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
      fn: (event, file) => {
        reload.appChanges(event, file)
              .then(bs.reload());
      }
    }
  ]
});