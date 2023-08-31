import { ApplicationRef, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, OnDestroy, OnInit, ViewContainerRef } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { MessageUtilService } from 'src/app/core/services/message-util.service';
import { FormGroupComponent } from 'src/app/shared/components/form-group/form-group.component';
import { JsUtilService } from 'src/app/shared/utils/js-util';
import { Navigation } from '../model/navigation';
import { NavigationService } from '../service/navigation.service';
import { first, takeUntil } from 'rxjs/operators';
import {Slugger} from 'marked';
import { HtmlParserWorkerService } from 'src/app/shared/worker/htmlparser-worker.service';
import { Subject } from 'rxjs';
import { ConfigService } from 'src/app/core/services/config.service';
import { IndexDBService } from 'src/app/core/services/indexDB.service';

@Component({
  selector: 'app-navigation-custiom',
  templateUrl: './navigation-custiom.component.html',
  styleUrls: ['./navigation-custiom.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationCustiomComponent implements OnInit, OnDestroy {
  db:IDBDatabase=null
  customNavs
  customData
  unSub$ = new Subject()
  slugger = null
  selInputData = null

  trackByNavigation(index: number, item: Navigation) { return item.title }
  trackByNavigationItem(index: number, item: Navigation) { return item.title }

  lastNavData:any[]= []
  get historyNavList(){
    return this.lastNavData.slice(0,15)
  }
  isEdit= false

  constructor(
    private jsutil: JsUtilService,
    private srv: NavigationService,
    private modal: NzModalService,
    private viewContainerRef: ViewContainerRef,
    private cf: ChangeDetectorRef,
    private message: MessageUtilService,
    private appRef: ApplicationRef,
    private el: ElementRef,
    private dbSrv: IndexDBService,
    private htmlPaserWorker: HtmlParserWorkerService
  ) { }

  ngOnInit(): void {
    this.slugger = new Slugger()
    this.getNavCategory()
    if(ConfigService.Config.isBrowser){
      this.htmlPaserWorker.start()
      this.htmlPaserWorker.workerEvent.pipe(takeUntil(this.unSub$)).subscribe(v=>{
        let a = this.setItem(v, null)
        this.addAllNav(a)
      })

      this.dbSrv.openDB('cicodeNav', [
        {
          storeName:'nav'
        }
      ]).subscribe(v=>{
        this.db = v
        this.dbSrv.getAllData(this.db, 'nav').subscribe(ret=>{
          this.lastNavData = ret.sort((a,b)=>b.updateTime-a.updateTime)
        })
      })
    }
  }
  ngOnDestroy(): void {
    if(ConfigService.Config.isBrowser){
      this.htmlPaserWorker.stop()
      this.unSub$.next(null)
      this.unSub$.complete()

      this.dbSrv.closeDB(this.db)
    }
  }
  selChange(value: string[]): void {
    this.selInputData = value
  }
  /**
   * 点击树，选择数据
   * @param id
   */
  selectNav(data) {
    this.scrollInto(data.slugger)
  }
  scrollInto(data) {
    this.appRef.isStable.pipe(first(isStable => isStable === true)).subscribe(v => {
      let elem = this.el.nativeElement.querySelector(`#${data}`)
      if (elem) {
        elem.scrollIntoView({ block: 'start', inline: 'nearest', behavior: 'smooth' });
      }
    })
  }

  /**
   * 导航分类添加编辑
   * @param title 
   * @param data 
   */
  showNavCategoryDialog(title, data = {}) {
    const modal = this.modal.create({
      nzTitle: title,
      nzContent: FormGroupComponent,
      nzViewContainerRef: this.viewContainerRef,
      nzMaskClosable: false,
      nzOnOk: (component: any) => {
        this.saveNavCategory(component.validateForm.value)
      }
    })

    const instance = modal.getContentComponent()
    instance.params = [
      {
        key: 'id',
        label: 'id',
        value: data['id'] || null,
        valide: [],
        controlType: 'textbox',
        type: 'hidden',
      }, {
        key: 'title',
        label: '名称',
        value: data['title'] || null,
        valide: [],
        controlType: 'textbox',
        type: 'text',
      }, {
        key: 'sort',
        label: '排序',
        value: data['sort'] || null,
        valide: [],
        controlType: 'textbox',
        type: 'number',
      }, {
        key: 'pid',
        label: '父级',
        value: data['pid'] ? data['pid'] : null,
        valide: [],
        controlType: 'dropdown',
        type: 'default',
        options: this.customData.map(v => ({ name: v.title, code: v.id }))
      }
    ],
    instance.span = 1
  }
  /**
   * 导航添加编辑
   * @param title 
   * @param data 
   */
  showNavItemDialog(title, data = {}, pdata = {}) {
    const modal = this.modal.create({
      nzTitle: title,
      nzContent: FormGroupComponent,
      nzViewContainerRef: this.viewContainerRef,
      nzMaskClosable: false,
      nzOnOk: (component: any) => {
        this.saveNavItem(component.validateForm.value)
      }
    })
    const instance = modal.getContentComponent()
    instance.params = [
      {
        key: 'id',
        label: 'id',
        value: data['id'] || null,
        valide: [],
        controlType: 'textbox',
        type: 'hidden',
      }, {
        key: 'title',
        label: '名称',
        value: data['title'] || null,
        valide: [],
        controlType: 'textbox',
        type: 'text',
      }, {
        key: 'link',
        label: '地址',
        value: data['link'] || null,
        valide: [],
        controlType: 'textbox',
        type: 'text',
      }, {
        key: 'sort',
        label: '排序',
        value: data['sort'] || null,
        valide: [],
        controlType: 'textbox',
        type: 'number',
      }, {
        key: 'navCategoryId',
        label: '分类',
        value: pdata['id'] ? pdata['id'] : null,
        valide: [],
        controlType: 'dropdown',
        type: 'default',
        options: this.customData.map(v => ({ name: v.title, code: v.id }))
      }
    ],
    instance.span = 1

  }
  delNavItem(id) {
    this.srv.delNavItem([id]).subscribe(res => {
      if (res.isSuccess()) {
        this.message.info(res.resultMsg)
        this.getNavCategory()
      }
    })
  }
  delNavCategory(id) {
    this.srv.delNavCategory(id).subscribe(res => {
      if (res.isSuccess()) {
        this.message.info(res.resultMsg)
        this.getNavCategory()
      }
    })
  }
  batchDelNavItem(data){
    this.srv.delNavItem(data).subscribe(res => {
      if (res.isSuccess()) {
        this.message.info(res.resultMsg)
        this.getNavCategory()
      }
    })
  }
  saveNavItem(data) {
    this.srv.saveNavItem(data).subscribe(res => {
      if (res.isSuccess()) {
        this.message.info(res.resultMsg)
        if (data.id != null) {
          let item = this.jsutil.findItem(this.customData, (item) => item.id == data.id, { mapObject: ['navList', 'children'] })
          item = Object.assign(item, data)
          this.cf.markForCheck()
        } else {
          this.getNavCategory()
        }

      }
    })
  }
  saveNavCategory(data) {
    this.srv.saveNavCategory(data).subscribe(res => {
      if (res.isSuccess()) {
        this.message.info(res.resultMsg)
        if (data.id != null) {
          let item = this.customData.find(v => v.id == data.id)
          item = Object.assign(item, data)
          this.cf.markForCheck()
        } else {
          this.getNavCategory()
        }
      }
    })
  }
  getNavCategory() {
    this.srv.getNavCategory().subscribe(res => {
      if (res.isSuccess()) {
        this.customData = res.data.map(v=>({
          ...v,
          slugger: 'h_' + this.slugger.slug(v.title, { dryrun: true }),
        }))
        this.customNavs = this.jsutil.setTree(this.customData)
        this.customNavs[0].selected = true
        this.cf.markForCheck()
      }
    })
  }
  /**
   * 导入书签
   * @param ev 
   */
  readFile(ev) {
    const file = ev.target.files[0]
    const reader = new FileReader()
    reader['readAsText'](file)
    reader.onload = (e) => {
      const data = reader.result.toString()
      this.htmlPaserWorker.postMessage(data.replace(/([\n\r\t]+)/g, ''))
      // let tem = this.parser.htmlParser()
    }
    reader.onerror = (e) => {
      console.error('读取失败')
    };
    reader.onabort = (e) => {
      console.warn('读取中断')
    };
  }
  /**
   * 添加书签分类和书签
   * @param data 
   */
  addAllNav(data) {
    this.srv.saveImportNav(data).subscribe(res => {
      if (res.isSuccess()) {
        this.message.info(res.resultMsg)
        this.getNavCategory()
      }
    })
  }
  /**
   * 数据格式转化
   * @param item 
   * @param nextItem 
   * @returns 
   */
  setItem(item, nextItem) {
    if (this.jsutil.isArray(item)) {
      let arr: any = []
      for (let i = 0; i < item.length; i++) {
        let a
        if (item[i].tagName == 'h3' && item[i + 1].tagName == 'dl') {
          a = this.setItem(item[i], item[i + 1])
          i++

        } else {
          a = this.setItem(item[i], null)
        }
        if (this.jsutil.isArray(a)) {
          arr.push(...a)
        } else if (this.jsutil.isObject(a)) {
          arr.push(a)
        }
      }
      if (arr.length > 0) {
        return arr
      }
    } else if (this.jsutil.isObject(item)) {
      let arr: any
      if (nextItem && nextItem.children && nextItem.children.length > 0) {
        arr = this.setItem(nextItem.children, null)
      } else if (item.children && item.children.length > 0) {
        arr = this.setItem(item.children, null)
      }
      if (item.text.length < 250) {
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
      }
      if (arr && arr.length > 0) {
        return arr
      }
    }
  }


  goPage(item){
    let i = this.lastNavData.findIndex(v=>v.id == item.id)
    if(i!==-1){
      this.lastNavData.splice(i,1)
    }
    this.lastNavData.unshift(item)
    this.dbSrv.update(this.db, 'nav', [item]).subscribe()
    if(this.lastNavData.length>150){
      this.dbSrv.deleteDB(this.db,'nav', this.lastNavData[this.lastNavData.length-1].id).subscribe()
    }
  }
  delLastNavData(id, i){
    this.lastNavData.splice(i,1)
    this.dbSrv.deleteDB(this.db,'nav', id).subscribe()
  }
  clearLastNavData(){
    this.lastNavData = null;
    this.dbSrv.deleteDBAll('cicodeNav').subscribe()
  }
  modEdit(){
    this.isEdit = !this.isEdit
    this.selInputData = null
  }
}