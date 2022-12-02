import { ApplicationRef, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, OnInit, ViewContainerRef } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { MessageUtilService } from 'src/app/core/services/message-util.service';
import { FormGroupComponent } from 'src/app/shared/components/form-group/form-group.component';
import { HtmlParserService } from 'src/app/core/services/htmlparser.service';
import { JsUtilService } from 'src/app/shared/utils/js-util';
import { UtilService } from 'src/app/shared/utils/util';
import { Navigation } from '../model/navigation';
import { NavigationService } from '../service/navigation.service';
import { first } from 'rxjs/operators';
import {Slugger} from 'marked';

@Component({
  selector: 'app-navigation-custiom',
  templateUrl: './navigation-custiom.component.html',
  styleUrls: ['./navigation-custiom.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationCustiomComponent implements OnInit {


  defaultFavicon = 'assets/image/common/nofavicon.svg'
  customNavs
  customData

  slugger = null

  constructor(
    private jsutil: JsUtilService,
    private util: UtilService,
    private srv: NavigationService,
    private modal: NzModalService,
    private viewContainerRef: ViewContainerRef,
    private cf: ChangeDetectorRef,
    private parser: HtmlParserService,
    private message: MessageUtilService,
    private appRef: ApplicationRef,
    private el: ElementRef,
  ) { }

  ngOnInit(): void {
    this.slugger = new Slugger()
    this.getNavCategory()
  }
  /**
   * 打开新窗口
   * @param item 
   */
  open(item: Navigation) {
    if (item.link) {
      window.open(item.link, '_blank')
    }
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
    let params = [
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
        type: 'text',
      }, {
        key: 'pid',
        label: '父级',
        value: data['pid'] ? data['pid'] : null,
        valide: [],
        controlType: 'dropdown',
        type: 'default',
        options: this.customData.map(v => ({ name: v.title, code: v.id }))
      }
    ]
    this.modal.create({
      nzTitle: title,
      nzContent: FormGroupComponent,
      nzViewContainerRef: this.viewContainerRef,
      nzComponentParams: {
        params: params,
        span: 1,
      },
      nzOnOk: (component: any) => {
        this.saveNavCategory(component.validateForm.value)
      }
    })
  }
  /**
   * 导航添加编辑
   * @param title 
   * @param data 
   */
  showNavItemDialog(title, data = {}, pdata = {}) {
    this.modal.create({
      nzTitle: title,
      nzContent: FormGroupComponent,
      nzViewContainerRef: this.viewContainerRef,
      nzComponentParams: {
        params: [
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
            type: 'text',
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
        span: 1,
      },
      nzOnOk: (component: any) => {
        this.saveNavItem(component.validateForm.value)
      }
    })

  }
  delNavItem(id) {
    this.srv.delNavItem(id).subscribe(res => {
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
          slugger: this.slugger.slug(v.title, { dryrun: true }),
        }))
        this.customNavs = this.util.setTree(this.customData)
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
      let tem = this.parser.htmlParser(data.replace(/([\n\r\t]+)/g, ''))
      let a = this.setItem(tem, null)
      this.addAllNav(a)

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
}