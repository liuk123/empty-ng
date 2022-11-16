import { ApplicationRef, ɵNG_COMP_DEF, ComponentRef, Injectable, Injector, ɵRender3ComponentFactory, ɵRender3NgModuleRef, ElementRef } from "@angular/core";
import { DragBaseModule } from "../model/drag-base.module";
import { DragItem } from "../model/drag.model";
import { DataService } from "./data.service";
// 用于和组件绑定事件，调取接口
let dataService = new DataService()

const dragItem: DragItem = {
  "selector": "app-drag",
  "moduleLoaderFunction": () => import("../dynamic.module").then(m => m.DynamicModule),
}
@Injectable()
export class DynamicComponentService {

  // 拖拽组件加载
  dragItem = dragItem
  // // 动态创建的所有组件
  // compRefMap = new Map<string, ComponentRef<unknown>>()
  // // 动态创建的所有drag组件
  // dragCompRefMap = new Map<string, ComponentRef<unknown>>()
  // 最外层的组件
  topComponents = []

  constructor(private injector: Injector, private appRef: ApplicationRef) { }

  /**
   * 获取组件
   * @param id 
   * @returns 
   */
  // getCompRef(id) {
  //   return this.compRefMap.get(id)
  // }
  /**
   * 获取所有drag组件
   * @param id 
   * @returns 
   */
  // getDragCompRef(id) {
  //   return this.dragCompRefMap.get(id)
  // }
  // delCompRef(id){
  //   this.compRefMap.delete(id)
  //   this.dragCompRefMap.delete(id)
  // }
  // clearCompRef(){
  //   this.compRefMap.clear()
  //   this.dragCompRefMap.clear()
  // }
  /**
   * 初始化组件，把组建插入文档中
   * @param elementRef 
   * @param data 
   */
  async initComp(elementRef: ElementRef, data: DragItem[][]) {
    let a = await this.createDraggableComp(data)
    let flag = document.createDocumentFragment()
    for (let i = 0; i < a.length; i++) {
      for (let j = 0; j < a[i].length; j++) {
        this.topComponents.push(a[i][j])
        flag.appendChild(a[i][j].location.nativeElement)
      }
    }
    elementRef.nativeElement.appendChild(flag)
  }

  /**
   * 清空组件
   */
  clearComp() {
    this.topComponents.forEach(v => v.destroy())
    this.topComponents = []
  }

  /**
   * 递归创建组件，并绑定input、output
   * @param data 
   * @param rootSelectorOrNode 
   * @returns 
   */
  private async createDraggableComp(data: DragItem[][], rootSelectorOrNode: string | any = null): Promise<ComponentRef<unknown>[][]> {
    let temArr = new Array(data.length)
    if (Array.isArray(data)&&data.length>0) {
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
          drag.onDestroy(() => { p.destroy() })
          p.onDestroy(() => {
            for (let i = 0; i < a.length; i++) {
              if(a[i]){
                for (let j = 0; j < a[i].length; j++) {
                  a[i][j].destroy()
                }
              }
            }
          })
          this.setComponentInputs(p, itemData)
          this.setDragInputs(drag, itemData)
          if (temArr[i]) {
            temArr[i].push(drag)
          } else {
            temArr[i] = [drag]
          }
          this.appRef.attachView(drag.hostView)
          this.appRef.attachView(p.hostView)
        }
      }
    }
    return temArr
  }

  /**
   * 绑定输入属性
   * @param componentRef 
   * @param data 
   */
  private setComponentInputs(componentRef: ComponentRef<unknown>, data: DragItem) {
    if (data.inputs) {
      Object.keys(data.inputs).forEach(key => {
        if (componentRef.instance.hasOwnProperty(key)) {
          componentRef.setInput(key, data.inputs[key])
        }
      })
    }
    if (data.outputs) {
      Object.keys(data.outputs).forEach(key => {
        if (componentRef.instance.hasOwnProperty(key)) {
          componentRef.instance[key].subscribe(v => {
            data.outputs[key] = v
          })
        }
      })
    }
    if (data.events) {
      Object.keys(data.events).forEach(key => {
        if (componentRef.instance.hasOwnProperty(key)) {
          componentRef.instance[key].subscribe(v => {
            data.events[key].call(data, v, dataService)
          })
        }
      })
    }
  }
  /**
   * 绑定输出属性
   * @param componentRef 
   * @param data 
   */
  private setDragInputs(componentRef: ComponentRef<unknown>, data: DragItem) {
    // this.dragCompRefMap.set(data.id, componentRef)
    if (data.styles) {
      componentRef.setInput('dragStyles', data.styles)
      componentRef.setInput('id', data.id)
    }
  }

  /**
   * 加载组件
   * @param componentSelector 
   * @param moduleLoaderFunction 
   * @param projectableNodes 
   * @param rootSelectorOrNode 
   * @returns 
   */
  private async getComponentBySelector(
    componentSelector: string,
    moduleLoaderFunction: () => Promise<any>,
    projectableNodes: any[][] = [],
    rootSelectorOrNode: string | any = null
  ): Promise<ComponentRef<unknown>> {
    const ngModule = await moduleLoaderFunction()
    const moduleFactory = new ɵRender3NgModuleRef(ngModule, this.injector)
    if (moduleFactory.instance instanceof DragBaseModule) {
      const component = moduleFactory.instance.getComponent(componentSelector);
      const compFactory = new ɵRender3ComponentFactory(component[ɵNG_COMP_DEF])
      return compFactory.create(moduleFactory.injector, projectableNodes, rootSelectorOrNode, moduleFactory)
    } else {
      throw new Error('Module should extend BaseModule to use "string" based component selector');
    }
  }
}