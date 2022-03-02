import { Compiler, ComponentFactory, ComponentRef, Injectable, Injector, NgModuleFactory } from "@angular/core";
import { DragBaseModule } from "../model/drag-base.module";
import { ViewItem } from "../model/drag.model";

@Injectable()
export class DynamicComponentService {
  constructor(private injector: Injector){}

  // 存放画布数据
  viewMap = new Map<string, ViewItem>()
  // 拖拽元素数据
  dragMap = new Map()
  
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