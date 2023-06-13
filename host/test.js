
const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();


// 转发
const options = {
  target: config.link, // target host
  changeOrigin: true, // needed for virtual hosted sites
  ws: false, // proxy websockets
  pathRewrite: {
    ['^'+config.baseUrl]:''
  },
  router: {},
};
app.use(createProxyMiddleware((pathname)=>pathname.startsWith(config.baseUrl) && !pathname.startsWith(config.baseUrl + '/nodeapi'), options));



app.use(cookieParser());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());
require('./routes/frontend')(app)

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