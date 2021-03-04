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
    public fontSize?:number,
    public color?:string,
  ){
    if(!left) left=0
    if(!top) top=0
  }
}

export interface DropBoxData{
  [propName: string]:DropBoxItem
}
export class DropBoxItem{
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