export class DragItem{
  constructor(
    public id:string,
    public component: string,
    public label: string,
    public inputs: any,
    public outputs: any,
    public icon: string,
    public styles?: DragItemStyle
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
    public fontSize?:number,
    public color?:string,
  ){}
}