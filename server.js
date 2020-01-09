const express = require("express");
const { h } = require("preact");
const render = require('preact-render-to-string');
const path = require("path");
const chalk = require("chalk");
const { App } = require('./client/App');

const app = express();
const port = 8080;
app.use(express.static(path.join(__dirname, "dist")));
app.listen(port);
app.get('*', (req, res) => {
  let html = render(h(App, {url: req.url}));
  res.send(`
  <!DOCTYPE html>
  <html lang="en">
  <head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link href="./style.css" rel="stylesheet">
  <title>Preact SSR</title>
  </head>
  <body>
  <div id="app">${html}</div>
  <script src="./app.js"></script>
  </body>
  </html>
  `);
});

console.log(chalk.green(`Server started at http://localhost:${port}`));