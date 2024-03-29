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
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.less'],
  animations: [
    triggerFlyInOut
  ]
})
export class AuthComponent implements OnInit {

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
      name: '权限',
      code: 'name',
      type: 'text',
      flex: 'left', 
      width: '160px',
      sortOrder: null,
      sortFn: true,
      sortDirections: ['ascend', 'descend', null],
      filterMultiple: true,
      listOfFilter: [],
      filterFn: true
    },
    {
      name: '描述',
      code: 'description',
      type: 'text',
      width: '',
    },
    {
      name: '分类',
      code: 'type',
      type: 'text',
      width: '160px',
    },
    {
      name: 'value',
      code: 'value',
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
    this.srv.getAuthority(this.tableParams).subscribe(res=>{
      if(res.isSuccess()){
        this.listOfData = res
      }
    })
  }

  addUserGroup({title,data={}}){
    const modal = this.modal.create({
      nzTitle: title,
      nzContent: FormGroupComponent,
      nzViewContainerRef: this.viewContainerRef,
      nzMaskClosable: false,
      nzOnOk: (component:any) => {
        this.srv.saveAuthority(component.validateForm.value).subscribe(v=>{
          if(v.isSuccess()){
            this.loadData()
          }
        })
      },
    })
    const instance = modal.getContentComponent()
    instance.params = [
          {
            key: 'id',
            label: 'id',
            value: data['id']||null,
            valide:[],
            controlType: 'textbox',
            type: 'hidden',
          },{
            key: 'name',
            label: '权限',
            value: data['name']||null,
            valide:[],
            controlType: 'textbox',
            type: 'text',
          },{
            key: 'type',
            label: '分类',
            value: data['type']||null,
            valide:[],
            controlType: 'textbox',
            type: 'text',
          },{
            key: 'value',
            label: 'value',
            value: data['value']||null,
            valide:[],
            controlType: 'textbox',
            type: 'text',
          },{
            key: 'description',
            label: '描述',
            value: data['description']||null,
            valide:[],
            controlType: 'textbox',
            type: 'text',
          },
        ],
    instance.span = 1
    
  }

}
