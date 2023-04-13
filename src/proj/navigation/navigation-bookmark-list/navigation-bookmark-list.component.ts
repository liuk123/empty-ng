import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewContainerRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NavigationService } from '../service/navigation.service';
import { Navigation } from '../model/navigation';
import { ConfigService } from 'src/app/core/services/config.service';
import { NzModalService } from 'ng-zorro-antd/modal';
import { MessageUtilService } from 'src/app/core/services/message-util.service';
import { FormGroupComponent } from 'src/app/shared/components/form-group/form-group.component';
import { JsUtilService } from 'src/app/shared/utils/js-util';
import { MenuService } from 'src/app/biz/services/common/menu.service';

@Component({
  selector: 'app-navigation-bookmark-list',
  templateUrl: './navigation-bookmark-list.component.html',
  styleUrls: ['./navigation-bookmark-list.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationBookmarkListComponent implements OnInit {
  unsub$ = new Subject()
  id:string
  navigation: Navigation
  categoryData
  categoryTree
  isEdit = false
  faviconUrl = ConfigService.Config.faviconUrl
  defaultFavicon = 'assets/image/common/nofavicon.svg'

  trackByNavigation(index: number, item: Navigation) { return item.title }
  trackByNavigationItem(index: number, item: Navigation) { return item.title }

  constructor(
    private activatedRoute: ActivatedRoute,
    private srv: NavigationService,
    private cf: ChangeDetectorRef,
    private jsUtil: JsUtilService,
    private modal: NzModalService,
    private viewContainerRef: ViewContainerRef,
    private message: MessageUtilService,
    private menuSrv: MenuService,
    ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.pipe(takeUntil(this.unsub$)).subscribe(v=>{
      this.id = v.get('id')
      this.getBookmarkCategory(false)
      this.getBookmarkCategoryById()
    })
  }
  getBookmarkCategoryById(){
    this.srv.getBookmarkCategoryById({id: this.id}).subscribe(res=>{
      if(res.isSuccess()){
        this.navigation = res.data[0]

        let metaData = {
          description: this.navigation.descItem,
          keywords: this.navigation.title,
        }
        this.menuSrv.setMeta(metaData)
        this.menuSrv.addHistoryMenu(this.navigation.title)
        this.cf.markForCheck()
      }
    })
  }
  delBookmarkItem(id, pid) {
    this.srv.delBookmarkItem(id).subscribe(res => {
      if (res.isSuccess()) {
        this.message.info(res.resultMsg)
        this.getBookmarkCategoryById()
      }
    })
  }
  delNavCategory(id) {
    this.srv.delBookmarkCategory(id).subscribe(res => {
      if (res.isSuccess()) {
        this.message.info(res.resultMsg)
        this.getBookmarkCategory(true)
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
      nzMaskClosable: false,
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
  showItemDialog(title, data = {}, pdata=null) {
    this.modal.create({
      nzTitle: title,
      nzContent: FormGroupComponent,
      nzViewContainerRef: this.viewContainerRef,
      nzMaskClosable: false,
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
          }, {
            key: 'icon',
            label: '图标',
            value: data['icon'] || null,
            valide: [],
            controlType: 'textbox',
            type: 'text',
          }, {
            key: 'categoryId',
            label: '分类',
            value: pdata?.['id'],
            valide: [],
            controlType: 'dropdown',
            type: 'default',
            options: this.categoryData.map(v => ({ name: v.title, code: v.id }))
          }
        ],
        span: 1,
      },
      nzOnOk: (component: any) => {
        const value = component.validateForm.value
        if(!pdata){
          let tem = this.categoryData.find(v=>v.id == value.categoryId)
          pdata = {pid: tem.pid??tem.id}
        }
        this.srv.saveFavicon({url: value.link}).subscribe(d=>{
          if(d.isSuccess()){
            this.message.info(d.resultMsg)
            if(d.data!==null){
              value.icon = d.data
            }
          }
          this.saveBookmarkItem(value, pdata)
        })
        
      }
    })

  }

  /**
   * 保存书签
   * @param data 
   */
  saveBookmarkItem(data, pdata) {
    this.srv.saveBookmarkItem(data).subscribe(res => {
      if (res.isSuccess()) {
        this.message.info(res.resultMsg)
        
        this.getBookmarkCategoryById()
      }
    })
  }
  /**
   * 保存修改书签分类
   * @param data 
   */
  saveBookmarkCategory(data) {
    this.srv.saveBookmarkCategory(data).subscribe(res => {
      if (res.isSuccess()) {
        this.message.info(res.resultMsg)
        this.getBookmarkCategory(true)
      }
    })
  }
  selectNav(e){
    e.selected=!e.selected
  }

  getBookmarkCategory(isDelStateKey = false) {
    this.srv.getBookmarkCategory(isDelStateKey).subscribe(res => {
      if (res.isSuccess()) {
        let selItem = res.data.find(v=>v.id == this.id)
        this.categoryData = res.data.map(v => ({
          ...v,
          selected: selItem.pid == v.id,
          type: v.pid==null?'sub':'router',
          route: '/nav/list/'+v.id
        }))
        this.categoryTree = this.jsUtil.setTree(this.categoryData)
      }
    })
  }

}
