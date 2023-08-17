import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Validators } from '@angular/forms';
import { NzModalService } from 'ng-zorro-antd/modal';
import { triggerFlyInOut } from 'src/app/core/animations/animation';
import { PageInfo } from 'src/app/biz/model/common/page-info.model';
import { FormGroupComponent } from 'src/app/shared/components/form-group/form-group.component';
import { FormBase } from 'src/app/shared/components/form-item/form-item.component';
import { ColumnItem, DataItem } from 'src/app/shared/components/table-base/table-base.component';
import { AdminService } from '../service/admin.service';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.less'],
  animations: [
    triggerFlyInOut
  ]
})
export class RoleComponent implements OnInit {

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
      name: '角色',
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
      name: '权限',
      code: 'authorityList',
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
    this.srv.getRoles(this.tableParams).subscribe(res=>{
      if(res.isSuccess()){
        this.listOfData = res
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
        nzData: {
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
              label: '角色',
              value: data['name']||null,
              valide:[],
              controlType: 'textbox',
              type: 'text',
            },{
              key: 'authorityIds',
              label: '权限',
              value: data['authorityList']?data['authorityList'].map(v=>v.id):null,
              valide:[],
              controlType: 'dropdown',
              type: 'tags',
              options: res.data.map(v=>({name: v.name, code:v.id}))
            },{
              key: 'description',
              label: '描述',
              value: data['description']||null,
              valide:[],
              controlType: 'textbox',
              type: 'text',
            },
          ],
          span: 1,
          // formData:data
        },
        nzOnOk: (component:any) => {
          this.srv.saveRole(component.validateForm.value).subscribe(v=>{
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
