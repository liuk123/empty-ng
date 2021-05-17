import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { triggerFlyInOut } from 'src/app/core/animations/animation';
import { PageInfo } from 'src/app/core/model/page-info.model';
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
      name: 'url',
      code: 'url',
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
  constructor(private srv: AdminService) { }

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
      pageIndex: data.pageIndex,
      pageSize: data.pageSize
    }
    this.srv.getAuthority(params).subscribe(res=>{
      if(res.isSuccess()){
        this.listOfData = res
      }
    })
  }

}
