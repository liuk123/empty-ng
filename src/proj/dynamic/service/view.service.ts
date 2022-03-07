import { ComponentRef, ElementRef, Injectable } from "@angular/core";
import { DragItem } from "../model/drag.model";
import { DynamicComponentService } from "./dynamic-component.service";

@Injectable()
export class ViewService {
  constructor(private dynamicSrv: DynamicComponentService){}

  // 拖拽元素数据
  dragMap = new Map()
  // 组件
  components:ComponentRef<unknown>[] = []

  initComponent(viewContainer:ElementRef, data: DragItem[][]){
    this.dynamicSrv.createComponents(data).then(a=>{
      for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < a[i].length; j++) {
          this.components.push(a[i][j])
          viewContainer.nativeElement.appendChild(a[i][j].location.nativeElement)
        }
      }
    })
  }
  clearViews(){
    this.components.forEach(v=>v.destroy())
    this.components = []
  }
  
}