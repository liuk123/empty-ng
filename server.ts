import 'zone.js/node';

import { enableProdMode } from "@angular/core";
import { ngExpressEngine } from "@nguniversal/express-engine";
import { environment } from "src/environments/environment";
import { AppServerModule } from './src/app/app.server.module';

export { renderModule, renderModuleFactory } from '@angular/platform-server';

export const AppEngine = ngExpressEngine({
  bootstrap: AppServerModule
});

if (environment.production) {
  enableProdMode();
}