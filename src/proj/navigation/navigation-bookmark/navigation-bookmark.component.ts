import { ApplicationRef, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, OnInit, ViewContainerRef } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';
import { MessageUtilService } from 'src/app/core/services/message-util.service';
import { FormGroupComponent } from 'src/app/shared/components/form-group/form-group.component';
import { JsUtilService } from 'src/app/shared/utils/js-util';
import { UtilService } from 'src/app/shared/utils/util';
import { Navigation } from '../model/navigation';
import { NavigationService } from '../service/navigation.service';
import { ConfigService } from 'src/app/biz/services/common/config.service';
@Component({
  selector: 'app-navigation-bookmark',
  templateUrl: './navigation-bookmark.component.html',
  styleUrls: ['./navigation-bookmark.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationBookmarkComponent implements OnInit {

  faviconUrl = ConfigService.Config.faviconUrl
  defaultFavicon = 'assets/image/common/nofavicon.svg'
  categoryData = []
  categoryTree = []
  selData: Navigation[]
  data = {}
  trackByNavigation(index: number, item: Navigation) { return item.title }
  trackByNavigationItem(index: number, item: Navigation) { return item.title }

  constructor(
    private srv: NavigationService,
    private util: UtilService,
    private jsutil: JsUtilService,
    private cf: ChangeDetectorRef,
    private el: ElementRef,
    private modal: NzModalService,
    private viewContainerRef: ViewContainerRef,
    private message: MessageUtilService,
    private appRef: ApplicationRef,
  ) { }

  ngOnInit(): void {
    this.getBookMarkCategory()
    let bookmarkId = window.localStorage.getItem('bookmarkId')
    if(bookmarkId){
      this.selectNav({id: bookmarkId})
    }
  }

  selectNav(data) {
    if (data.pid == null) {
      window.localStorage.setItem('bookmarkId', data.id)
      this.getBookmarkCategoryByPid(data.id).subscribe(v=>{
        this.selData = v
        this.cf.markForCheck()
        this.scrollInto(this.selData[0].title)
      })
    }else{
      if(!this.selData||this.selData[0].pid != data.pid){
        this.getBookmarkCategoryByPid(data.pid).subscribe(v=>{
          this.selData = v
          this.cf.markForCheck()
          this.scrollInto(data.title)
        })
      }else{
        this.scrollInto(data.title)
      }
    }
  }
scrollInto(item){
  this.appRef.isStable.pipe(first(isStable => isStable === true)).subscribe(v=>{
    let elem = this.el.nativeElement.querySelector(`#${item}`)
    if (elem) {
      elem.scrollIntoView({ block: 'start', inline: 'nearest' });
    }
  })
}
getBookMarkCategory(){
  this.srv.getBookmarkCategory().subscribe(res => {
    if (res.isSuccess()) {
      this.categoryData = res.data.map(v => ({
        ...v,
        selected: false
      }))
      this.categoryTree = this.util.setTree(this.categoryData)
      this.cf.markForCheck()
    }
  })
}
getBookmarkCategoryByPid(id):Observable<Navigation[]>{
  return new Observable((observable)=>{
    if(id in this.data){
      observable.next(this.data[id])
    }else{
      this.srv.getBookmarkCategoryByPid(id).subscribe(res=>{
        if(res.isSuccess()){
          this.data[id] = res.data
          observable.next(res.data)
        }
      })
    }
  })
}

/**
 * 导航分类添加编辑
 * @param title 
 * @param data 
 */
showCategoryDialog(title, data = {}) {
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
      key: 'icon',
      label: '图标',
      value: data['icon'] || null,
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
      options: this.categoryData.filter(v => v.pid === null).map(v => ({ name: v.title, code: v.id }))
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
      this.saveBookmarkCategory(component.validateForm.value)
    }
  })
}
/**
 * 导航添加编辑
 * @param title 
 * @param data 
 */
showItemDialog(title, data = {}, pdata = {}) {
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
          key: 'icon',
          label: '图标',
          value: data['icon'] || null,
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
          options: this.categoryData.map(v => ({ name: v.title, code: v.id }))
        }
      ],
      span: 1,
    },
    nzOnOk: (component: any) => {
      this.saveBookmarkItem(component.validateForm.value)
    }
  })

}

saveBookmarkItem(data){
  this.srv.saveBookmarkItem(data).subscribe(res => {
    if (res.isSuccess()) {
      this.message.info(res.resultMsg)
      if (data.id != null) {
        let item = this.jsutil.findItem(this.categoryData, (item) => item.id == data.id, { mapObject: ['navList', 'children'] })
        item = Object.assign(item, data)
        this.cf.markForCheck()
      } else {
        this.getBookMarkCategory()
      }

    }
  })
}
saveBookmarkCategory(data){
  this.srv.saveBookmarkCategory(data).subscribe(res => {
    if (res.isSuccess()) {
      this.message.info(res.resultMsg)
      if (data.id != null) {
        let item = this.categoryData.find(v => v.id == data.id)
        item = Object.assign(item, data)
        this.cf.markForCheck()
      } else {
        this.getBookMarkCategory()
      }
    }
  })
}

}

