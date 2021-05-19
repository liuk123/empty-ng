import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Validators } from '@angular/forms';
import { NzModalService } from 'ng-zorro-antd/modal';
import { PageInfo } from 'src/app/core/model/page-info.model';
import { FormBase } from 'src/app/shared/components/form-item/form-item.component';
import { ColumnItem, DataItem } from 'src/app/shared/components/table-base/table-base.component';
import { FormGroupComponent } from 'src/app/shared/components/form-group/form-group.component'
import { triggerFlyInOut } from 'src/app/core/animations/animation';
import { AdminService } from '../service/admin.service';

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
          name: '编辑',
          icon: '',
          fn: (data)=> {
            this.addUserGroup({
              title:'编辑',
              data:{...data, roleIds: data.roleList.map(v=>v.id)}
            })
          }
        }
      ]
    }
  ];
  listOfData:PageInfo<DataItem>

  tableParams ={}
  isCollapse = false;
  isBtnLoading = false;
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
    this.srv.getUserGroup(this.tableParams).subscribe(res=>{
      if(res.isSuccess()){
        this.listOfData = res
      }
    })
  }

  addUserGroup({title,data={}}){
    this.isBtnLoading = true
    this.srv.getAllRoles().subscribe(res=>{
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
              key: 'roleIds',
              label: '角色',
              value: null,
              valide:[],
              controlType: 'dropdown',
              type: 'tags',
              options: res.data.map(v=>({name: v.name, code:v.id}))
            },{
              key: 'description',
              label: '描述',
              value: null,
              valide:[],
              controlType: 'textbox',
              type: 'text',
            },
          ],
          span: 1,
          formData:data
        },
        nzOnOk: (component:any) => {
          this.srv.saveUserGroup(component.validateForm.value).subscribe(v=>{
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
