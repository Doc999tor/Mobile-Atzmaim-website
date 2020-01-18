const express = require("express");
const { config } = require("./components-lib/Home_website/config_ssr.js")
const { h } = require("preact");
const render = require('preact-render-to-string');
const path = require("path");
const chalk = require("chalk");
const { App } = require('./client/App');
const mustacheExpress = require('mustache-express');

const app = express();
const port = 8080;
app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', process.cwd() + '/views');
app.use(express.static(path.join(__dirname, "dist")));
app.get('*', (req, res) => {
  console.log('empty', req.url);
  console.log(config.baseUrl, req.url, config.baseUrl===req.url );
  res.render('index', {
    ssr: render(h(App, {url: req.url})),
  });
});
app.get('/en/home', (req, res, next) => {
  console.log('home', req.url);
  console.log(config.baseUrl, req.url, config.baseUrl===req.url );
  res.render('index', {
    ssr: render(h(App, {url: req.url})),
  });
});
app.get('/en/contact_us', (req, res) => {
  console.log('contact_us', req.url);
  // res.send('contact_us page')
  res.render('contact_us', {
    ssr: render(h(App, {url: req.url})),
  });
});
app.listen(port);

console.log(chalk.green(`Server started at http://localhost:${port}`));