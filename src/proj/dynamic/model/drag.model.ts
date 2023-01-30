export class DragItem{
  constructor(
    public id?:string,
    public parentId?:string,
    // 组件selector
    public selector?: string,
    // 组件标题
    public title?: string,
    // 组件新建之后的描述，用于定位组件
    public desc?: string,
    // 组件输入
    public inputs?: any,
    // 组件输出
    public outputs?: any,
    // 事件绑定
    public events?: any,
    // 传入固定的参数 和inputs类似
    public params?:any,
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
    // 组件选中状态，true 选中 false未选中
    public status?: boolean,
    // 旋转角度
    public rotate?: number,
    public zIndex?: number
  ){
    if(!left) left=0
    if(!top) top=0
  }
}

// export interface DragBoxData{
//   selectedId: string,
//   ids: string[],
//   entities: {[propName:string]:DragItem}
// }
// export class ComponentMapModel{
//   constructor(
//     public selector:string,
//     public title:string,
//     public componentRef:any,
//   ){}
// }
