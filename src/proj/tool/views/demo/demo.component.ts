import { Component, OnDestroy, OnInit, ViewContainerRef } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { Subject } from 'rxjs';
import { FormGroupComponent } from 'src/app/shared/components/form-group/form-group.component';
import { UtilService } from 'src/app/shared/utils/util';
import { AjaxService } from '../../service/ajax.service';
import { HttpResponse } from '@angular/common/http';
import { MessageUtilService } from 'src/app/core/services/message-util.service';
import { IndexDBService } from 'src/app/core/services/indexDB.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.less']
})
export class DemoComponent implements OnInit, OnDestroy {
  unSub$ = new Subject()
  db:IDBDatabase=null
  constructor(
    private util: UtilService,
    private viewContainerRef: ViewContainerRef,
    private modal: NzModalService,
    private srv: AjaxService,
    private messageSrv: MessageUtilService,
    private dbSrv: IndexDBService
  ) { }

  ngOnInit(): void { }
  ngOnDestroy(): void {
   this.dbSrv.closeDB(this.db)
  }
  copy(data) {
    this.util.copyToClipboard(data)
    this.messageSrv.success('复制成功')
  }
  uuid() {
    console.log(this.util.UUIDGenerator())
  }
  openDB(){
    this.dbSrv.openDB('helloIndexDB', 'helloStore').subscribe(v=>this.db = v)
  }
  saveData(){
    // this.dbSrv.update(this.db,'helloStore',[{id:1, data: '这是一人挑333'}]).subscribe(v=>{
    //   console.log(v)
    // })
    this.dbSrv.getDataByKey(this.db,'helloStore',123).subscribe(v=>{
      console.log(v)
    })
  }

  opendialog(title, data = {}){
    let params = [
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
        key: 'roleIds',
        label: '角色',
        value: null,
        valide:[],
        controlType: 'dropdown',
        type: 'multiple',
        options: [
          {name: '山东', code: 'shandong'},
          {name: '河北', code: 'hebei'},
        ],
        children: {
          shandong: [
            {
              key: 'title11',
              label: '子名称1',
              value: data['title'] || null,
              valide: [],
              controlType: 'textbox',
              type: 'text'
            },
          ],
          hebei:[
            {
              key: 'title12',
              label: '子名称2',
              value: data['title'] || null,
              valide: [],
              controlType: 'textbox',
              type: 'text'
            }
          ]
        }
      }
    ]
    this.modal.create({
      nzTitle: title,
      nzContent: FormGroupComponent,
      nzViewContainerRef: this.viewContainerRef,
      nzMaskClosable: false,
      nzComponentParams: {
        params: params,
        span: 1,
      },
      nzOnOk: (component: any) => {
        // this.saveBookmarkCategory(component.validateForm.value)
        console.log(component.validateForm.value)
      }
    })
  }
 
  getFavicon(){
    let params = {
      url: 'https://d.design/'
    }
    this.srv.getFavicon(params).subscribe(v=>{
      if(v instanceof HttpResponse){
        let fileName =v.headers.get('content-disposition')
        this.util.download(v.body, fileName.slice(fileName.indexOf('filename=')+9))
      }
    })
  }
}
