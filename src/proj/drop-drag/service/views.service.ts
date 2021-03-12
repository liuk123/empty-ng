import { HttpClient } from '@angular/common/http';
import { Component, ComponentFactoryResolver, ComponentRef, Injectable, QueryList, ViewContainerRef } from '@angular/core';
import { ElDirective } from '../directive/el.directive';
import { ComponentMapModel, DragBoxData, DragItem, ViewItem } from '../model/drag.model';
import { ComponentMap } from '../views/components-config';

@Injectable({
  providedIn: 'root'
})
export class ViewService {

  baseDataUrl: string = "assets/data/";
  //所有组件map
  viewMap:Map<string,ComponentMapModel> = ComponentMap;
  //创建的组件map  (在propName view里创建的组件)
  crefMap = new Map<string, ComponentRef<Component>>();
  //存放画布数据
  viewItems: ViewItem[] = []
  //拖拽元素数据
  private dragItem: DragBoxData = {
    selectedId:"",
    ids:[],
    entities:{}
  }

  constructor(
    private http: HttpClient,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {

  }

  getAllComponentKeys(){
    return Array.from(this.viewMap.keys())
  }
  getAllComponents(){
    return Array.from(this.viewMap.values())
  }
  getComponent(v:string){
    return this.viewMap.get(v).componentRef
  }
  getViewJson() {
    const url = `${this.baseDataUrl}views.json`;
    return this.http.get<ViewItem[]>(url);
  }
  getDragItemStyles(id){
    if(this.dragItem.ids.includes(id)){
      return this.dragItem.entities[id].styles
    }else{
      return null
    }
  }
  setDragItemStyles(id,data){
    if(this.dragItem.ids.includes(id)){
      this.dragItem.entities[id].styles = Object.assign(this.dragItem.entities[id].styles,data)
    }
  }
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
  loadComponent(dragItem: DragItem, viewContainerRef: ViewContainerRef) {
    if (!this.dragItem.ids.includes(dragItem.id)) {
      this.dragItem.ids.push(dragItem.id)
      this.dragItem.entities[dragItem.id]=dragItem

      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.getComponent(dragItem.component));
      const componentRef = viewContainerRef.createComponent<Component>(componentFactory);
      if (componentFactory.inputs) {
        componentFactory.inputs.forEach(v => {
          if (dragItem.inputs[v.propName]) {
            return componentRef.instance[v.propName] = dragItem.inputs[v.propName]
          }
        })
      }
      if (componentFactory.outputs) {
        componentFactory.outputs.forEach(v => {
          if (dragItem.outputs[v.propName]) {
            return componentRef.instance[v.propName].subscribe(v => dragItem.outputs[v.propName] = v)
          }
        })
      }
      this.crefMap.set(dragItem.id, componentRef)
      console.log(this.dragItem)
    } else {
      console.error("组件id已存在："+ dragItem.id)
    }
  }
  removeComponent(num: number, viewContainerRef: ViewContainerRef) {
    viewContainerRef.remove(num)
  }
}
