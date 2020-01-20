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
const home_page = config.baseUrl
const contact_page = config.urls.contact_us
app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', process.cwd() + '/views');
app.use(express.static(path.join(__dirname, "dist")));

app.get(home_page, (req, res, next) => {
  res.render('index', {
    ssr: render(h(App, {url: req.url})),
  });
});
app.get(contact_page, (req, res) => {
  res.render('contact_us', {
    ssr: render(h(App, {url: req.url})),
  });
});
app.listen(port);

console.log(chalk.green(`Server started at http://localhost:${port}${home_page}`));