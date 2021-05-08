import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { triggerFlyInOut } from 'src/app/core/animations/animation';
import { PageInfo } from 'src/app/core/model/page-info.model';
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
        {key: 'solid',  value: 'Solid'},
        {key: 'great',  value: 'Great'},
        {key: 'good',   value: 'Good'},
        {key: 'unproven', value: 'Unproven'}
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
      name: '分组1',
      code: 'accountNonExpired',
      type: 'text',
      width: '160px',
      fn: function(data){
        return data?'是':'否'
      }
    },
    {
      name: '分组2',
      code: 'accountNonLocked',
      type: 'text',
      width: '160px',
      fn: function(data){
        return data?'是':'否'
      }
    },
    {
      name: '分组3',
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
          name: '添加',
          icon: '',
          fn: function(data){
            console.log(data)
          }
        }
      ]
    }
  ];
  listOfData:PageInfo<DataItem>
  isCollapse = false;
  constructor(private srv: AdminService ) { }

  ngOnInit(): void {
  }

  toggleCollapse(){
    this.isCollapse = !this.isCollapse;
  }
  search(value): void {
    console.log(value)
  }
  loadData(data){
    console.log(333)
    const params = {
      pageNum: data.pageIndex,
      pageSize: data.pageSize
    }
    this.srv.getUsers(params).subscribe(res=>{
      if(res.isSuccess()){
        // res.list = res.list.map(v=>({
        //   ...v,
        //   roleList:v.roleList.map(val=>val.name)
        // }))
        this.listOfData = res
      }
    })
  }
}
