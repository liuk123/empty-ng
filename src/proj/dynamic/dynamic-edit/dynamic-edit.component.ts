import { ApplicationRef, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
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

  constructor(private viewSrv: ViewService,private jsUtil:JsUtilService, private appRef: ApplicationRef) {
    this.compLibData = compLibData
    this.selectedCompTreeData = this.compTreeData = this.jsUtil.clone(viewdata,(item)=>{
      let tem = this.compLibData.find(v=>v.selector == item.selector)
      if(tem){
        item.moduleLoaderFunction = tem.moduleLoaderFunction
      }
      return item
    })
  }

  ngOnInit(): void {
    this.viewSrv.initDraggableComp(this.viewContainer, [this.selectedCompTreeData])

    setTimeout(() => {
      let data = {data: '这是外层传入的数据'}
      this.viewSrv.setCompData('ee5eb883-90d6-4119-a00e-3930d0ad899c', data)
      
    }, 5000);
  }

  setCompData(id, oDdata, inputData){
    let item = this.jsUtil.findItem(oDdata, (item)=>item.id == id)
    Object.keys(inputData).forEach(key=>{
      item.inputs[key] = inputData[key]
    })
    this.viewSrv.setCompData(id, inputData)
  }
  addComponent(data) {
    this.selectedCompTreeData.push(this.jsUtil.clone(data))
    this.clearViews()
    this.viewSrv.initDraggableComp(this.viewContainer, [this.selectedCompTreeData])
  }
  addChildComponent(data) {
    this.selectedCompTreeData[0].children.push([this.jsUtil.clone(data)])
    this.clearViews()
    this.viewSrv.initDraggableComp(this.viewContainer, [this.selectedCompTreeData])
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
    this.viewSrv.initDraggableComp(this.viewContainer, [this.selectedCompTreeData])
  }
  preview() {
    this.selectedCompTreeData = this.compTreeData
    this.clearViews()
    this.viewSrv.initDraggableComp(this.viewContainer, [this.selectedCompTreeData])
  }
  ngOnDestroy() {
    this.clearViews()
  }

}
