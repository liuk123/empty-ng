import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { JsUtilService } from 'src/app/shared/utils/js-util';
import { DragItem } from '../model/drag.model';
import { compLibData, viewdata } from '../service/data';
import { ViewService } from '../service/view.service';

@Component({
  selector: 'app-dynamic-edit',
  templateUrl: './dynamic-edit.component.html',
  styleUrls: ['./dynamic-edit.component.less']
})
export class DynamicEditComponent implements OnInit, OnDestroy {

  @ViewChild('viewContainer', { static: true })
  viewContainer: ElementRef;

  // 组件树 需要渲染的
  compTreeData: DragItem[]
  // 公共组件列表
  compLibData: DragItem[]

  selectedCompTreeData: DragItem[]

  constructor(private viewSrv: ViewService,private jsUtil:JsUtilService) {
    this.compLibData = compLibData
    this.selectedCompTreeData = this.compTreeData = this.jsUtil.clone(viewdata,{objfn:(item)=>{
      let tem = this.compLibData.find(v=>v.selector == item.selector)
      if(tem){
        item.moduleLoaderFunction = tem.moduleLoaderFunction
      }
      return item
    }})
  }

  ngOnInit(): void {
    this.viewSrv.initComponent(this.viewContainer, [this.selectedCompTreeData])
  }

  addComponent(data) {
    this.selectedCompTreeData.push(this.jsUtil.clone(data))
    this.clearViews()
    this.viewSrv.initComponent(this.viewContainer, [this.selectedCompTreeData])
  }
  addChildComponent(data) {
    this.selectedCompTreeData[0].children.push([this.jsUtil.clone(data)])
    this.clearViews()
    this.viewSrv.initComponent(this.viewContainer, [this.selectedCompTreeData])
  }
  clearViews() {
    this.viewSrv.clearViews()
  }
  exportViews() {
    console.log(this.compTreeData)
  }
  /**
   * 选择组件
   * @param data 
   */
  selComp(data) {
    this.selectedCompTreeData = [data]
    console.log(this.selectedCompTreeData)
    this.clearViews()
    this.viewSrv.initComponent(this.viewContainer, [this.selectedCompTreeData])
  }
  preview() {
    this.selectedCompTreeData = this.compTreeData
    this.clearViews()
    this.viewSrv.initComponent(this.viewContainer, [this.selectedCompTreeData])
  }
  ngOnDestroy() {
    this.clearViews()
  }

}
