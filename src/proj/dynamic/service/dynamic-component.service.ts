import { ApplicationRef, ɵNG_COMP_DEF, ComponentRef, createNgModuleRef, Injectable, Injector, ViewContainerRef, ɵRender3ComponentFactory, ɵrenderComponent, ɵRender3NgModuleRef } from "@angular/core";
import { DragBaseModule } from "../model/drag-base.module";
import { DragItem } from "../model/drag.model";

const dragItem:DragItem = {
  "selector": "app-drag",
  "moduleLoaderFunction": () => import("../dynamic.module").then(m => m.DynamicModule),
}
@Injectable()
export class DynamicComponentService{

  dragItem = dragItem
  compRefMap = new Map<string, ComponentRef<unknown>>()
  dragCompRefMap = new Map<string, ComponentRef<unknown>>()
  constructor(private injector: Injector,private appRef: ApplicationRef){}

  getCompRef(id){
    return this.compRefMap.get(id)
  }
  getDragCompRef(id){
    return this.dragCompRefMap.get(id)
  }

  async createDraggableComp(data: DragItem[][], rootSelectorOrNode):Promise<ComponentRef<unknown>[][]> {
    let temArr = new Array(data.length)
    if (Array.isArray(data)) {
      for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data[i].length; j++) {
          let itemData = data[i][j]
          let a = await this.createDraggableComp(itemData.children, rootSelectorOrNode)
          let p = await this.getComponentBySelector(
            itemData.selector,
            itemData.moduleLoaderFunction,
            a.map(b => b.map(c => c.location.nativeElement)),
            rootSelectorOrNode
          )
          let drag = await this.getComponentBySelector(
            dragItem.selector,
            dragItem.moduleLoaderFunction,
            [[p.location.nativeElement]],
            rootSelectorOrNode
          )
          drag.onDestroy(()=>{p.destroy()})
          p.onDestroy(()=>{
            for (let i = 0; i < a.length; i++) {
              for (let j = 0; j < a[i].length; j++) {
                a[i][j].destroy()
              }
            }
          })
          this.setComponentInputs(p, itemData)
          this.setDragInputs(drag, itemData)
          this.compRefMap.set(itemData.id, p)
          this.dragCompRefMap.set(itemData.id, drag)
          if(temArr[i]){
            temArr[i].push(drag)
          }else{
            temArr[i] = [drag]
          }
          this.appRef.attachView(drag.hostView)
          this.appRef.attachView(p.hostView)
        }
      }
    }
    return temArr
  }

  setComponentInputs(componentRef:ComponentRef<unknown>, data){
    if(data.inputs){
      Object.keys(data.inputs).forEach(key=>{
        if(componentRef.instance.hasOwnProperty(key)){
          componentRef.instance[key] = data.inputs[key]
        }
      })
    }
    if(data.outputs){
      Object.keys(data.outputs).forEach(key=>{
        if(componentRef.instance.hasOwnProperty(key)){
          componentRef.instance[key].subscribe(v=>{
            data.outputs[key]=v
          })
        }
      })
    }
    if(data.events){
      Object.keys(data.events).forEach(key=>{
        if(componentRef.instance.hasOwnProperty(key)){
          componentRef.instance[key].subscribe(v=>{
            data.events[key](v)
          })
        }
      })
    }
    // componentRef.changeDetectorRef.detectChanges()
  }
  setDragInputs(componentRef:ComponentRef<unknown>, data){
    if(data.styles){
      componentRef.instance['dragStyles'] = data.styles
    }
  }

  async getComponentBySelector(
    componentSelector: string,
    moduleLoaderFunction: () => Promise<any>,
    projectableNodes:any[][] = [],
    rootSelectorOrNode: string|any = null
  ): Promise<ComponentRef<unknown>> {
    const ngModule = await moduleLoaderFunction()
    // const module =  createNgModuleRef(ngModule, this.injector)
    const moduleFactory = new ɵRender3NgModuleRef(ngModule, this.injector)
    if (moduleFactory.instance instanceof DragBaseModule) {
      const component = moduleFactory.instance.getComponent(componentSelector);
      const compFactory = new ɵRender3ComponentFactory(component[ɵNG_COMP_DEF])
      return compFactory.create(moduleFactory.injector, projectableNodes, rootSelectorOrNode, moduleFactory)
      // console.log(compFactory)
      // console.log(moduleFactory)
      // return viewContainerRef.createComponent(component,{
      //   projectableNodes,
      //   injector: this.injector,
      //   // ngModuleRef: module
      // })
    } else {
      throw new Error('Module should extend BaseModule to use "string" based component selector');
    }
  }
}