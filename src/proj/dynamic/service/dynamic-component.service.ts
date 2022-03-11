import { ApplicationRef, Compiler, ComponentFactory, ComponentRef, Injectable, Injector, NgModuleFactory } from "@angular/core";
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
  constructor(private injector: Injector,private appRef: ApplicationRef){}

  getCompRef(id){
    return this.compRefMap.get(id)
  }

  async createDraggableComp(data: DragItem[][], rootSelectorOrNode = null):Promise<ComponentRef<unknown>[][]> {
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
    const moduleFactory = await this.getModuleFactory(moduleLoaderFunction);
    const module = moduleFactory.create(this.injector);
    if (module.instance instanceof DragBaseModule) {
      const compFactory: ComponentFactory<any> = module.instance.getComponentFactory(componentSelector);
      return compFactory.create(module.injector, projectableNodes, rootSelectorOrNode, module);
    } else {
      throw new Error('Module should extend BaseModule to use "string" based component selector');
    }
  }

  async getModuleFactory(
    moduleLoaderFunction: () => Promise<NgModuleFactory<any>>
  ) {
    const ngModuleOrNgModuleFactory = await moduleLoaderFunction();
    let moduleFactory;
    if (ngModuleOrNgModuleFactory instanceof NgModuleFactory) {
      // AOT
      moduleFactory = ngModuleOrNgModuleFactory;
    } else {
      // JIT
      moduleFactory = this.injector
        .get(Compiler)
        .compileModuleAsync(ngModuleOrNgModuleFactory);
    }
    return moduleFactory;
  }
}