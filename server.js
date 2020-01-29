const express = require("express");
const { configFn } = require("./components-lib/Home_website/config_ssr.js")
const { all_translations } = require("./components-lib/Home_website/all.js")
const { h } = require("preact");
const render = require('preact-render-to-string');
const path = require("path");
const chalk = require("chalk");
const { App } = require('./client/App');
const mustacheExpress = require('mustache-express');

const app = express();
const port = 8080;
const home_page = configFn().baseUrl
app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', process.cwd() + '/views');
app.use(express.static(path.join(__dirname, "dist")));

app.get('/:lang/home', async (req, res) => {
  const { lang } = req.params
  let translations = JSON.stringify(all_translations[lang])
  let globalConfig = JSON.stringify(configFn(lang))
  let globalLang = JSON.stringify(lang)
  let config = configFn(lang)
  res.render('index', {
    ssr: render(h(App, {url: req.url, translations: all_translations[lang], config, lang })),
    translations,
    globalConfig,
    globalLang
  });
});
app.get('/:lang/contact_us', (req, res) => {
  res.render('contact_us', {
    ssr: render(h(App, {url: req.url})),
  });
});
app.listen(port);

console.log(chalk.green(`Server started at http://localhost:${port}${home_page}`));