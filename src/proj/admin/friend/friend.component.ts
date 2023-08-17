import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { PageInfo } from 'src/app/biz/model/common/page-info.model';
import { FormGroupComponent } from 'src/app/shared/components/form-group/form-group.component';
import { ColumnItem, DataItem } from 'src/app/shared/components/table-base/table-base.component';
import { AdminService } from '../service/admin.service';
import { MessageUtilService } from 'src/app/core/services/message-util.service';

@Component({
  selector: 'app-friend',
  templateUrl: './friend.component.html',
  styleUrls: ['./friend.component.less']
})
export class FriendComponent implements OnInit {

  listOfData:PageInfo<DataItem>= new PageInfo()
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
      width: '160px'
    },
    {
      name: 'link',
      code: 'link',
      type: 'text',
      width: '160px'
    },
    {
      name: 'icon',
      code: 'icon',
      type: 'text',
      width: '160px',
    },
    {
      name: 'sort',
      code: 'sort',
      type: 'text',
      width: '160px',
    },{
      name: '描述',
      code: 'descItem',
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
            this.showDialog({
              title:'编辑',
              data
            })
          }
        },{
          name: '删除',
          icon: '',
          fn: (data)=> {
            this.del(data.id)
          }
        }
      ]
    }
  ];
  constructor(private srv: AdminService,
    private modal: NzModalService,
    private message: MessageUtilService,
    private viewContainerRef: ViewContainerRef) { }

  ngOnInit(): void {
  }

  loadData(data?){
    this.srv.getFriend().subscribe(res=>{
      if(res.isSuccess()){
        this.listOfData.list = res.data
      }
    })
  }

  showDialog({title, data={}}){
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
            value: data['id'] ?? null,
            valide: [],
            controlType: 'textbox',
            type: 'hidden',
          }, {
            key: 'title',
            label: '名称',
            value: data['title'] ?? null,
            valide: [],
            controlType: 'textbox',
            type: 'text',
          }, {
            key: 'link',
            label: '地址',
            value: data['link'] ?? null,
            valide: [],
            controlType: 'textbox',
            type: 'text',
          }, {
            key: 'descItem',
            label: '描述',
            value: data['descItem'] ?? null,
            valide: [],
            controlType: 'textbox',
            type: 'text',
          },{
            key: 'icon',
            label: '图标',
            value: data['icon'] ?? null,
            valide: [],
            controlType: 'textbox',
            type: 'text',
          },{
            key: 'sort',
            label: '排序',
            value: data['sort'] ?? null,
            valide: [],
            controlType: 'textbox',
            type: 'number',
          },{
            key: 'category',
            label: '分类',
            value: data['category'] ?? null,
            valide: [],
            controlType: 'textbox',
            type: 'text',
          }, 
        ],
        span: 1,
      },
      nzOnOk: (component: any) => {
        this.save(component.validateForm.value)
      }
    })
  }
  save(data){
    this.srv.saveFriend(data).subscribe(res=>{
      if(res.isSuccess()){
        this.message.success('保存成功')
        this.loadData()
      }
    })
  }
  del(id){
    this.srv.delFriend(id).subscribe(res=>{
      if(res.isSuccess()){
        this.message.success('删除成功')
        this.loadData()
      }
    })
  }
}
