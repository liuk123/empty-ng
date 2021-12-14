import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export interface DragData{
  data:any;
}

@Injectable({
  providedIn: 'root'
})
export class DragDropService{

  private refresh = new Subject()
  refreshEvent = this.refresh.asObservable()

  private dragData = null
  private dragList = null

  setDragData(val){
    this.dragData = val
  }
  setDragList(val){
    this.dragList = val
  }

  drop(dropIndex, data){
    // 添加数据
    data.splice(dropIndex, 0, this.dragData)
    if(this.dragData){
      // 删除数据
      const dragIndex = this.dragList.findIndex(v => v.id == this.dragData.id)
      this.dragList.splice(dragIndex, 1)
    }
    // 刷新
    setTimeout(v=>this.refresh.next(), 500)
  }
}