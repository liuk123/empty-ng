import { HttpClient } from '@angular/common/http';
import { Component, ComponentFactoryResolver, ComponentRef, Injectable, ViewContainerRef } from '@angular/core';
import { DragItem, DragBoxData, ViewItem } from '../model/drag.model';

import { Drag1Component } from "../views/drag1/drag1.component";
import { Drag2Component } from "../views/drag2/drag2.component";

@Injectable({
  providedIn: 'root'
})
export class ViewService {

  baseDataUrl: string = "assets/data/";
  //所有组件map
  viewMap = new Map<string, any>();
  //创建的组件map  (在propName view里创建的组件)
  crefMap= new Map<string, ComponentRef<Component>>();
  //拖拽容器数据
  dropBoxData: ViewItem[] = []
  //拖拽元素数据
  dragBoxData:DragBoxData = {
    selectedId:'',
    ids:[],
    entities:{}
  }

  constructor(
    private http: HttpClient,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {
    this.viewMap.set('app-drag1',Drag1Component)
    this.viewMap.set('app-drag2',Drag2Component)
  }

  getViewJson(){
    const url = `${this.baseDataUrl}views.json`;
    return this.http.get<ViewItem[]>(url);
  }
  init(){
    
  }
  loadComponent(dragItem:DragItem,viewContainerRef:ViewContainerRef){
    if(!this.crefMap.get(dragItem.id)){
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.viewMap.get(dragItem.component));
      const componentRef = viewContainerRef.createComponent<Component>(componentFactory);
      if(componentFactory.inputs){
        componentFactory.inputs.forEach(v=>componentRef.instance[v.templateName]=dragItem.inputs)
      }
      if(componentFactory.outputs){
        componentFactory.outputs.forEach(v=>componentRef.instance[v.templateName]=dragItem.outputs)
      }
      this.crefMap.set(dragItem.id,componentRef)
    }else{
      // this.crefMap[viewId].get(dragItem.id).changeDetectorRef.markForCheck()
    }
  }
  removeComponent(num:number,viewContainerRef:ViewContainerRef){
    viewContainerRef.remove(num)
  }
}
