export class DragItem{
  constructor(
    public component: string,
    public label: string,
    public inputParams: any,
    public outputParams: any,
    public icon: string,
    public styles?: DragItemStyle
  ){
    this.icon='fire'
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