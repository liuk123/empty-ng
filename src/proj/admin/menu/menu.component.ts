import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Validators } from '@angular/forms';
import { NzModalService } from 'ng-zorro-antd/modal';
import { PageInfo } from 'src/app/biz/model/common/page-info.model';
import { triggerFlyInOut } from 'src/app/core/animations/animation';
import { FormGroupComponent } from 'src/app/shared/components/form-group/form-group.component';
import { FormBase } from 'src/app/shared/components/form-item/form-item.component';
import { ColumnItem, DataItem } from 'src/app/shared/components/table-base/table-base.component';
import { AdminService } from '../service/admin.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.less'],
  animations: [
    triggerFlyInOut
  ]
})
export class MenuComponent implements OnInit {
  questions:FormBase<any>[] = [
    {
      key: 'projName',
      label: '项目名称',
      value: null,
      valide:[Validators.required],
      controlType: 'textbox',
      type: 'text',
    },
    {
      key: 'timeRange',
      label: '项目日期',
      value: null,
      valide:[],
      controlType: 'rangePicker',
    },
    {
      key: 'projType',
      label: '项目类型',
      value: null,
      valide:[],
      controlType: 'dropdown',
      options: [
        {code: 'solid',  name: 'Solid'},
        {code: 'great',  name: 'Great'},
        {code: 'good',   name: 'Good'},
        {code: 'unproven', name: 'Unproven'}
      ]
    },
    {
      key: 'timeRang122e',
      label: '项目日期',
      value: null,
      valide:[],
      controlType: 'rangePicker',
    },
  ]
  listOfColumns: ColumnItem[] = [
    {
      name: 'id',
      code: 'id',
      type: 'text',
      flex: 'left', 
      width: '100px'
    },
    {
      name: '名称',
      code: 'title',
      type: 'text',
      flex: 'left', 
      width: '200px',
      expand: true
    },
    
    {
      name: '类型',
      code: 'type',
      type: 'text',
      width: '160px',
    },
    {
      name: '路由',
      code: 'route',
      type: 'text',
      width: '160px',
    },
    {
      name: '链接',
      code: 'link',
      type: 'text',
      width: '160px',
    },{
      name: '权限',
      code: 'authorityList',
      type: 'text',
      width: '160px',
      fn: function(data){
        return data&&data.map(v=>v.name)
      }
    },
    {
      name: 'pid',
      code: 'pid',
      type: 'text', 
      width: '100px'
    },
    {
      name: '排序',
      code: 'sort',
      type: 'text',
      width: '100px'
    },
    {
      name: '图标',
      code: 'icon',
      type: 'text',
      width: '160px',
    },
    {
      name: '禁用',
      code: 'disabled',
      type: 'text',
      width: '100px',
    },
    {
      name: '选中',
      code: 'selected',
      type: 'text',
      width: '100px',
    },
    {
      name: '打开',
      code: 'open',
      type: 'text',
      width: '100px',
    },
    {
      name: 'menu显示',
      code: 'isMenuShow',
      type: 'text',
      width: '160px',
    },
    {
      name: 'breadcrumb显示',
      code: 'isBreadcrumbShow',
      type: 'text',
      width: '160px',
    },
    {
      name: '操作',
      type: 'action',
      width:'150px',
      flex: 'right', 
      actions:[
        {
          name: '编辑',
          icon: '',
          fn: (data)=> {
            this.addUserGroup({
              title:'编辑',
              data
            })
          }
        }
      ]
    }
  ];
  listOfData:PageInfo<DataItem>
  isCollapse = false;
  isBtnLoading = false
  tableParams = {}
  constructor(
    private srv: AdminService,
    private modal: NzModalService,
    private viewContainerRef: ViewContainerRef) { }

  ngOnInit(): void {
  }

  toggleCollapse(){
    this.isCollapse = !this.isCollapse;
  }
  search(value): void {
    this.loadData(value)
  }

  loadData(data?){
    this.tableParams = {...this.tableParams, ...data}
    this.srv.getMenus(this.tableParams).subscribe(res=>{
      if(res.isSuccess()){
        this.listOfData = res
      }
    })
  }
  expandColumn(params){
    this.srv.getMenus({...this.tableParams, pid: params.data.id}).subscribe(res=>{
      if(res.isSuccess()){
        this.listOfData.list = [
          ...this.listOfData.list.slice(0,params.index+1),
          ...res.list.map(v=>{
            return {
              ...v,
              parent: params.data,
              level: params.data.level==undefined?1:params.data.level + 1,
              expand: v.type !== 'sub'?null: false
            }
          }),
          ...this.listOfData.list.slice(params.index+1)
        ]
      }
    })
  }

  addUserGroup({title,data={}}){
    this.isBtnLoading = true
    this.srv.getAllAuthority().subscribe(res=>{
      this.isBtnLoading = false
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
              value: data['id']||null,
              valide:[],
              controlType: 'textbox',
              type: 'hidden',
            },{
              key: 'title',
              label: 'title',
              value: data['title']||null,
              valide:[],
              controlType: 'textbox',
              type: 'text',
            },{
              key: 'type',
              label: '类型',
              value: data['type'],
              valide:[],
              controlType: 'dropdown',
              type: 'default',
              options: [
                {name: 'link', code: 'link'},
                {name: 'router', code: 'router'},
                {name: 'sub', code: 'sub'}
              ]
            },{
              key: 'route',
              label: '路由',
              value: data['route']||null,
              valide:[],
              controlType: 'textbox',
              type: 'text',
            },{
              key: 'link',
              label: '链接',
              value: data['link']||null,
              valide:[],
              controlType: 'textbox',
              type: 'text',
            },{
              key: 'pid',
              label: 'pid',
              value: data['pid']||null,
              valide:[],
              controlType: 'textbox',
              type: 'text',
            },{
              key: 'sort',
              label: '排序',
              value: data['sort']||null,
              valide:[],
              controlType: 'textbox',
              type: 'number',
            },{
              key: 'icon',
              label: '图标',
              value: data['icon']||null,
              valide:[],
              controlType: 'textbox',
              type: 'text',
            },{
              key: 'disabled',
              label: '禁用',
              value: data['disabled']||null,
              valide:[],
              controlType: 'radio',
              options: [
                {name: '是', code: true},
                {name: '否', code: false},
              ]
            },{
              key: 'selected',
              label: '选中',
              value: data['selected']||null,
              valide:[],
              controlType: 'radio',
              options: [
                {name: '是', code: true},
                {name: '否', code: false},
              ]
            },{
              key: 'open',
              label: '打开',
              value: data['open']||null,
              valide:[],
              controlType: 'radio',
              options: [
                {name: '是', code: true},
                {name: '否', code: false},
              ]
            },{
              key: 'isMenuShow',
              label: 'menu显示',
              value: data['isMenuShow'],
              valide:[],
              controlType: 'radio',
              options: [
                {name: '是', code: true},
                {name: '否', code: false},
              ]
            },{
              key: 'isBreadcrumbShow',
              label: 'breadcrumb显示',
              value: data['isBreadcrumbShow'],
              valide:[],
              controlType: 'radio',
              options: [
                {name: '是', code: true},
                {name: '否', code: false},
              ]
            },{
              key: 'authorityIds',
              label: '权限',
              value: data['authorityList']?data['authorityList'].map(v=>v.id):[],
              valide:[],
              controlType: 'dropdown',
              type: 'tags',
              options: res.data.map(v=>({name: v.name, code:v.id}))
            },
          ],
          span: 1,
        },
        nzOnOk: (component:any) => {
          this.srv.saveMenu(component.validateForm.value).subscribe(v=>{
            if(v.isSuccess()){
              this.loadData()
            }
          })
        },
      })
    },
    err=>{this.isBtnLoading = false})
    
    
  }
}
