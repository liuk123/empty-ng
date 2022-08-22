import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { NzIconService } from 'ng-zorro-antd/icon';
import {environment} from '../environments/environment'
// import { CheckForUpdateService } from './core/services/check-for-update';
import * as marked from 'marked';
import { ConfigService } from './biz/services/common/config.service';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent implements OnInit {
  
  constructor(
    // checkForUpdateService: CheckForUpdateService,
    private iconSrv: NzIconService,
    @Inject(PLATFORM_ID) platformId: object,
  ) {
    ConfigService.Config.isBrowser = isPlatformBrowser(platformId)
    
    // checkForUpdateService.load()
    this.iconSrv.changeAssetsSource(ConfigService.Config.iconUrl)

    // marked 设置
    const renderer = {
      heading(text:string, level:number, raw: string, slugger: any) {
        const id = slugger.slug(raw);
        return `<h${level} id="ci_${id}" class="anchor-h">${text}</h${level}>\n`;
      },
      link(href: string, title:string, text:string){
        return `<a href="${href}" class="marked-link" rel="noopener" target="_blank" title="${title||text}">${text}</a>`
      },
      image(href, title, text){
        return `<img title="${title||text}" class="marked-image" data-source="${href}">`
      }
    }
    let renderer1 =new marked.Renderer()
    marked.setOptions({
      renderer: Object.assign(renderer1, renderer),
      pedantic: false,
      gfm: true,
      breaks: false,
      sanitize: false,
      smartLists: true,
      smartypants: false,
      xhtml: false,
    })
    // ==========
  }
  
  ngOnInit(){
    console.log('是否是生产环境'+environment.production)
  }
}
