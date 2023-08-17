import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { PageInfo } from 'src/app/biz/model/common/page-info.model';
import { FormGroupComponent } from 'src/app/shared/components/form-group/form-group.component';
import { ColumnItem, DataItem } from 'src/app/shared/components/table-base/table-base.component';
import { AdminService } from '../service/admin.service';

@Component({
  selector: 'app-rss',
  templateUrl: './rss.component.html',
  styleUrls: ['./rss.component.less']
})
export class RssComponent implements OnInit {

  isCollapse = false;
  tableParams = {}
  listOfData:PageInfo<DataItem>
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
      width: '160px',
    },
    {
      name: 'link',
      code: 'link',
      type: 'text',
      width: '160px',
    },
    {
      name: 'category',
      code: 'category',
      type: 'text',
      width: '160px',
    },
    {
      name: 'sort',
      code: 'sort',
      type: 'text',
      width: '160px',
    },
    {
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
            this.showRssDialog({
              title:'编辑',
              data
            })
          }
        },{
          name: '删除',
          icon: '',
          fn: (data)=> {
            this.delRss(data.id)
          }
        },{
          name: '打开',
          icon: '',
          fn: (data)=> {
            this.open(data.link)
          }
        }
      ]
    }
  ];
  constructor(private srv: AdminService,
    private modal: NzModalService,
    private viewContainerRef: ViewContainerRef) { }

  ngOnInit(): void {
  }
  open(link){
    window.open(link, '_blank')
  }
  loadData(data?){
    this.tableParams = {...this.tableParams, ...data}
    this.srv.getRss(this.tableParams).subscribe(res=>{
      if(res.isSuccess()){
        this.listOfData = res
      }
    })
  }

  showRssDialog({title, data={}}){
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
        this.saveRss(component.validateForm.value)
      }
    })
  }
  saveRss(data){
    this.srv.saveRss(data).subscribe(res=>{
      if(res.isSuccess()){
        this.loadData()
      }
    })
  }
  delRss(id){
    this.srv.delRss(id).subscribe(res=>{
      if(res.isSuccess()){
        this.loadData()
      }
    })
  }

}
