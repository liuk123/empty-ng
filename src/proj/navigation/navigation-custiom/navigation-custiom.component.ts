import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewContainerRef } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { FormGroupComponent } from 'src/app/shared/components/form-group/form-group.component';
import { JsUtilService } from 'src/app/shared/utils/js-util';
import { UtilService } from 'src/app/shared/utils/util';
import { Navigation } from '../model/navigation';
import { NavigationService } from '../service/navigation.service';

@Component({
  selector: 'app-navigation-custiom',
  templateUrl: './navigation-custiom.component.html',
  styleUrls: ['./navigation-custiom.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationCustiomComponent implements OnInit {

  customNavs
  selectData: Navigation[][] = []
  selectTitle:string = null
  constructor(
    private jsutil: JsUtilService,
    private util: UtilService,
    private srv: NavigationService,
    private modal: NzModalService,
    private viewContainerRef: ViewContainerRef,
    private cf: ChangeDetectorRef,
  ) { }

  ngOnInit(): void {
    // this.selectData = this.util.columnsArr(this.customData, 3, 1)
    this.getNavCategory()
    
  }
  /**
   * 打开新窗口
   * @param item 
   */
  open(item: Navigation){
    if(item.type === 'link'){
      window.open(item.link, '_blank')
    }else{

    }
  }
  selectNav(id){
    let tem = this.findItem(this.customNavs, id)
    if(tem){
      this.selectTitle = tem.title
      if(tem.children){
        this.selectData = this.util.columnsArr(tem.children, 3, 1)
      }else{
        this.selectData = []
      }
    }
  }
  /**
   * 根据id 找相应的对象
   * @param data Object Array
   * @param id 
   * @returns Object
   */
  findItem(data,id){
    if(this.jsutil.isArray(data)){
      for(let i=0; i<data.length;i++){
        let tem = this.findItem(data[i],id)
        if(tem){
          return tem
        }
      }
    }else if(this.jsutil.isObject(data)){
      if(data.id == id){
        return data
      }
      if(data.children){
        return this.findItem(data.children,id)
      }
    }
  }

  /**
   * 导航分类添加编辑
   * @param title 
   * @param data 
   */
  showNavCategoryDialog(title, data={}){
    let params=[
      {
        key: 'id',
        label: 'id',
        value: data['id']||null,
        valide:[],
        controlType: 'textbox',
        type: 'hidden',
      },{
        key: 'title',
        label: '名称',
        value: data['title']||null,
        valide:[],
        controlType: 'textbox',
        type: 'text',
      },{
        key: 'sort',
        label: '排序',
        value: data['sort']||null,
        valide:[],
        controlType: 'textbox',
        type: 'text',
      },{
        key: 'pid',
        label: '父级',
        value: data['pid']?data['pid'].map(v=>v.id):null,
        valide:[],
        controlType: 'dropdown',
        type: 'default',
        options: this.customNavs.map(v=>({name: v.title, code:v.id}))
      }
    ]
    this.modal.create({
      nzTitle: title,
      nzContent: FormGroupComponent,
      nzViewContainerRef: this.viewContainerRef,
      nzComponentParams: {
        params:params,
        span: 1,
      },
      nzOnOk: (component:any) => {
        this.srv.saveNavCategory([component.validateForm.value]).subscribe(v=>{

        })
      }
    })
  }
  /**
   * 导航添加编辑
   * @param title 
   * @param data 
   */
  showNavItemDialog(title,data={}){
    this.modal.create({
      nzTitle: title,
      nzContent: FormGroupComponent,
      nzViewContainerRef: this.viewContainerRef,
      nzComponentParams: {
        params:[
          {
            key: 'id',
            label: 'id',
            value: data['id']||null,
            valide:[],
            controlType: 'textbox',
            type: 'hidden',
          },{
            key: 'title',
            label: '名称',
            value: data['title']||null,
            valide:[],
            controlType: 'textbox',
            type: 'text',
          },{
            key: 'link',
            label: '地址',
            value: data['link']||null,
            valide:[],
            controlType: 'textbox',
            type: 'text',
          },{
            key: 'sort',
            label: '排序',
            value: data['sort']||null,
            valide:[],
            controlType: 'textbox',
            type: 'text',
          },{
            key: 'navCategoryId',
            label: '分类',
            value: data['navCategoryId']?data['navCategoryId'].map(v=>v.id):null,
            valide:[],
            controlType: 'dropdown',
            type: 'default',
            options: this.customNavs.map(v=>({name: v.title, code:v.id}))
          }
        ],
        span: 1,
      },
      nzOnOk: (component:any) => {
        this.srv.saveNavItem([component.validateForm.value]).subscribe(v=>{

        })
      }
    })
    
  }
  getNavCategory(){
    this.srv.getNavCategory().subscribe(v=>{
      if(v.isSuccess()){
        this.customNavs = this.util.setTree(v.data)
        console.log(this.customNavs)
        this.cf.markForCheck()
      }
    })
  }
  getNav(data){
    this.srv.getNavItem(data).subscribe(v=>{

    })
  }
}