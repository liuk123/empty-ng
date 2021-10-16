import { Component, ComponentFactoryResolver, Injectable, ViewContainerRef } from '@angular/core';
export class componentInstance{
  constructor(
    public componentRef: any,
    public inputs?: {},
    public outputs?: {},
    public events?: {},
  ){}
}

@Injectable()
export class NgUtilService {
  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }


  /**
   * 动态加载组件
   * @param item 
   * @param viewContainerRef 
   */
  loadComponent(item: componentInstance, viewContainerRef: ViewContainerRef){
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(item.componentRef);
    const componentRef = viewContainerRef.createComponent<Component>(componentFactory);
    if (componentFactory.inputs) {
      componentFactory.inputs.forEach(v => {
        if (item.inputs[v.propName]) {
          return componentRef.instance[v.propName] = item.inputs[v.propName]
        }
      })
    }
    if (componentFactory.outputs) {
      componentFactory.outputs.forEach(v => {
        if (item.outputs[v.propName]!=undefined) {
          return componentRef.instance[v.propName].subscribe(val => {
            item.outputs[v.propName] = val
          })
        }
        // 绑定事件 this.timeEvent.emit(val)
        if(item.events&&item.events[v.propName]!=undefined){
          return componentRef.instance[v.propName].subscribe(val=>{
            item.events[v.propName](val)
          })
        }
      })
    }
  }
}