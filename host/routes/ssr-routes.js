const express = require('express')
const {join} = require('path')
const {existsSync} =  require('fs')



module.exports = function (app) {

  // ngExpressEngine from compiled main.js
  const {AppEngine} = require(join(process.cwd(), 'dist/ins-demo/server/main'))
  const distFolder = join(process.cwd(), 'dist/ins-demo/browser');
  const indexHtml = existsSync(join(distFolder, 'index.original.html')) ? 'index.original.html' : 'index';

  // make sure global window is set to null
  global.window = undefined;
  global.WebConfig = require(join(distFolder, 'assets/config/config.prod.js'))


  // set engine, we called it AppEngine in server.ts
  app.engine('html', AppEngine);

  // set view engine
  app.set('view engine', 'html');

  // set views directory, the clientside build output
  app.set('views', distFolder);

  app.get('*.*', express.static(distFolder, {
    maxAge: '1y'
  }));

  app.get('/*', (req, res) => {
    let proto
    if (req.headers && req.headers['x-forwarded-proto']) {
      proto = req.headers['x-forwarded-proto'].toString()
    }else{
      proto = req.protocol
    }
    const url= `${proto}://${req.get('host')}`;
    // const url= `${proto}://172.18.48.247`;
    // const url= `${proto}://39.103.199.186`;
    res.render(indexHtml, {
      req,
      providers: [
        {
          provide: 'serverUrl',
          useValue: url,
        }
      ],
    });
  });
};