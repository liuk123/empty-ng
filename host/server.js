
const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const cookieParser = require('cookie-parser');

const HOST = "http://localhost:8090"
const baseUrl = "/api"

const app = express();

app.use(cookieParser());
app.use(
  express.urlencoded({
    extended: true,
  })
);

require('./routes/frontend')(app)

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

app.use(express.json());




// setup routes
require('./routes/ssr-routes')(app);

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