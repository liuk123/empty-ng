import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewContainerRef } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { FormGroupComponent } from 'src/app/shared/components/form-group/form-group.component';
import { JsUtilService } from 'src/app/shared/utils/js-util';
import { UtilService } from 'src/app/shared/utils/util';
import { Navigation } from '../model/navigation';
import { HtmlParserService } from '../service/htmlparser.service';
import { NavigationService } from '../service/navigation.service';

@Component({
  selector: 'app-navigation-custiom',
  templateUrl: './navigation-custiom.component.html',
  styleUrls: ['./navigation-custiom.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationCustiomComponent implements OnInit {

  customNavs
  customData
  selectData: Navigation[][] = []
  selectTitle: string = null
  constructor(
    private jsutil: JsUtilService,
    private util: UtilService,
    private srv: NavigationService,
    private modal: NzModalService,
    private viewContainerRef: ViewContainerRef,
    private cf: ChangeDetectorRef,
    private parser: HtmlParserService
  ) { }

  ngOnInit(): void {
    this.getNavCategory()
  }
  /**
   * 打开新窗口
   * @param item 
   */
  open(item: Navigation) {
    if (item.type === 'link') {
      window.open(item.link, '_blank')
    } else {

    }
  }
  /**
   * 点击树，选择数据
   * @param id 
   */
  selectNav(data) {
    // let tem = this.jsutil.findItem(this.customNavs, (data) => data.id == id)
    this.selectTitle = data.title
    this.srv.getNavItem({ pid: data.id }).subscribe(res => {
      if (res.isSuccess()) {
        let arr
        if (data.children) {
          arr = [
            ...res.data.map(v => ({ ...v, type: 'link' })),
            ...data.children.map(v => ({ ...v, type: 'sub' }))
          ]
        } else {
          arr =res.data.map(v => ({ ...v, type: 'link' }))
        }
        this.selectData = this.util.columnsArr(arr, 3, 1)
        this.cf.markForCheck()
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
        value: data['pid'] ? data['pid'].map(v => v.id) : null,
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
  showNavItemDialog(title, data = {}) {
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
            value: data['navCategoryId'] ? data['navCategoryId'].map(v => v.id) : null,
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
  saveNavItem(data){
    this.srv.saveNavItem(data).subscribe(v => {

    })
  }
  saveNavCategory(data){
    this.srv.saveNavCategory(data).subscribe(v => {

    })
  }
  getNavCategory() {
    this.srv.getNavCategory().subscribe(v => {
      if (v.isSuccess()) {
        this.customNavs = this.util.setTree(v.data)
        this.customData = v.data
        this.selectNav(this.customNavs[0])
        this.cf.markForCheck()
      }
    })
  }
  // /**
  //  * 处理树
  //  * @param item 
  //  * @param fn 
  //  * @returns 
  //  */
  // findData(item,fn, parentItem={id:null}){
  //   if (this.jsutil.isArray(item)) {
  //     for (let i = 0; i < item.length; i++) {
  //       this.findData(item[i],fn, parentItem)
  //     }
  //   } else if (this.jsutil.isObject(item)) {
  //     fn(item, parentItem)
  //     return this.findData(item.children,fn, item)
  //   }
  // }
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
  addAllNav(data){
    this.srv.saveImportNav(data).subscribe(res=>{
      if(res.isSuccess()){
        console.log(res.data)
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
      let arr:any=[]
      for (let i = 0; i < item.length; i++) {
        let a
        if(item[i].tagName == 'h3' && item[i+1].tagName=='dl'){
          a = this.setItem(item[i], item[i+1])
          i++
          
        }else{
          a = this.setItem(item[i],null)
        }
        if(this.jsutil.isArray(a)){
          arr.push(...a)
        }else if(this.jsutil.isObject(a)){
          arr.push(a)
        }
      }
      if(arr.length>0){
        return arr
      }
    } else if (this.jsutil.isObject(item)) {
      let arr: any
      if (nextItem&&nextItem.children && nextItem.children.length > 0) {
        arr = this.setItem(nextItem.children,null)
      }else if(item.children && item.children.length > 0){
        arr = this.setItem(item.children,null)
      }
      if(item.tagName=='h3'){
        let tem = {
          title: item.text,
          type: 'sub',
          children: [...arr]
        }
        return tem
      }
      if(item.tagName=='a'){
        let link = item.attributes.find(v=>v.name == 'HREF')||{}
        let tem = {
          type: 'link',
          link: link.value,
          title: item.text
        }
        return tem
      }
      if(arr && arr.length>0){
        return arr
      }
    }
    
  }
}