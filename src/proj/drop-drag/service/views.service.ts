import { HttpClient } from '@angular/common/http';
import { Component, ComponentFactoryResolver, ComponentRef, Injectable, ViewContainerRef } from '@angular/core';
import { Subject } from 'rxjs';
import { DragData } from '../directive/drag.directive';
import { DragItem, DropBoxData, DragBoxData, ViewItem } from '../model/drag.model';

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
  crefMap:{[propName:string]: Map<string, ComponentRef<Component>>}={};
  //拖拽容器数据
  dropBoxData: {[propName: string]:DropBoxData} = {}
  //拖拽元素数据
  dragBoxData: {[propName:string]:DragBoxData} = {}

  constructor(
    private http: HttpClient,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {
    this.viewMap.set('app-drag1',Drag1Component)
    this.viewMap.set('app-drag2',Drag2Component)
    console.log('servie')
  }

  getViewJson(){
    const url = `${this.baseDataUrl}views.json`;
    return this.http.get<ViewItem[]>(url);
  }
  init(){
    
  }
  loadComponent(dragItem:DragItem,viewId:string,viewContainerRef:ViewContainerRef){
    if(!this.crefMap[viewId]) this.crefMap[viewId]=new Map()

    if(!this.crefMap[viewId].get(dragItem.id)){
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.viewMap.get(dragItem.component));
      const componentRef = viewContainerRef.createComponent<Component>(componentFactory);
      if(componentFactory.inputs){
        componentFactory.inputs.forEach(v=>componentRef.instance[v.templateName]=dragItem.inputs)
      }
      if(componentFactory.outputs){
        componentFactory.outputs.forEach(v=>componentRef.instance[v.templateName]=dragItem.outputs)
      }
      this.crefMap[viewId].set(dragItem.id,componentRef)
    }else{
      // this.crefMap[viewId].get(dragItem.id).changeDetectorRef.markForCheck()
    }
  }
  removeComponent(num:number,viewContainerRef:ViewContainerRef){
    viewContainerRef.remove(num)
  }
}
