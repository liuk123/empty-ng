import { ElementRef, Injectable } from "@angular/core";
import { DragItem } from "../model/drag.model";
import { DynamicComponentService } from "./dynamic-component.service";

@Injectable()
export class ViewService {
  constructor(private dynamicSrv: DynamicComponentService){}

  /**
   * 初始化动态组件
   * @param elementRef 
   * @param data 
   */
  initDraggableComp(elementRef: ElementRef, data: DragItem[][]){
    this.dynamicSrv.initComp(elementRef, data)
  }

  /**
   * 清空组件
   */
  clearViews(){
    this.dynamicSrv.clearComp()
  }

  /**
   * 传入数值
   * @param id 
   * @param inputsData 
   */
  setCompData(id:string,inputsData:Object){
    let ref = this.dynamicSrv.getCompRef(id)
    Object.keys(inputsData).forEach(key => {
      ref.instance[key] = inputsData[key]
    })
  }
  
  setActiveComp(){
    
  }
}