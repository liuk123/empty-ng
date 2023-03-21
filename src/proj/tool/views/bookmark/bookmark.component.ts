import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ConfigService } from 'src/app/core/services/config.service';
import { UtilService } from 'src/app/shared/utils/util';
import { HtmlParserWorkerService } from 'src/app/shared/worker/htmlparser-worker.service';

@Component({
  selector: 'app-bookmark',
  templateUrl: './bookmark.component.html',
  styleUrls: ['./bookmark.component.less']
})
export class BookmarkComponent implements OnInit,OnDestroy {

  resultValue = null
  unSub$ = new Subject()
  constructor(
    private utilSrv: UtilService,
    private htmlPaserWorker: HtmlParserWorkerService
  ) { }

  ngOnInit(): void {
    if(ConfigService.Config.isBrowser){
      this.htmlPaserWorker.start()
      this.htmlPaserWorker.workerEvent.pipe(takeUntil(this.unSub$)).subscribe(v=>{
        let ret = this.setItem(v, null)
        if(ret){
          this.resultValue = JSON.stringify(ret)
        }
      })
    }
  }
  ngOnDestroy(): void {
    if(ConfigService.Config.isBrowser){
      this.htmlPaserWorker.stop()
      this.unSub$.next()
      this.unSub$.complete()
    }
  }
  copy(data){
    this.utilSrv.copyToClipboard(data)
  }
  clear(){
    this.resultValue = null
  }

  readerFile(ev){
    this.htmlPaserWorker.postMessage(ev.data.replace(/([\n\r\t]+)/g, ''))
  }

  /**
   * 数据格式转化
   * @param item 
   * @param nextItem 
   * @returns 
   */
  setItem(item, nextItem) {
    if (this.utilSrv.isArray(item)) {
      let arr: any = []
      for (let i = 0; i < item.length; i++) {
        let a
        if (item[i].tagName == 'h3' && item[i + 1].tagName == 'dl') {
          a = this.setItem(item[i], item[i + 1])
          i++

        } else {
          a = this.setItem(item[i], null)
        }
        if (this.utilSrv.isArray(a)) {
          arr.push(...a)
        } else if (this.utilSrv.isObject(a)) {
          arr.push(a)
        }
      }
      if (arr.length > 0) {
        return arr
      }
    } else if (this.utilSrv.isObject(item)) {
      let arr: any
      if (nextItem && nextItem.children && nextItem.children.length > 0) {
        arr = this.setItem(nextItem.children, null)
      } else if (item.children && item.children.length > 0) {
        arr = this.setItem(item.children, null)
      }
      if (item.tagName == 'h3') {
        let tem = {
          title: item.text[0],
          type: 'sub',
          children: arr
        }
        return tem
      }
      if (item.tagName == 'a') {
        let link = item.attributes.find(v => v.name == 'HREF') || {}
        if (link.value.length < 250) {
          let tem = {
            type: 'link',
            link: link.value,
            title: item.text[0]
          }
          return tem 
        }
      }
      if (arr && arr.length > 0) {
        return arr
      }
    }
  }

}
