import { Component, ElementRef, OnDestroy, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { JsUtilService } from 'src/app/shared/utils/js-util';
import { DragItem } from '../model/drag.model';
import { viewdata } from '../service/data.js';
import { ViewService } from '../service/view.service';
import { NzModalService } from 'ng-zorro-antd/modal';
import { FormGroupComponent } from 'src/app/shared/components/form-group/form-group.component';
import { SelectCompDialogComponent } from './select-comp-dialog/select-comp-dialog.component';
import { MessageUtilService } from 'src/app/core/services/message-util.service';
import { UtilService } from 'src/app/shared/utils/util';
import { MoveService } from '../service/move.service';
import { DataService } from '../service/data.service';
import { ConfigService } from 'src/app/core/services/config.service';
import { compLibData } from '../service/lib-comp';

@Component({
  selector: 'app-dynamic-edit',
  templateUrl: './dynamic-edit.component.html',
  styleUrls: ['./dynamic-edit.component.less']
})
export class DynamicEditComponent implements OnInit, OnDestroy {

  @ViewChild('viewContainer', { read: ElementRef, static: true })
  viewContainer: ElementRef;
  // 一个组件中的第几个ng-content
  contentIndex = 0
  // 组件树 需要渲染的
  compTreeData: DragItem[]
  // 公共组件列表
  compLibData: {title: string, children: DragItem[]}[]
  // 在视图显示的组件--compTreeData中选中显示的组件
  selectedCompTreeData: DragItem[]
  // 激活可拖拽的组件
  activeCompData: DragItem = null

  // 画布信息
  viewInfo = {
    width: 1920,
    height: 1080,
    scale: 1,
  }

  menuDown = [
    {
      title: '复制到',
      code: 'copy'
    }, {
      title: '移动到',
      code: 'move'
    }, {
      title: '删除',
      code: 'delete'
    }, {
      title: '修改', // 修改描述
      code: 'edit'
    }, {
      title: '切换到',
      code: 'switchComp'
    },
  ]

  // 数据绑定 form
  formData={
    inputs: [],
    params: [],
    outputs: [],
    events: [],
    styles: [],
  }

  constructor(
    private viewSrv: ViewService,
    private jsUtil: JsUtilService,
    private modal: NzModalService,
    private viewContainerRef: ViewContainerRef,
    private message: MessageUtilService,
    private util: UtilService,
    private dataSrv: DataService,
    private moveSrv: MoveService,) {

    this.initData(viewdata)
    this.setActiveComp({ data: this.selectedCompTreeData[0] })
  }
  /**
   * 初始化数据
   */
  initData(data){
    this.compLibData = compLibData
    this.selectedCompTreeData = this.compTreeData = this.jsUtil.clone(data, (item) => {
      for(let i=0; i<this.compLibData.length; i++){
        let ret = this.compLibData[i]?.children?.find(val=> val.selector == item.selector)
        if(ret){
          item.moduleLoaderFunction = ret.moduleLoaderFunction
          break
        }
      }
      return item
    })
  }
  getPathData(data, paths, index=0){
    if(data==null){
      return null
    }
    if(paths.length-1>index){
      return this.getPathData(data[paths[index]], paths, ++index)
    }else {
      return data[paths[index]]
    }
  }
  ngOnInit(): void {
    if(ConfigService.Config.isBrowser){
      // 渲染组件
      this.viewSrv.initDraggableComp(this.viewContainer, [this.selectedCompTreeData], this.dataSrv)
      // 订阅鼠标事件
      this.moveSrv.startMove()
      // 接口数据循环调取
      this.dataSrv.init()
    }
  }
  

  /**
   * 更新某个组件的数据
   */
  updateData(id = 'ee5eb883-90d6-4119-a00e-3930d0ad899c', data = { data: '这是外层传入的数据' }) {
    // this.activeCompData.inputs.title = 123

    // this.selectedCompTreeData[0].inputs.title="12344"

    // this.viewSrv.setCompData(id, data)
    // Object.keys(data).forEach(key => {
    //   if (this.activeCompData.inputs[key]) {
    //     this.activeCompData.inputs[key] = data[key]
    //   }
    // })
    let tem = this.jsUtil.stringify(this.activeCompData.params)
    console.log(tem)
    console.log(this.activeCompData.params)
    console.log(this.jsUtil.parse(tem))
  }

  /**
   * 激活某个组件, 展示可拖拽组件
   * @param param0 
   */
  setActiveComp({ data, i = 0 }) {
    if (this.activeCompData == data) {
      if (this.activeCompData.styles.status === false) {
        this.activeCompData.styles.status = true
      }
      if(this.contentIndex != i){
        this.contentIndex = i
      }
      return null
    }
    if (this.activeCompData) {
      this.activeCompData.styles.status = false
    }
    data.styles.status = true
    this.activeCompData = data
    let siblingCompData = this.getSiblingComp(this.selectedCompTreeData, this.activeCompData.id)
    MoveService.switchCurComp(this.activeCompData, siblingCompData)
    this.contentIndex = i

    this.setFormData(data)
  }

  /**
   * 数据绑定-保存按钮
   * @param data 
   * @param key 
   */
  saveFormData(data, key){
    this.setValue(this.activeCompData[key], data)
  }
  /**
   * 两个数据-赋值，
   * @param oldObj 
   * @param newObj 
   */
  setValue(oldObj, newObj){
    Object.keys(oldObj).forEach(key=>{
      if(this.jsUtil.isArray(oldObj[key])){
        let tem = this.jsUtil.parse(newObj[key])
        oldObj[key].length = tem.length
        tem.forEach((v,i)=>{
          oldObj[key][i] = v
        })
      }else if(this.jsUtil.isObject(oldObj[key])){
        let tem = this.jsUtil.parse(newObj[key])
        Object.keys(oldObj[key]).forEach(k=>{
          if(k in tem){
            oldObj[key][k] = tem[k]
          }else{
            delete oldObj[key][k]
          }
        })
      }else{
        console.log(oldObj[key])
        oldObj[key] = newObj[key]
      }
    })
  }

  /**
   * 转成form组件数据
   * @param data 
   */
  setFormData(data){
    if(this.jsUtil.isObject(data.inputs)){
      this.formData.inputs = Object.keys(data.inputs).map(key=>{
       let ret = {
        key: key,
        label: key,
        value: this.jsUtil.stringify(data.inputs[key]),
        controlType: null,
        type: null,
       }
       if(this.jsUtil.isNumber(data.inputs[key])){
        ret.controlType = 'textbox'
        ret.type='number'
       }else{
        ret.controlType = 'textarea'
       }
       return ret
      })
    }
    if(this.jsUtil.isObject(data.params)){
      this.formData.params = Object.keys(data.params).map(key=>{
        let ret = {
         key: key,
         label: key,
         value: this.jsUtil.stringify(data.params[key]),
         controlType: null,
         type: null,
        }
        if(this.jsUtil.isNumber(data.params[key])){
         ret.controlType = 'textbox'
         ret.type='number'
        }else{
         ret.controlType = 'textarea'
        }
        return ret
       })
    }
    if(this.jsUtil.isObject(data.outputs)){
      this.formData.outputs = Object.keys(data.outputs).map(key=>{
        let ret = {
         key: key,
         label: key,
         value: this.jsUtil.stringify(data.outputs[key]),
         controlType: null,
         type: null,
        }
        if(this.jsUtil.isNumber(data.outputs[key])){
         ret.controlType = 'textbox'
         ret.type='number'
        }else{
         ret.controlType = 'textarea'
        }
        return ret
       })
    }
    if(this.jsUtil.isObject(data.events)){
      this.formData.events = Object.keys(data.events).map(key=>{
        let ret = {
         key: key,
         label: key,
         value: this.jsUtil.stringify(data.events[key]),
         controlType: null,
         type: null,
        }
        if(this.jsUtil.isNumber(data.events[key])){
         ret.controlType = 'textbox'
         ret.type='number'
        }else{
         ret.controlType = 'textarea'
        }
        return ret
       })
    }
    if(this.jsUtil.isObject(data.styles)){
      this.formData.styles = Object.keys(data.styles).map(key=>{
        let ret = {
         key: key,
         label: key,
         value: this.jsUtil.stringify(data.styles[key]),
         controlType: null,
         type: null,
        }
        if(this.jsUtil.isNumber(data.styles[key])){
         ret.controlType = 'textbox'
         ret.type='number'
        }else{
         ret.controlType = 'textarea'
        }
        return ret
       })
    }
  }

  /**
   * 添加组件时弹框
   * @param data 
   */
  showAddCompDialog(data) {
    this.modal.create({
      nzTitle: '组件初始化配置',
      nzContent: FormGroupComponent,
      nzViewContainerRef: this.viewContainerRef,
      nzMaskClosable: false,
      nzComponentParams: {
        span: 1,
        params: [
          {
            key: 'desc',
            label: '组件描述',
            value: null,
            valide: [],
            controlType: 'textbox',
            type: 'text',
          }, {
            key: 'islevel',
            label: '层级',
            value: true,
            valide: [],
            controlType: 'radio',
            options: [
              { name: '平级', code: true },
              { name: '子级', code: false },
            ]
          }, {
            key: 'type',
            label: '组件类型',
            value: true,
            valide: [],
            controlType: 'radio',
            options: [
              { name: '拖拽', code: 'absolute' },
              { name: '固定', code: 'block' },
            ]
          }
        ]
      },
      nzOnOk: (component: any) => {
        let params = component.validateForm.value
        let cloneData = this.jsUtil.clone(data)
        cloneData.desc = params.desc
        cloneData.id = this.util.UUIDGenerator()
        cloneData.type = params.type

        if (params.islevel) {
          this.addComponent(cloneData)
        } else {
          this.addChildComponent(cloneData)
        }

      }
    })
  }

  /**
   * 组件树菜单列表
   * @param data 
   */
  optCk(data) {
    switch (data.opt.code) {
      case 'delete':
        this.modal.confirm({
          nzTitle: '确定删除组件吗',
          nzContent: '确定删除组件吗',
          nzOnOk: () => {
            this.delComp(data.pCompData?.children || [this.compTreeData], data.compData.id)
            this.viewSrv.clearViews()
            this.viewSrv.initDraggableComp(this.viewContainer, [this.selectedCompTreeData], this.dataSrv)
          }
        })
        break
      case 'copy':
      case 'move':
        this.showCompTreeDialog(data)
        break
      case 'edit':
        this.editCompInfoDialog(data)
        break
      case 'switchComp':
        this.switchComp({ data: data.compData, i: 0 })
    }
  }
  /**
   * 树操作 - 移动，复制，显示组件树
   * @param data 
   */
  showCompTreeDialog(data) {
    this.modal.create({
      nzTitle: data.opt.title,
      nzContent: SelectCompDialogComponent,
      nzViewContainerRef: this.viewContainerRef,
      nzMaskClosable: false,
      nzComponentParams: {
        data: [this.compTreeData],
      },
      nzOnOk: (component: any) => {
        if (!component.curData) {
          this.message.warning('未选择组件')
        } else {
          // 复制
          let o = this.jsUtil.clone(data.compData)
          if (component.curData.data.children[component.curData.i] == undefined) {
            component.curData.data.children[component.curData.i] = []
          }
          o.id = this.util.UUIDGenerator()
          o.styles = {
            ...o.styles,
            left: 0,
            top: 0
          }
          component.curData.data.children[component.curData.i].push(o)
          // ----

          // 移动
          if (data.opt.code === 'move') {
            this.delComp(data.pCompData?.children || [this.compTreeData], data.compData.id)
          }
          // -----

          this.viewSrv.clearViews()
          this.viewSrv.initDraggableComp(this.viewContainer, [this.selectedCompTreeData], this.dataSrv)
        }
      }
    })
  }
  /**
   * 树操作-删除
   * @param data 
   */
  delComp(data, id) {
    if (data) {
      for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data[i].length; j++) {
          if (data[i][j].id === id) {
            data[i].splice(j, 1)
            break
          }
        }
        break
      }
    }
  }
  /**
   * 修改组件信息--描述
   * @param data 
   */
  editCompInfoDialog(data) {
    this.modal.create({
      nzTitle: '修改组件信息',
      nzContent: FormGroupComponent,
      nzViewContainerRef: this.viewContainerRef,
      nzMaskClosable: false,
      nzComponentParams: {
        span: 1,
        params: [
          {
            key: 'desc',
            label: '组件描述',
            value: data?.compData?.desc,
            valide: [],
            controlType: 'textbox',
            type: 'text',
          }
        ]
      },
      nzOnOk: (component: any) => {
        let params = component.validateForm.value
        data.compData.desc = params.desc
      }
    })
  }
  /**
   * 添加平级组件
   * @param data 
   */
  addComponent(data) {
    this.selectedCompTreeData.push(data)
    this.viewSrv.clearViews()
    this.viewSrv.initDraggableComp(this.viewContainer, [this.selectedCompTreeData], this.dataSrv)
  }
  /**
   * 添加子级组件
   * @param data 
   */
  addChildComponent(data) {
    if (this.activeCompData) {
      if (this.activeCompData.children[this.contentIndex]) {
        this.activeCompData.children[this.contentIndex].push(data)
      } else {
        this.activeCompData.children[this.contentIndex] = [data]
      }
      this.viewSrv.clearViews()
      this.viewSrv.initDraggableComp(this.viewContainer, [this.selectedCompTreeData], this.dataSrv)
    }
  }
  /**
   * 清空视图
   */
  clearViews() {
    this.viewSrv.clearViews()
    this.compTreeData.length=0;
    this.selectedCompTreeData.length=0;
    this.activeCompData = null;
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
  switchComp({ data, i = 0 }) {
    if (this.activeCompData) {
      this.activeCompData.styles.status = false
      this.activeCompData = null
    }
    this.selectedCompTreeData = [data]
    this.contentIndex = i
    this.viewSrv.clearViews()
    this.viewSrv.initDraggableComp(this.viewContainer, [this.selectedCompTreeData], this.dataSrv)

  }
  /**
   * 预览
   */
  preview() {
    if (this.activeCompData) {
      this.activeCompData.styles.status = false
      this.activeCompData = null
    }
    this.selectedCompTreeData = this.compTreeData
    this.viewSrv.clearViews()
    this.viewSrv.initDraggableComp(this.viewContainer, [this.selectedCompTreeData], this.dataSrv)
  }
  ngOnDestroy() {
    this.viewSrv.clearViews()
    this.moveSrv.destory()
    this.dataSrv.destroy()
  }
  /**
   * 暂存
   */
  saveLocalStorage() {
    if (this.activeCompData) {
      this.activeCompData.styles.status = false
    }
    let ret = this.jsUtil.clone(this.compTreeData, item=>{
      if('moduleLoaderFunction' in item){
        item.moduleLoaderFunction=null
      }
      return item
    })
    let t = this.jsUtil.stringify(ret)
    window.localStorage.setItem('dy-component-tree', t)
  }
  /**
   * 获取上次暂存内容
   */
  getLastLocalData() {
    const tem = window.localStorage.getItem('dy-component-tree')
    let ret = this.jsUtil.parse(tem)
    this.initData(ret)
    this.viewSrv.clearViews()
    this.viewSrv.initDraggableComp(this.viewContainer, [this.selectedCompTreeData], this.dataSrv)
  }

  /**
   * 画布缩放 (1.2-0.5之间)
   * @param n 
   */
  scale(n) {
    let tem = Math.floor((this.viewInfo.scale + n) * 10 + 0.5) / 10
    if (tem <= 1.2 && tem >= .5) {
      this.viewInfo.scale = tem
    }
  }

  /**
   * 获取兄弟元素
   * @param data 
   * @param id 
   * @returns 
   */
  getSiblingComp(data, id) {
    let ret
    this.findData(data, (data, type) => type == 'array' && data.some(v => v && v.id == id), (data) => {
      ret = data
    })
    return ret?.filter(v => v.id !== id)
  }

  findData(data, conditionFn, fn1) {
    if (this.jsUtil.isArray(data)) {
      if (conditionFn(data, 'array')) {
        fn1(data)
      }
      return data.forEach(item => this.findData(item, conditionFn, fn1))
    } else if (this.jsUtil.isObject(data)) {
      if (conditionFn(data, 'object')) {
        fn1(data)
      }
      let keys = Object.keys(data)
      for (let i = 0; i < keys.length; i++) {
        this.findData(data[keys[i]], conditionFn, fn1)
      }
    }
  }
}
