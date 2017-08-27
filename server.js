const PORT = 8080;
// const BS_PORT = 7000;
// const BUNDLE = 'npm run bundle:node';
// const UNBUNDLE = 'npm run unbundle:node';
// const DIST_FOLDER = './app/dist';

const express = require('express');
const path = require('path');
// const bs = require('browser-sync').create();
const app = express();
const bs = require('./browser-sync.js');
// const shell = require('shelljs');

app.use(express.static(path.join(__dirname, "./app")));
app.use(express.static(path.join(__dirname, "./app/jspm_packages/github")));
app.use(express.static(path.join(__dirname, "./app/jspm_packages/npm")));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/app/index.html');
});

app.listen(PORT);

console.log(`Whalephant Node server listening on *:${PORT}`);

// bs.init(null, {
//   proxy: `http://docker.nginx.node.com:${PORT}`,
//   browser: "google chrome",
//   port: BS_PORT,
//   watchOptions: {
//     ignoreInitial: true
//   },
//   files: [
//     {
//       match: ["app/components", "app/stylesheets"],
//       fn: function (event, file) {
//         if (event === 'change') {
//           console.log(`${event} => ${file}`);
//           fs.readdir(DIST_FOLDER, (err, files) => {
//             if (err) throw err;
//             shell.exec(!files.length ? UNBUNDLE : BUNDLE, {async: true},
//               (code, stdout, stderr) => {
//                 if (stderr) throw stderr;
//                 bs.reload();
//               });
//           });
//         }
//       },
//       options: {
//         ignored: ["app/jspm_packages", "app/node_modules", "app/dist"]
//       }
//     }
//   ]
// });
//
// console.log(`Browser-Sync server listening on *:${BS_PORT}`);