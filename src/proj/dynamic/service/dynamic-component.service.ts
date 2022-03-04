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
  constructor(private injector: Injector,private appRef: ApplicationRef){}

  async createComponents(data: DragItem[][], rootSelectorOrNode = null):Promise<ComponentRef<unknown>[][]> {
    let temArr = new Array(data.length).fill(new Array())
    if (Array.isArray(data)) {
      for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data[i].length; j++) {
          let itemData = data[i][j]
          let a = await this.createComponents(itemData.children, rootSelectorOrNode)
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
          this.appRef.attachView(drag.hostView)
          this.setComponentInputs(p, itemData)
          this.setDragInputs(drag, itemData)
          temArr[i].push(drag)
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

  getComponentBySelector(
    componentSelector: string,
    moduleLoaderFunction: () => Promise<any>,
    projectableNodes:any[][] = [],
    rootSelectorOrNode: string|any = null
  ): Promise<ComponentRef<unknown>> {
    return this.getModuleFactory(moduleLoaderFunction).then(moduleFactory => {
      const module = moduleFactory.create(this.injector);
      if (module.instance instanceof DragBaseModule) {
        const compFactory: ComponentFactory<any> = module.instance.getComponentFactory(componentSelector);
        return compFactory.create(module.injector, projectableNodes, rootSelectorOrNode, module);
      } else {
        throw new Error('Module should extend BaseModule to use "string" based component selector');
      }
    });
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