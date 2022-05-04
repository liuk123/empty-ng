

const express = require('express')

function app() {
  const server = express();

  // 路由
  server.use(express.urlencoded({extended: false}))
  server.use(express.json())
  let frontend = require('./node/routes/frontend')
  server.use('/nodeapi', frontend)
  return server;
}

function run() {
  const port = process.env.PORT || 80;
  const server = app();
  server.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}
run();
