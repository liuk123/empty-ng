import { HttpClient } from '@angular/common/http';
import { Component, ComponentFactoryResolver, ComponentRef, Injectable, QueryList, ViewContainerRef } from '@angular/core';
import { ElDirective } from '../directive/el.directive';
import { DragItem, ViewItem } from '../model/drag.model';

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
  crefMap = new Map<string, ComponentRef<Component>>();
  //存放数据
  viewItems: ViewItem[] = []

  constructor(
    private http: HttpClient,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {
    this.viewMap.set('app-drag1', Drag1Component)
    this.viewMap.set('app-drag2', Drag2Component)
  }

  getViewJson() {
    const url = `${this.baseDataUrl}views.json`;
    return this.http.get<ViewItem[]>(url);
  }
  initViews(el: ElDirective) {
    this.viewItems.push(el.elHost)
    el.elHost.children.forEach(component => {
      setTimeout(() => {
        this.loadComponent(component, el.viewContainerRef)
      }, 0)
    })
  }
  loadComponent(dragItem: DragItem, viewContainerRef: ViewContainerRef) {
    if (!this.crefMap.get(dragItem.id)) {
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.viewMap.get(dragItem.component));
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
    } else {
      // this.crefMap[viewId].get(dragItem.id).changeDetectorRef.markForCheck()
    }
  }
  removeComponent(num: number, viewContainerRef: ViewContainerRef) {
    viewContainerRef.remove(num)
  }
}
