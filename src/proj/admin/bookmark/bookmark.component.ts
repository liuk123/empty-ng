import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { PageInfo } from 'src/app/biz/model/common/page-info.model';
import { FormGroupComponent } from 'src/app/shared/components/form-group/form-group.component';
import { ColumnItem, DataItem } from 'src/app/shared/components/table-base/table-base.component';
import { AdminService } from '../service/admin.service';
import { ConfigService } from 'src/app/core/services/config.service';

@Component({
  selector: 'app-bookmark',
  templateUrl: './bookmark.component.html',
  styleUrls: ['./bookmark.component.less']
})
export class BookmarkComponent implements OnInit {

  isCollapse = false;
  tableParams = {}
  categoryData=null
  selCategoryId=null
  listOfData:PageInfo<DataItem>=null
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
            this.delLink(data.id)
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
    if(ConfigService.Config.isBrowser){
      let t = localStorage.getItem('selBookmarkId')
      if(t){
        this.selCategoryId = Number(t)
      }
    }
    this.getBookmarkCategory()
  }

  changeCategory(){
    if(ConfigService.Config.isBrowser){
      localStorage.setItem('selBookmarkId', this.selCategoryId)
    }
    this.loadData()
  }
  loadData(data?){
    this.tableParams = {...this.tableParams, ids: [this.selCategoryId], ...data}
    this.srv.getBookmarkByCateIds(this.tableParams).subscribe(res=>{
      if(res.isSuccess()){
        this.listOfData = res
      }
    })
  }
  open(link){
    window.open(link, '_blank')
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
            key: 'link',
            label: '地址',
            value: data['link'] || null,
            valide: [],
            controlType: 'textbox',
            type: 'text',
          }, {
            key: 'descItem',
            label: '描述',
            value: data['descItem'] || null,
            valide: [],
            controlType: 'textbox',
            type: 'text',
          }, {
            key: 'icon',
            label: '图标',
            value: data['icon'] || null,
            valide: [],
            controlType: 'textbox',
            type: 'text',
          }, {
            key: 'categoryId',
            label: '分类',
            value: this.selCategoryId,
            valide: [],
            controlType: 'dropdown',
            type: 'default',
            options: this.categoryData.map(v => ({ name: v.title, code: v.id }))
          }
        ],
        span: 1,
      },
      nzOnOk: (component: any) => {
        const value = component.validateForm.value
        if(!value.icon){
          this.srv.saveFavicon({url: value.link}).subscribe(d=>{
            if(d.isSuccess()){
              if(d.data!==null){
                value.icon = d.data
              }
            }
            this.save(value)
          })
        }else{
          this.save(value)
        }
      }
    })
  }
  save(data){
    this.srv.saveBookmarkItem(data).subscribe(res=>{
      if(res.isSuccess()){
        this.loadData()
      }
    })
  }
  delLink(id){
    this.srv.delBookmarkItem(id).subscribe(res=>{
      if(res.isSuccess()){
        this.loadData()
      }
    })
  }
  getBookmarkCategory(isDelStateKey = false) {
    this.srv.getBookmarkCategory(isDelStateKey).subscribe(res => {
      if (res.isSuccess()) {
        this.categoryData = res.data
        if(this.selCategoryId==null){
          this.selCategoryId = res.data[0]?.id
        }
      }
    })
  }

}
