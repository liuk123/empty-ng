import { ApplicationRef, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, OnInit, ViewContainerRef } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { Observable } from 'rxjs';
import { first, map } from 'rxjs/operators';
import { MessageUtilService } from 'src/app/core/services/message-util.service';
import { FormGroupComponent } from 'src/app/shared/components/form-group/form-group.component';
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

  trackByNavigation(index: number, item: Navigation) { return item.title }
  trackByNavigationItem(index: number, item: Navigation) { return item.title }

  constructor(
    private srv: NavigationService,
    private util: UtilService,
    private cf: ChangeDetectorRef,
    private el: ElementRef,
    private modal: NzModalService,
    private viewContainerRef: ViewContainerRef,
    private message: MessageUtilService,
    private appRef: ApplicationRef,
  ) { }

  ngOnInit(): void {
    this.srv.getBookmarkCategory().subscribe(res => {
      if (res.isSuccess()) {
        this.categoryData = res.data.map(v => ({
          ...v,
          selected: false
        }))
        this.categoryTree = this.util.setTree(this.categoryData)
        if(ConfigService.Config.isBrowser){
          let bookmarkId = window.localStorage.getItem('bookmarkId')
          if(bookmarkId){
            this.selectNav({id: bookmarkId})
          }else{
            this.selectNav({id: this.categoryTree[0]?.id})
          }
        }else{
          this.selectNav({id: this.categoryTree[0]?.id})
        }
      }
    })
  }

  selectNav(data) {
    if (data.pid == null) { // 点击一级菜单时
      if(ConfigService.Config.isBrowser){
        window?.localStorage?.setItem('bookmarkId', data.id)
      }
      this.getBookmarkCategoryByPid(data.id).subscribe(v=>{
        this.selData = v.data
        this.cf.markForCheck()
        if(ConfigService.Config.isBrowser){
          this.scrollInto(this.selData[0].title)
        }
      })
    }else{ // 点击其他一级菜单的二级节点时
      if(!this.selData||this.selData[0].pid != data.pid){
        this.getBookmarkCategoryByPid(data.pid).subscribe(v=>{
          this.selData = v.data
          this.cf.markForCheck()
          if(ConfigService.Config.isBrowser){
            this.scrollInto(data.title)
          }
        })
      }else{ // 点击本菜单的二级节点时
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
getBookmarkCategory(){
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

getBookmarkCategoryByPid(id, isDelStateKey=false):Observable<any>{
  return this.srv.getBookmarkCategoryByPid(id, isDelStateKey)
}

delBookmarkItem(id,pid){
  this.srv.delBookmarkItem(id).subscribe(res=>{
    if(res.isSuccess()){
      this.message.info(res.resultMsg)
      this.getBookmarkCategoryByPid(pid,true).subscribe(res=>{
        this.selData = res.data
        this.cf.markForCheck()
      })
    }
  })
}
delNavCategory(id){
  this.srv.delBookmarkCategory(id).subscribe(res=>{
    if(res.isSuccess()){
      this.message.info(res.resultMsg)
      this.getBookmarkCategory()
      this.cf.markForCheck()
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
          key: 'descItem',
          label: '描述',
          value: data['descItem'] || null,
          valide: [],
          controlType: 'textbox',
          type: 'text',
        },{
          key: 'icon',
          label: '图标',
          value: data['icon'] || null,
          valide: [],
          controlType: 'textbox',
          type: 'text',
        }, {
          key: 'categoryId',
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
      this.saveBookmarkItem(component.validateForm.value, pdata)
    }
  })

}

/**
 * 保存书签
 * @param data 
 */
saveBookmarkItem(data, pdata){
  this.srv.saveBookmarkItem(data).subscribe(res => {
    if (res.isSuccess()) {
      this.message.info(res.resultMsg)
      this.getBookmarkCategoryByPid(pdata.pid, true).subscribe(res=>{
        this.selData = res.data
        this.cf.markForCheck()
      })
    }
  })
}
/**
 * 保存修改书签分类
 * @param data 
 */
saveBookmarkCategory(data){
  this.srv.saveBookmarkCategory(data).subscribe(res => {
    if (res.isSuccess()) {
      this.message.info(res.resultMsg)
      this.getBookmarkCategory()
      this.cf.markForCheck()
    }
  })
}

}

