import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { PageInfo } from 'src/app/core/model/page-info.model';
import { FormBase } from 'src/app/shared/components/form-item/form-item.component';
import { ColumnItem, DataItem } from 'src/app/shared/components/table-base/table-base.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.less']
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
      name: '名字',
      code: 'name',
      type: 'text',
      sortOrder: null,
      sortFn: true,
      sortDirections: ['ascend', 'descend', null],
      filterMultiple: true,
      listOfFilter: [
        { text: 'Joe', value: 'Joe' },
        { text: 'Jim', value: 'Jim' }
      ],
      filterFn: true
    },
    {
      name: '状态',
      code: 'sta',
      type: 'status',
      status:{ 
        1: {
          color: '#f00',
          value: '成功',
        },
        0:{
          color: '#ff0',
          value: '失败',
        }}
    },
    {
      name: '标签',
      code: 'tagC',
      type: 'tag',
    },
    {
      name: '操作',
      type: 'action',
      width:'150px',
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
  listOfData = new PageInfo([
    {
      id:1,
      name: 'John Brown',
      sta: 1,
      tagC:['1223']
    },
    {
      id:2,
      name: 'Jim Green',
      sta: 0,
      tagC:['1223']
    },
    {
      id:3,
      name: 'Jim Green',
      sta: 0,
      tagC:['1223','555','23']
    },
    {
      id:4,
      name: 'Jim Green',
      sta: 0,
      tagC:['1223']
    }
  ])
  
  constructor() { }

  ngOnInit(): void {
  }

  search(value): void {
    console.log(value)
  }
  loadData(params){
    console.log(params)
  }
}
