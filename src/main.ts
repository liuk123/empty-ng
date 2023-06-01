
import { enableProdMode, PLATFORM_INITIALIZER } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { platformFactory } from './app/core/services/config.service';
import { environment } from './environments/environment';
// import { NzConfig } from 'ng-zorro-antd/core/config';

if (environment.production) {
  enableProdMode();
}
// const ngZorroConfig: NzConfig = {
//   // 注意组件名称没有 nz 前缀
//   theme: {
//     primaryColor: '#007ACC',
//     accentColor: '#D108FA',
//     bodyBackground: '#fafafa',
//     backgroundColor: 'rgba(0,0,0,.03)'
//   }
// };

document.addEventListener('DOMContentLoaded', () => {
  let fontSize = Math.floor(window.screen.width/1440 * 15 * 100 + 0.5)/100
  document.body.style.fontSize= (fontSize<=14?14:fontSize>=22?22:fontSize) + 'px'
  platformBrowserDynamic([
    {
      provide: PLATFORM_INITIALIZER,
      useFactory: platformFactory,
      multi: true,
    },
    // {
    //   provide: NZ_CONFIG, useValue: ngZorroConfig
    // }
  ]).bootstrapModule(AppModule)
    .then((ref)=>{
      if(window['ngRef']){
        window['ngRef'].destroy();
      }
      window['ngRef'] = ref;
    })
    .catch(err => console.error(err));
});
