
const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const cookieParser = require('cookie-parser');
const fetchSrv = require('./server/fetchService');
let util = require('./util/util')

const HOST = "http://localhost:8090"
const baseUrl = "/api"

const app = express();

app.use(cookieParser());
app.use(
  express.urlencoded({
    extended: true,
  })
);

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
app.use(createProxyMiddleware((pathname)=>pathname.match('^/api') && !pathname.includes('nodeapi'), options));

app.use(express.json());
require('./routes/frontend')(app)

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

// // 重启时执行
// util.request('POST', 'http://localhost/create-sitemap', {
//   json: true,
//   headers: {
//     "content-type": "application/json",
//   },
//   body:{
//     "url": "http://www.cicode.cn/api/article/?pageIndex=1&pageSize=100&tags="
//   }
// })
fetchSrv.createSitemap()
// 定时执行
util.interval(()=>{
  fetchSrv.createSitemap()
  fetchSrv.fetchRss()
})