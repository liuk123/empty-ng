
const express = require('express');
const cookieParser = require('cookie-parser');
const e = require('connect-timeout');

const app = express();

app.use(cookieParser());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(function (req, res, next) {
  console.log(req.headers)
  // if(req.headers['app_key'].slice(5,7)!== new Date().getDate().toString().padStart(2, '0')){
  //   res.status(401);
  //   res.end(null);
  // }else{
  //   next();
  // }
  // res.header("Access-Control-Allow-Origin", "http://www.cicode.cn");
  // res.header('Access-Control-Allow-Credentials', 'true');
  // res.header(
  //   'Access-Control-Allow-Headers',
  //   'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  // );
  // res.header('Access-Control-Allow-Methods', 'GET');
  next();
});

app.options('/*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'OPTIONS');
  res.header(
    'Access-Control-Allow-Headers',
    'Content-Type, Authorization, Content-Length, X-Requested-With'
  );
  res.sendStatus(200);
});

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