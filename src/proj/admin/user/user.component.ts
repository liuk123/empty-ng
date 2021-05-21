import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Validators } from '@angular/forms';
import { NzModalService } from 'ng-zorro-antd/modal';
import { zip } from 'rxjs';
import { triggerFlyInOut } from 'src/app/core/animations/animation';
import { PageInfo } from 'src/app/core/model/page-info.model';
import { FormGroupComponent } from 'src/app/shared/components/form-group/form-group.component';
import { FormBase } from 'src/app/shared/components/form-item/form-item.component';
import { ColumnItem, DataItem } from 'src/app/shared/components/table-base/table-base.component';
import { AdminService } from '../service/admin.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.less'],
  animations: [
    triggerFlyInOut
  ]
})
export class UserComponent implements OnInit {

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
      name: '名字',
      code: 'username',
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
      name: '手机号',
      code: 'phone',
      type: 'text',
      width: '160px',
    },
    {
      name: '分组',
      code: 'userGroupList',
      type: 'text',
      width: '160px',
    },
    {
      name: '角色',
      code: 'roleList',
      type: 'tag',
      width: '250px',
      fn: function(data){
        return data.map(v=>v.name)
      }
    },
    {
      name: '账户是否过期',
      code: 'accountNonExpired',
      type: 'text',
      width: '160px',
      fn: function(data){
        return data?'是':'否'
      }
    },
    {
      name: '帐号是否锁定',
      code: 'accountNonLocked',
      type: 'text',
      width: '160px',
      fn: function(data){
        return data?'是':'否'
      }
    },
    {
      name: '密码是否过期',
      code: 'credentialsNonExpired',
      type: 'text',
      width: '160px',
      fn: function(data){
        return data?'是':'否'
      }
    },
    {
      name: '状态',
      code: 'enabled',
      type: 'status',
      width: '160px',
      flex: 'right', 
      status:{ 
        true: {
          color: '#0f0',
          value: '启用',
        },
        false:{
          color: '#f00',
          value: '禁用',
        }}
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
  isCollapse = false
  tableParams = {}
  isBtnLoading = false
  constructor(
    private srv: AdminService,
    private modal: NzModalService,
    private viewContainerRef: ViewContainerRef ) { }

  ngOnInit(): void {
  }

  toggleCollapse(){
    this.isCollapse = !this.isCollapse;
  }
  search(value): void {
    console.log(value)
  }
  loadData(data?){
    this.tableParams = {...this.tableParams, ...data}
    this.srv.getUsers(this.tableParams).subscribe(res=>{
      if(res.isSuccess()){
        this.listOfData = res
      }
    })
  }

  addUserGroup({title,data={}}){
    this.isBtnLoading = true
    zip(
      this.srv.getAllRoles(),
      this.srv.getAllUserGroups()
    ).subscribe(([roles,userGroups])=>{
      this.isBtnLoading = false
      this.modal.create({
        nzTitle: title,
        nzContent: FormGroupComponent,
        nzViewContainerRef: this.viewContainerRef,
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
              key: 'name',
              label: '用户',
              value: data['name']||null,
              valide:[],
              controlType: 'textbox',
              type: 'text',
            },{
              key: 'roleIds',
              label: '角色',
              value: data['roleList']?data['roleList'].map(v=>v.id):null,
              valide:[],
              controlType: 'dropdown',
              type: 'tags',
              options: roles.data.map(v=>({name: v.name, code:v.id}))
            },{
              key: 'userGroupIds',
              label: '分组',
              value: data['userGroupList']?data['userGroupList'].map(v=>v.id):null,
              valide:[],
              controlType: 'dropdown',
              type: 'tags',
              options: userGroups.data.map(v=>({name: v.name, code:v.id}))
            },{
              key: 'accountNonExpired',
              label: '账户是否过期',
              value: data['accountNonExpired']||null,
              valide:[],
              controlType: 'radio',
              options: [
                {name: '是', code: true},
                {name: '否', code: false},
              ]
            },{
              key: 'accountNonLocked',
              label: '帐号是否锁定',
              value: data['accountNonLocked']||null,
              valide:[],
              controlType: 'radio',
              options: [
                {name: '是', code: true},
                {name: '否', code: false},
              ]
            },{
              key: 'credentialsNonExpired',
              label: '密码是否过期',
              value: data['credentialsNonExpired']||null,
              valide:[],
              controlType: 'radio',
              options: [
                {name: '是', code: true},
                {name: '否', code: false},
              ]
            },{
              key: 'enabled',
              label: '状态',
              value: data['enabled']||null,
              valide:[],
              controlType: 'radio',
              options: [
                {name: '启用', code: true},
                {name: '禁用', code: false},
              ]
            },{
              key: 'description',
              label: '描述',
              value: data['description']||null,
              valide:[],
              controlType: 'textbox',
              type: 'text',
            }
          ],
          span: 1,
          // formData:data
        },
        nzOnOk: (component:any) => {
          this.srv.saveUser(component.validateForm.value).subscribe(v=>{
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
