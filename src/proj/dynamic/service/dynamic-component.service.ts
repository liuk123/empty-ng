import { Compiler, ComponentFactory, ComponentRef, Injectable, Injector, NgModuleFactory } from "@angular/core";
import { DragBaseModule } from "../model/drag-base.module";
import { DragItem, ViewItem } from "../model/drag.model";

@Injectable()
export class DynamicComponentService {
  constructor(private injector: Injector){}

  // 存放画布数据
  viewMap = new Map<string, ViewItem>()
  // 拖拽元素数据
  dragMap = new Map()
  

  async createComponents(data: DragItem[][], rootSelectorOrNode = null) {
    let temArr = new Array(data.length).fill(new Array())
    if (Array.isArray(data)) {
      for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data[i].length; j++) {
          await this.createComponents(data[i][j].children, rootSelectorOrNode).then(a => {
            return this.getComponentBySelector(
              data[i][j].selector,
              data[i][j].moduleLoaderFunction,
              a.map(b => b.map(c => c.location.nativeElement)),
              rootSelectorOrNode
            )
          }).then(a => {
            temArr[i].push(a)
          })
        }
      }
    }
    return Promise.all(temArr)
  }

  getComponentBySelector(
    componentSelector: string,
    moduleLoaderFunction: () => Promise<any>,
    projectableNodes:[][] = [],
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
      moduleFactory = await this.injector
        .get(Compiler)
        .compileModuleAsync(ngModuleOrNgModuleFactory);
    }
    return moduleFactory;
  }
}