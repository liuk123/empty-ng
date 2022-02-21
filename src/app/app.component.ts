import { Component, OnInit } from '@angular/core';
import { NzIconService } from 'ng-zorro-antd/icon';
import {environment} from '../environments/environment'
import { CheckForUpdateService } from './core/services/check-for-update';
import * as marked from 'marked';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent implements OnInit {
  
  constructor(
    checkForUpdateService: CheckForUpdateService,
    private iconSrv: NzIconService
  ) {
    this.iconSrv.changeAssetsSource(environment.iconUrl)

    // marked 设置
    const renderer = {
      heading(text:string, level:number) {
        return `
          <h${level}>
            <a id="${text}" class="anchor">
              <span class="header-link"></span>
            </a>
            ${text}
          </h${level}>`;
      },
      link(href: string, title:string, text:string){
        return `<a href="${href}" rel="nofollow" title="${title}">${text}</a>`
      }
    }
    marked.use({
      renderer,
      headerIds: true
    })
    // ==========
  }
  
  ngOnInit(){
    console.log('是否是生产环境'+environment.production)
  }
}
