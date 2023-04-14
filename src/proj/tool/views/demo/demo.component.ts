import { Component, OnDestroy, OnInit, ViewContainerRef } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { Subject } from 'rxjs';
import { FormGroupComponent } from 'src/app/shared/components/form-group/form-group.component';
import { UtilService } from 'src/app/shared/utils/util';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.less']
})
export class DemoComponent implements OnInit, OnDestroy {
  unSub$ = new Subject()
  
  constructor(
    private util: UtilService,
    private viewContainerRef: ViewContainerRef,
    private modal: NzModalService
  ) { }

  ngOnInit(): void {
    
  }
  ngOnDestroy(): void {
   
  }
  copy(data) {
    this.util.copyToClipboard(data)
  }
  uuid() {
    console.log(this.util.UUIDGenerator())
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

  

}
