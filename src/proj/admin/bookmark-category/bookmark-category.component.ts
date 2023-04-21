import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { PageInfo } from 'src/app/biz/model/common/page-info.model';
import { FormGroupComponent } from 'src/app/shared/components/form-group/form-group.component';
import { ColumnItem, DataItem } from 'src/app/shared/components/table-base/table-base.component';
import { AdminService } from '../service/admin.service';

@Component({
  selector: 'app-bookmark-category',
  templateUrl: './bookmark-category.component.html',
  styleUrls: ['./bookmark-category.component.less']
})
export class BookmarkCategoryComponent implements OnInit {

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
      name: 'pid',
      code: 'pid',
      type: 'text',
      width: '160px',
    },
    {
      name: '名称',
      code: 'title',
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
            this.delLink(data.id)
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

  loadData(data?){
    this.srv.getBookmarkCategory().subscribe(res=>{
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
      nzComponentParams: {
        params: [
          {
            key: 'id',
            label: 'id',
            value: data['id'] || null,
            valide: [],
            controlType: 'textbox',
            type: 'hidden',
          }, {
            key: 'title',
            label: '名称',
            value: data['title'] || null,
            valide: [],
            controlType: 'textbox',
            type: 'text',
          }, {
            key: 'sort',
            label: '排序',
            value: data['sort'] || null,
            valide: [],
            controlType: 'textbox',
            type: 'text',
          },{
            key: 'icon',
            label: '图标',
            value: data['icon'] || null,
            valide: [],
            controlType: 'textbox',
            type: 'text',
          }, {
            key: 'pid',
            label: 'pid',
            value: data['pid']||null,
            valide: [],
            controlType: 'dropdown',
            type: 'default',
            options: this.listOfData?.list.map(v => ({ name: v.title, code: v.id }))
          }
        ],
        span: 1,
      },
      nzOnOk: (component: any) => {
        this.save(component.validateForm.value)
      }
    })
  }
  save(data){
    this.srv.saveBookmarkCategory(data).subscribe(res=>{
      if(res.isSuccess()){
        this.loadData()
      }
    })
  }
  delLink(id){
    this.srv.delBookmarkCategory(id).subscribe(res=>{
      if(res.isSuccess()){
        this.loadData()
      }
    })
  }
}
