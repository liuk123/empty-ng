import { HttpClient } from '@angular/common/http';
import { Component, ComponentFactoryResolver, ComponentRef, Injectable, QueryList, ViewContainerRef } from '@angular/core';
import { ElDirective } from '../directive/el.directive';
import { ComponentMapModel, DragBoxData, DragItem, ViewItem } from '../model/drag.model';
import { ComponentMap } from '../views/components-config';

@Injectable()
export class ViewService {

  baseDataUrl: string = "assets/data/";
  //所有组件map
  viewMap:Map<string,ComponentMapModel> = ComponentMap;
  //创建的组件map  (在propName view里创建的组件)
  crefMap = new Map<string, ComponentRef<Component>>();
  //存放画布数据
  viewItems: ViewItem[] = []
  //拖拽元素数据
  private dragItems: DragBoxData = {
    selectedId:"",
    ids:[],
    entities:{}
  }

  constructor(
    private http: HttpClient,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {

  }

  /**
   * 获取所有已创建组件的keys
   * @returns 
   */
  getAllComponentKeys(){
    return Array.from(this.viewMap.keys())
  }
  /**
   * 获取所有已创建组件
   * @returns 
   */
  getAllComponents(){
    return Array.from(this.viewMap.values())
  }
  /**
   * 获取某一个已创建的组件
   * @param v 
   * @returns 
   */
  getComponent(v:string){
    return this.viewMap.get(v).componentRef
  }
  /**
   * 获取画布信息
   * @returns 
   */
  // getViewJson() {
  // const url = `${this.baseDataUrl}views.json`;
  // return this.http.get<ViewItem[]>(url);
  // }
  /**
   * 获取组件样式数据
   * @param id 组件id
   * @returns 
   */
  getDragItemStyles(id){
    if(this.dragItems.ids.includes(id)){
      return this.dragItems.entities[id].styles
    }else{
      return null
    }
  }
  /**
   * 设置组件样式、位置信息
   * @param id 组件id
   * @param data 样式对象
   */
  setDragItemStyles(id,data){
    if(this.dragItems.ids.includes(id)){
      this.dragItems.entities[id].styles = Object.assign(this.dragItems.entities[id].styles,data)
    }
  }
  /**
   * 更新组件传入数据
   * @param id 组件id
   * @param data 组件input对象
   */
  setDragItemInputs(id,data:object){
    if(this.dragItems.ids.includes(id)){
      for(let key in data){
        this.dragItems.entities[id].inputs[key] = data[key]
        this.crefMap.get(id).instance[key]=data[key]
      }
    }
  }
  /**
   * 获取组件传出数据
   * @param id 组件id
   * @returns 
   */
  getDragItemOutputs(id){
    if(this.dragItems.ids.includes(id)){
      return this.dragItems.entities[id].outputs
    }else{
      return null
    }
  }
  /**
   * 初始化画布
   * @param el 画布ElDirective，
   * @returns 
   */
  initViews(el: ElDirective) {
    if(this.viewItems.findIndex(v=>el.elHost.id == v.id)!==-1){
      console.error('views已存在：'+el.elHost.id)
      return null
    }
    this.viewItems.push({
      id: el.elHost.id,
      viewName: el.elHost.viewName
    })
    el.elHost.children.forEach(component => {
      setTimeout(() => {
        this.loadComponent(component, el.viewContainerRef)
      }, 0)
    })
  }
  /**
   * 创建组件
   * @param dragItem 组件数据
   * @param viewContainerRef 容器ref
   */
  loadComponent(dragItem: DragItem, viewContainerRef: ViewContainerRef) {
    if (!this.dragItems.ids.includes(dragItem.id)) {
      this.dragItems.ids.push(dragItem.id)
      this.dragItems.entities[dragItem.id]=dragItem

      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.getComponent(dragItem.component));
      const componentRef = viewContainerRef.createComponent<Component>(componentFactory);
      if (componentFactory.inputs) {
        componentRef.instance['componentId'] = dragItem.id
        componentFactory.inputs.forEach(v => {
          if (dragItem.inputs[v.propName]) {
            return componentRef.instance[v.propName] = dragItem.inputs[v.propName]
          }
        })
      }
      if (componentFactory.outputs) {
        componentFactory.outputs.forEach(v => {
          if (dragItem.outputs[v.propName]!=undefined) {
            return componentRef.instance[v.propName].subscribe(val => {
              dragItem.outputs[v.propName] = val
            })
          }
          if(dragItem.events&&dragItem.events[v.propName]!=undefined){
            return componentRef.instance[v.propName].subscribe(val=>{
              dragItem.events[v.propName](this.dragItems, val)
            })
          }
        })
      }
      this.crefMap.set(dragItem.id, componentRef)
      console.log("dragItems: "+this.dragItems)
    } else {
      console.error("组件id已存在："+ dragItem.id)
    }
  }
  /**
   * 移除组件
   * @param num 
   * @param viewContainerRef 
   */
  removeComponent(num: number, viewContainerRef: ViewContainerRef) {
    viewContainerRef.remove(num)
  }
}
