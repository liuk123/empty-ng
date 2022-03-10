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
    checkForUpdateService.load()
    this.iconSrv.changeAssetsSource(environment.iconUrl)

    // marked 设置
    const renderer = {
      heading(text:string, level:number) {
        return `
          <h${level}>
            <a label="${text}" class="anchor">
              <span class="header-link"></span>
            </a>
            ${text}
          </h${level}>`
      },
      link(href: string, title:string, text:string){
        return `
        <a href="${href}" rel="noopener" target="_blank" title="${title||text}">
        ${text}
        </a>`
      },
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
