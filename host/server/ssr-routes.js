const express = require('express')
const {join} = require('path')
const {existsSync} =  require('fs')

// ngExpressEngine from compiled main.js
const ssr = require(join(process.cwd(), 'dist/ins-demo/server/main'))
const distFolder = join(process.cwd(), 'dist/ins-demo/browser');
const indexHtml = existsSync(join(distFolder, 'index.original.html')) ? 'index.original.html' : 'index';


module.exports = function (app) {
  // set engine, we called it AppEngine in server.ts
  app.engine('html', ssr.AppEngine);

  // set view engine
  app.set('view engine', 'html');

  // set views directory, the clientside build output
  app.set('views', distFolder);

  app.get('*.*', express.static(distFolder, {
    maxAge: '1y'
  }));

  // now THIS
  app.get('/*', (req, res) => {
    console.log(req.url)
    res.render(indexHtml, {
      req
    });
  });
};