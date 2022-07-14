import { Component, ElementRef, OnDestroy, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { JsUtilService } from 'src/app/shared/utils/js-util';
import { DragItem } from '../model/drag.model';
import { compLibData, viewdata } from '../service/data';
import { ViewService } from '../service/view.service';
import { v4 as uuidv4 } from 'uuid';
import { NzModalService } from 'ng-zorro-antd/modal';
import { FormGroupComponent } from 'src/app/shared/components/form-group/form-group.component';

@Component({
  selector: 'app-dynamic-edit',
  templateUrl: './dynamic-edit.component.html',
  styleUrls: ['./dynamic-edit.component.less']
})
export class DynamicEditComponent implements OnInit, OnDestroy {

  @ViewChild('viewContainer',{read: ElementRef, static: true})
  viewContainer: ElementRef;
  // 一个组件中的第几个ng-content
  contentIndex = 0
  // 组件树 需要渲染的
  compTreeData: DragItem[]
  // 公共组件列表
  compLibData: DragItem[]
  // 在视图显示的组件
  selectedCompTreeData: DragItem[]
  // 激活可拖拽的组件
  activeCompData:DragItem=null

  // 画布信息
  viewInfo={
    width: 1920,
    height: 1080,
    scale: 1,
  }

  constructor(private viewSrv: ViewService,private jsUtil:JsUtilService,
    private modal: NzModalService,
    private viewContainerRef: ViewContainerRef) {
    // 数据处理
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
  
  /**
   * 更新某个组件的数据
   */
  updateData(){
    let data = {data: '这是外层传入的数据'}
    this.viewSrv.setCompData('ee5eb883-90d6-4119-a00e-3930d0ad899c', data)
  }

  /**
   * 激活某个组件, 展示可拖拽组件
   * @param param0 
   */
  setActiveComp({data,i=0}) {
    // if(this.activeCompData == data){
    //   return null
    // }
    if(this.activeCompData){
      this.activeCompData.styles.status = false 
    }
    data.styles.status = true
    this.activeCompData = data
    this.contentIndex = i
  }

  /**
   * 添加组件时弹框
   * @param data 
   */
  showAddCompDialog(data){
    this.modal.create({
      nzTitle: '组件初始化配置',
      nzContent: FormGroupComponent,
      nzViewContainerRef: this.viewContainerRef,
      nzComponentParams:{
        span: 1,
        params: [
          {
            key: 'desc',
            label: '组件描述',
            value: null,
            valide:[],
            controlType: 'textbox',
            type: 'text',
          },{
            key: 'islevel',
            label: '层级',
            value: false,
            valide:[],
            controlType: 'radio',
            options: [
              {name: '平级', code: true},
              {name: '子级', code: false},
            ]
          }
        ] 
      },
      nzOnOk: (component:any) => {
        let params = component.validateForm.value
        data.desc = params.desc
        if(params.islevel){
          this.addComponent(data)
        }else{
          this.addChildComponent(data)
        }
        
      }
    })
  }
  /**
   * 移动，复制时，显示组件树
   * @param data 
   */
  showCompTreeDialog(data){
    // 显示--移动/复制 某个组件到**
  }
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
    if(this.activeCompData){
      if(this.activeCompData.children[this.contentIndex]){
        this.activeCompData.children[this.contentIndex].push(this.jsUtil.clone(data))
      }else{
        this.activeCompData.children[this.contentIndex]=[this.jsUtil.clone(data)]
      }
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
   * 切换展示组件，视图只展示某个组件
   * @param data 
   */
  switchComp({data,i=0}) {
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
  saveLocalStorage(){
    window.localStorage.setItem('1','1')
  }

  scale(n){
    let tem = Math.floor((this.viewInfo.scale+n)*10+0.5)/10
    if(tem<=1.2&&tem>=.5){
      this.viewInfo.scale=tem
    }
  }
}
