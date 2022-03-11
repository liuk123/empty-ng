import { ApplicationRef, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { JsUtilService } from 'src/app/shared/utils/js-util';
import { DragItem } from '../model/drag.model';
import { compLibData, viewdata } from '../service/data';
import { ViewService } from '../service/view.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-dynamic-edit',
  templateUrl: './dynamic-edit.component.html',
  styleUrls: ['./dynamic-edit.component.less']
})
export class DynamicEditComponent implements OnInit, OnDestroy {

  @ViewChild('viewContainer', { static: true })
  viewContainer: ElementRef;
  // 第几个ng-content
  contentIndex = 0
  // 组件树 需要渲染的
  compTreeData: DragItem[]
  // 公共组件列表
  compLibData: DragItem[]
  // 在视图显示的组件
  selectedCompTreeData: DragItem[]
  // 激活可拖拽的组件
  activeCompData:DragItem=null

  constructor(private viewSrv: ViewService,private jsUtil:JsUtilService, private appRef: ApplicationRef) {
    this.compLibData = compLibData
    this.selectedCompTreeData = this.compTreeData = this.jsUtil.clone(viewdata,(item)=>{
      let tem = this.compLibData.find(v=>v.selector == item.selector)
      if(tem){
        item.moduleLoaderFunction = tem.moduleLoaderFunction
      }
      return item
    })
    this.activeCompData = this.selectedCompTreeData[0]
  }

  ngOnInit(): void {
    this.viewSrv.initDraggableComp(this.viewContainer, [this.selectedCompTreeData])
    console.log(uuidv4())
  }
  
  updateData(){
    let data = {data: '这是外层传入的数据'}
    this.viewSrv.setCompData('ee5eb883-90d6-4119-a00e-3930d0ad899c', data)
  }

  /**
   * 激活组件
   * @param param0 
   */
  setActiveComp({data,i=0}) {
    if(this.activeCompData){
      this.activeCompData.styles.status = false 
    }
    data.styles.status = true
    this.activeCompData = data
    this.contentIndex = i
  }
  // setCompData(id, oDdata, inputData){
  //   let item = this.jsUtil.findItem(oDdata, (item)=>item.id == id)
  //   Object.keys(inputData).forEach(key=>{
  //     item.inputs[key] = inputData[key]
  //   })
  //   this.viewSrv.setCompData(id, inputData)
  // }
  /**
   * 添加平级组件
   * @param data 
   */
  addComponent(data) {
    this.selectedCompTreeData.push(this.jsUtil.clone(data))
    this.clearViews()
    this.viewSrv.initDraggableComp(this.viewContainer, [this.selectedCompTreeData])
  }
  /**
   * 添加子级组件
   * @param data 
   */
  addChildComponent(data) {
    if(this.selectedCompTreeData[0].children[this.contentIndex]){
      this.selectedCompTreeData[0].children[this.contentIndex].push(this.jsUtil.clone(data))
    }else{
      this.selectedCompTreeData[0].children[this.contentIndex]=[this.jsUtil.clone(data)]
    }
    this.clearViews()
    this.viewSrv.initDraggableComp(this.viewContainer, [this.selectedCompTreeData])
  }
  /**
   * 清空视图
   */
  clearViews() {
    this.viewSrv.clearViews()
  }
  /**
   * 导出视图
   */
  exportViews() {
    console.log(this.compTreeData)
  }
  /**
   * 切换组件
   * @param data 
   */
  selComp({data,i=0}) {
    if(this.activeCompData){
      this.activeCompData.styles.status = false 
      this.activeCompData=null
    }
    this.selectedCompTreeData = [data]
    this.contentIndex = i
    this.clearViews()
    this.viewSrv.initDraggableComp(this.viewContainer, [this.selectedCompTreeData])
    
  }
  /**
   * 预览
   */
  preview() {
    if(this.activeCompData){
      this.activeCompData.styles.status = false 
      this.activeCompData=null
    }
    this.selectedCompTreeData = this.compTreeData
    this.clearViews()
    this.viewSrv.initDraggableComp(this.viewContainer, [this.selectedCompTreeData])
  }
  ngOnDestroy() {
    this.clearViews()
  }

}
