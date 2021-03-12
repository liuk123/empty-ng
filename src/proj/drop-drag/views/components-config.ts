import { Drag1Component } from "./drag1/drag1.component";
import { Drag2Component } from "./drag2/drag2.component";


export const ComponentMap = new Map<string, any>();
ComponentMap.set('app-drag1',{
  selector: 'app-drag1',
  label: '组件1',
  componentRef: Drag1Component,
})
ComponentMap.set('app-drag2',{
  selector: 'app-drag2',
  label: '组件2',
  componentRef: Drag2Component,
})

export const Components = Array.from(ComponentMap.values()).map(v=>v.componentRef)