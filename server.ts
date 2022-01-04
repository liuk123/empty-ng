import 'zone.js/node';

import { ngExpressEngine } from '@nguniversal/express-engine';
import * as express from 'express';
import { join } from 'path';
import { existsSync } from 'fs';

import { AppServerModule } from './src/main.server';
import { APP_BASE_HREF } from '@angular/common';
import {environment} from 'src/environments/environment'

const TIME_OUT = environment.timeOut;
const HOST = environment.proxyHost;

export function app(): express.Express {
  const server = express();

  const timeout = require('connect-timeout');
  const { createProxyMiddleware } = require('http-proxy-middleware');

  const distFolder = join(process.cwd(), 'dist/ins-demo/browser');
  // const publicFolder = join(process.cwd(), 'dist/ins-demo/public');
  const indexHtml = existsSync(join(distFolder, 'index.original.html')) ? 'index.original.html' : 'index';

  // 设置图标的静态文件icons
  // server.use('/icons', express.static(join(publicFolder, 'icons')))

  // Our Universal express-engine (found @ https://github.com/angular/universal/tree/master/modules/express-engine)
  server.engine('html', ngExpressEngine({
    bootstrap: AppServerModule,
  }));

  server.set('view engine', 'html');
  server.set('views', distFolder);

  

  // Example Express Rest API endpoints
  // 设置超时 返回超时响应
  server.use(timeout(TIME_OUT));
  server.use((req, res, next) => {
    if (!(req as any).timedout) next();
  });

  const options = {
    target: HOST, // target host
    changeOrigin: true, // needed for virtual hosted sites
    ws: true, // proxy websockets
    pathRewrite: {
      '^/api':''
    },
    router: {
      
    },
  };
  server.use(createProxyMiddleware(['/api'], options));
  
  // Serve static files from /browser
  server.get('*.*', express.static(distFolder, {
    maxAge: '1y'
  }));

  // server.use(express.urlencoded({extended: false}))
  // server.use(express.json())
  // server.post('/htmltojson', (req, res)=>{
  //   console.log('安装抓取html模块，返回数据')
  //   console.log(req.body.html)
  // })

  // All regular routes use the Universal engine
  server.get('*', (req, res) => {
    res.render(indexHtml, {
      req,
      providers: [{ provide: APP_BASE_HREF, useValue: req.baseUrl }]
    });
  });

  return server;
}

function run(): void {
  const port = process.env.PORT || 80;

  // Start up the Node server
  const server = app();
  server.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

// Webpack will replace 'require' with '__webpack_require__'
// '__non_webpack_require__' is a proxy to Node 'require'
// The below code is to ensure that the server is run only when not requiring the bundle.
declare const __non_webpack_require__: NodeRequire;
const mainModule = __non_webpack_require__.main;
const moduleFilename = mainModule && mainModule.filename || '';
if (moduleFilename === __filename || moduleFilename.includes('iisnode')) {
  run();
}

export * from './src/main.server';
