import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewContainerRef } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { MessageUtilService } from 'src/app/core/services/message-util.service';
import { FormGroupComponent } from 'src/app/shared/components/form-group/form-group.component';
import { WebsiteService } from '../service/website.service';

// recommend|hot|friend
@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LinksComponent implements OnInit {

  data = {}
  category = []
  searchValue = 'friend'

  constructor(
    private srv:WebsiteService,
    private modal: NzModalService,
    private viewContainerRef: ViewContainerRef,
    private message: MessageUtilService,
    private cf: ChangeDetectorRef,
  ) { }

  ngOnInit(): void {
    this.getLink(this.searchValue)
  }
  getLink(type){
    this.srv.getLink(type).subscribe(res=>{
      if(res.isSuccess()){
        this.data = {}
        res.data.forEach(v=>{
          if(!this.data?.hasOwnProperty(v.category)){
            this.data[v.category] = []
          }
          this.data[v.category].push(v)
        })
        this.category = Object.keys(this.data)
        this.cf.markForCheck()
      }
    })
  }
  showLinkDialog(e, title, data={}){
    e.preventDefault()
    this.modal.create({
      nzTitle: title,
      nzContent: FormGroupComponent,
      nzViewContainerRef: this.viewContainerRef,
      nzComponentParams: {
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
          }, {
            key: 'type',
            label: 'type',
            value: data['type'] ?? null,
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
        this.saveLink(component.validateForm.value)
      }
    })
  }
  saveLink(data){
    this.srv.saveLink(data).subscribe(res=>{
      if(res.isSuccess()){
        this.message.success('保存成功')
        this.getLink(this.searchValue)
      }
    })
  }
  delLink(id){
    this.srv.delLink(id).subscribe(res=>{
      if(res.isSuccess()){
        this.message.success('删除成功')
        this.getLink(this.searchValue)
      }
    })
  }
}
