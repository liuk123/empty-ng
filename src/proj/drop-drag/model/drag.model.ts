export class DragItem{
  constructor(
    public id:string,
    public component: string,
    public label: string,
    public inputs: any,
    public outputs: any,
    public icon: string,
    public styles?: DragItemStyle,
    public children?: DragItem[]
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

export class DropBoxData{
  constructor(
    public offsetX: number,
    public offsetY: number,
  ){}
}
export interface DragBoxData{
  selectedId: string,
  ids: string[],
  entities: {[propName:string]:DragItem}
}
export class ViewItem{
  constructor(
    public id:string,
    public viewName:string,
    public components: DragItem[]
  ){}
}