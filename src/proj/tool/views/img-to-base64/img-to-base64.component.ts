import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { concatAll, map, mergeMap, } from 'rxjs/operators';
import { HtmlParserService } from 'src/app/shared/utils/htmlparser.service';
import { UtilService } from 'src/app/shared/utils/util';


@Component({
  selector: 'app-img-to-base64',
  templateUrl: './img-to-base64.component.html',
  styleUrls: ['./img-to-base64.component.less']
})
export class ImgToBase64Component implements OnInit {

  constructor(
    private http: HttpClient,
    private parser: HtmlParserService,
    private util: UtilService
  ) { }

  ngOnInit(): void {
  }
  getFaviconUrl(url, contentType) {
    let tem = url.match(/^https?:\/\/[0-9a-zA-Z](?:[-.w]*[0-9a-zA-Z])*(?::[0-9]*)*/)
    if (tem == null) {
      return of(null)
    }
    let link = tem[0]
    return this.http.get(link, { responseType: contentType }).pipe(
      map(html => {
        if (html) {
          let htmlObj = this.parser.htmlParser(html)
          let headChildren = null
          if (htmlObj[0] && htmlObj[0].tagName == 'html' && htmlObj[0].children && htmlObj[0].children.length > 0 && htmlObj[0].children[0]) {
            headChildren = htmlObj[0].children[0].children
            for (let i = 0, len = headChildren.length; i < len; i++) {
              if (headChildren[i].tagName == 'link') {
                for (let j = 0, lenj = headChildren[i].attributes.length; j < lenj; j++) {
                  let attrObj = headChildren[i].attributes[j]
                  if (attrObj.name == 'rel' && attrObj.value.split(' ').includes('icon')) {
                    let tem = headChildren[i].attributes.find(v => v.name == 'href')
                    if (tem) {
                      let ii = tem.value.lastIndexOf('.')
                      let fileName = link.replace(/[^0-9a-zA-Z]/g, '') + tem.value.slice(ii)
                      return {
                        url: tem.value.startsWith('//') ? 'http:' + tem.value : tem.value.startsWith('http') ? tem.value : link + tem.value,
                        fileName: fileName
                      }
                    }
                  }
                }
              }
            }
            return null
          } else {
            return null
          }
        } else {
          return null
        }
      })
    )
  }
  downLoadIcon(url) {
    this.getFaviconUrl(url, 'text').subscribe(v => {
      if (v == null || v.url == null) return null;
      this.http.get(v.url, { responseType: 'blob' }).subscribe(res => {
        this.util.download(res, v.fileName)
      })
    })
  }
  downAll() {
    this.http.get<any>('assets/data/b_bookmark.json').subscribe(res => {
      res.RECORDS.forEach(item => {
        this.downLoadIcon(item.link)
      })
    })
  }
  dealData(html,link){
    if (html) {
      let htmlObj = this.parser.htmlParser(html)
      let headChildren = null
      if (htmlObj[0] && htmlObj[0].tagName == 'html' && htmlObj[0].children && htmlObj[0].children.length > 0 && htmlObj[0].children[0]) {
        headChildren = htmlObj[0].children[0].children
        for (let i = 0, len = headChildren.length; i < len; i++) {
          if (headChildren[i].tagName == 'link') {
            for (let j = 0, lenj = headChildren[i].attributes.length; j < lenj; j++) {
              let attrObj = headChildren[i].attributes[j]
              if (attrObj.name == 'rel' && attrObj.value.split(' ').includes('icon')) {
                let tem = headChildren[i].attributes.find(v => v.name == 'href')
                if (tem) {
                  let ii = tem.value.lastIndexOf('.')
                  let fileName = link.replace(/[^0-9a-zA-Z]/g, '') + tem.value.slice(ii)
                  return {
                    url: tem.value.startsWith('//') ? 'http:' + tem.value : tem.value.startsWith('http') ? tem.value : link + tem.value,
                    fileName: fileName
                  }
                }
              }
            }
          }
        }
        return null
      } else {
        return null
      }
    } else {
      return null
    }
  }
  downFaviconInfo() {
    this.http.get<any>('assets/data/b_bookmark1.json').subscribe(res => {
      from(res.RECORDS).pipe(
        mergeMap((v: any) => {
          let url = v.link
          let tem = url.match(/^https?:\/\/[0-9a-zA-Z](?:[-.w]*[0-9a-zA-Z])*(?::[0-9]*)*/)
          if (tem == null) {
            return of(null)
          }
          let link = tem[0]
          return this.http.get(link, { responseType: 'text' }).pipe(map(v=> this.dealData(v, link)))
        })
      ).subscribe(v => {console.log(v) })
    })
  }
}
