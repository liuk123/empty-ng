
import { enableProdMode, PLATFORM_INITIALIZER } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { platformFactory } from './app/core/services/config.service';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

document.addEventListener('DOMContentLoaded', () => {
  platformBrowserDynamic([
    {
      provide: PLATFORM_INITIALIZER,
      useFactory: platformFactory,
      multi: true,
    }
  ]).bootstrapModule(AppModule)
    .then((ref)=>{
      if(window['ngRef']){
        window['ngRef'].destroy();
      }
      window['ngRef'] = ref;
    })
    .catch(err => console.error(err));
});
