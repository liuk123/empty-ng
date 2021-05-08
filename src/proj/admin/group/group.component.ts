import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Validators } from '@angular/forms';
import { NzModalService } from 'ng-zorro-antd/modal';
import { PageInfo } from 'src/app/core/model/page-info.model';
import { FormBase } from 'src/app/shared/components/form-item/form-item.component';
import { ColumnItem, DataItem } from 'src/app/shared/components/table-base/table-base.component';
import { GroupService } from '../service/group.service';
import { FormGroupComponent } from 'src/app/shared/components/form-group/form-group.component'
import { triggerFlyInOut } from 'src/app/core/animations/animation';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.less'],
  animations: [
    triggerFlyInOut
  ]
})
export class GroupComponent implements OnInit {

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
      name: '分组',
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
    },
    {
      name: '角色',
      code: 'roleList',
      type: 'text',
      width: '160px',
      fn: function(data){
        return data.map(v=>v.name)
      }
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
          fn: ()=> console.log(1)
        }
      ]
    }
  ];
  listOfData:PageInfo<DataItem>

  userGroupOfColumns = [  
    {
      key: 'id',
      label: 'id',
      value: null,
      valide:[],
      controlType: 'textbox',
      type: 'hidden',
    },{
      key: 'name',
      label: '分组',
      value: null,
      valide:[],
      controlType: 'textbox',
      type: 'text',
    },{
      key: 'description',
      label: '描述',
      value: null,
      valide:[],
      controlType: 'textbox',
      type: 'text',
    },{
      key: 'roleList',
      label: '角色',
      value: null,
      valide:[],
      controlType: 'textbox',
      type: 'text',
    },
  ]

  isCollapse = false;
  constructor(
    private srv: GroupService,
    private modal: NzModalService,
    private viewContainerRef: ViewContainerRef) { }

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
        this.listOfData = res
      }
    })
  }

  addUserGroup({title,params}){
    this.modal.create({
      nzTitle: title,
      nzContent: FormGroupComponent,
      nzViewContainerRef: this.viewContainerRef,
      nzComponentParams: {
        data: params,
        span: 1
      },
      nzOnOk: (component:any) => {
        console.log(component.validateForm.value)
      },
    })
  }
}
