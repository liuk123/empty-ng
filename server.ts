import 'zone.js/node';

import { ngExpressEngine } from "@nguniversal/express-engine";
import { AppServerModule } from './src/app/app.server.module';

export const AppEngine = ngExpressEngine({
  bootstrap: AppServerModule
});


export * from './src/main.server';