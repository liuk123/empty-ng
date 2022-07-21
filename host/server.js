
const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const HOST = "http://localhost:8090"
const baseUrl = "/api"

const app = express();

// 转发
const options = {
  target: HOST, // target host
  changeOrigin: true, // needed for virtual hosted sites
  ws: true, // proxy websockets
  pathRewrite: {
    ['^'+baseUrl]:''
  },
  router: {
    
  },
};
app.use(createProxyMiddleware([baseUrl], options));


require('./server/express')(app)

require('./server/frontend')(app)

// setup routes
require('./server/ssr-routes')(app);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('404');
  err['statusCode'] = 404;

  next();
});

// catch errors
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.send(err);
});

// listen
const port = process.env.PORT || 80;
app.listen(port, function (err) {
  console.log('started to listen to port: ' + port);
  if (err) {
      console.log(err);
      return;
  }
});