import 'zone.js/node';

import { ngExpressEngine } from "@nguniversal/express-engine";
import { AppServerModule } from './src/app/app.server.module';
import { PLATFORM_INITIALIZER } from '@angular/core';
import { platformFactory } from './src/app/core/services/config.service';
import { environment } from './src/environments/environment';
import { enableProdMode } from '@angular/core';

export const AppEngine = ngExpressEngine({
  bootstrap: AppServerModule,
  providers: [
    {
      provide: PLATFORM_INITIALIZER,
      useFactory: platformFactory,
      multi: true,
    }
  ]
});

if (environment.production) {
  enableProdMode();
}

export {AppServerModule} 
export { renderModuleFactory } from '@angular/platform-server';