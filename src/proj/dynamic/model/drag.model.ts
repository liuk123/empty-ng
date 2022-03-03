export class DragItem{
  constructor(
    public id:string,
    public parentId:string,
    public selector: string,
    public title: string,
    public inputs: any,
    public outputs: any,
    public events?: any,
    public icon?: string,
    public styles?: DragItemStyle,
    public children?: DragItem[][],
    public moduleLoaderFunction?: ()=>Promise<any>
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
    public title:string,
    public componentRef:any,
  ){}
}
