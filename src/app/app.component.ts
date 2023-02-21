import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { NzIconService } from 'ng-zorro-antd/icon';
import {environment} from '../environments/environment'
// import { CheckForUpdateService } from './core/services/check-for-update';
import * as marked from 'marked';
import { ConfigService } from './core/services/config.service';
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

    // marked code
    const escapeTest = /[&<>"']/;
    const escapeReplace = /[&<>"']/g;
    const escapeTestNoEncode = /[<>"']|&(?!#?\w+;)/;
    const escapeReplaceNoEncode = /[<>"']|&(?!#?\w+;)/g;
    const escapeReplacements = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;'
    };
    const getEscapeReplacement = (ch) => escapeReplacements[ch];
    function escape(html, encode) {
      if (encode) {
        if (escapeTest.test(html)) {
          return html.replace(escapeReplace, getEscapeReplacement);
        }
      } else {
        if (escapeTestNoEncode.test(html)) {
          return html.replace(escapeReplaceNoEncode, getEscapeReplacement);
        }
      }
      return html;
    }
    // marked 设置
    const renderer = {
      heading(text:string, level:number, raw: string, slugger: any) {
        const id = slugger.slug(raw);
        return `<h${level} id="${id}" class="anchor-h">${text}</h${level}>\n`;
      },
      link(href: string, title:string, text:string){
        return `<a href="${href}" class="marked-link" rel="noopener" target="_blank" title="${title||text}">${text}</a>`
      },
      image(href, title, text){
        let index = href.lastIndexOf('?')
        if(index!=-1){
          let search = href?.substring(href.lastIndexOf('?') + 1)
          if(search){
            let tem = JSON.parse('{"' + decodeURIComponent(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}')
            let ret = tem?.tr?.split(',')
            return `
              <img title="${title||text}" class="marked-image" data-source="${href}" data-attrname='src' data-type="attr" width="${ret[0]}px" height="${ret[1]}px">
            `
          }
        }
        return `
          <img title="${title||text}" class="marked-image" data-source="${href}" data-attrname='src' data-type="attr">
        `
      },
      code(code:string, infostring:string,escaped:boolean){
        let ret = code.match(/\n/g)
        let span = ''
        let len= ret?.length??0
        for(let i=1;i<=len+1;i++){
          span +=i+"<br/>"
        }
        if(len>16){
          return '<pre class="collapse"><div class="row-index">'+span+'</div><code>'
          + (escaped ? code : escape(code, true))
          + '</code><div class="opt-btn" onClick="((e)=>{e.parentElement.classList.toggle(\'over-hidden\')})(this)"><span class="open">展开⇓</span><span class="close">收起⇑</span></div></pre>\n';
        }else{
          return '<pre><div class="row-index">'+span+'</div><code>'
          + (escaped ? code : escape(code, true))
          + '</code></pre>\n';
        }
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
