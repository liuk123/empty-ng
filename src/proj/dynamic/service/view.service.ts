import { ComponentRef, ElementRef, Injectable } from "@angular/core";
import { JsUtilService } from "src/app/shared/utils/js-util";
import { DragItem } from "../model/drag.model";
import { DynamicComponentService } from "./dynamic-component.service";

@Injectable()
export class ViewService {
  constructor(private dynamicSrv: DynamicComponentService, private jsUtil:JsUtilService){}

  // 最外层需要销毁的组件
  components:ComponentRef<unknown>[] = []

  initDraggableComp(viewContainer:ElementRef, data: DragItem[][]){
    this.dynamicSrv.createDraggableComp(data).then(a=>{
      let flag = document.createDocumentFragment()
      for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < a[i].length; j++) {
          this.components.push(a[i][j])
          flag.appendChild(a[i][j].location.nativeElement)
        }
      }
      viewContainer.nativeElement.appendChild(flag)
    })
  }
  clearViews(){
    this.components.forEach(v=>v.destroy())
    this.components = []
  }
  setCompData(id:string,inputsData:Object){
    let ref = this.dynamicSrv.getCompRef(id)
    Object.keys(inputsData).forEach(key => {
      ref.instance[key] = inputsData[key]
    })
  }
  setActiveComp(){
    
  }
}