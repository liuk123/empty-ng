import { Component, ComponentRef } from "@angular/core"

export class ViewItem{
  constructor(
    public id:string,
    public viewName:string,
    public children?: DragItem[]
  ){}
}
export class DragItem{
  constructor(
    public id:string,
    public parentId:string,
    public component: string,
    public label: string,
    public inputs: any,
    public outputs: any,
    public events?: any,
    public icon?: string,
    public styles?: DragItemStyle,
    public ref?:any
  ){
    if(!icon){
      this.icon='fire'
    }
    if(!styles){
      this.styles = new DragItemStyle(2,3)
    }
  }
}
export class DragItemStyle{
  constructor(
    public width:number,
    public height:number,
    public left?:number,
    public top?:number,
  ){
    if(!left) left=0
    if(!top) top=0
  }
}

export interface DragBoxData{
  selectedId: string,
  ids: string[],
  entities: {[propName:string]:DragItem}
}
export class ComponentMapModel{
  constructor(
    public selector:string,
    public label:string,
    public componentRef:any,
  ){}
}
