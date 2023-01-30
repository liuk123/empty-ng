import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { JsUtilService } from 'src/app/shared/utils/js-util';

@Component({
  selector: 'app-nodes-tree',
  templateUrl: './nodes-tree.component.html',
  styleUrls: ['./nodes-tree.component.less']
})
export class NodesTreeComponent implements OnInit {

  @Output() ckEvent = new EventEmitter()
  @Output() optCkEvent = new EventEmitter()
  _data = null
  @Input() set data(val){
    if(val.orignData){
      this.jsUtil.loopTree(val.dragData,(item)=>{
        if(item?.params?.ngcontents){
          if(!item._inputs){
            item._inputs={}
          }
          item._inputs.ngcontents = this.getPathData(val.orignData, item.params.ngcontents)
        }
        return item
      })
      this._data = val.dragData
    }
  }
  @Input() children = null
  @Input() menuDown=null
  @Input() isShowMoreMenu = false
  contentIndex=1
  constructor(private jsUtil: JsUtilService) { }

  ngOnInit(): void {
  }
  openToggle(item){
    item.selected = !item.selected
  }
  menuClick(data){
    this.ckEvent.emit({data,i:0})
  }
  selContents(data, i:number){
    this.contentIndex = i
    this.ckEvent.emit({data,i:this.contentIndex})
  }
  optClick(opt, data, pData){
    this.optCkEvent.emit({opt, compData:data, pCompData:pData})
  }
  /**
   * 根据路径获取对象中的值
   * @param data 
   * @param paths [user,name]
   * @param index 
   * @returns 
   */
  getPathData(data, paths, index=0){
    if(data==null){
      return null
    }
    if(paths.length-1>index){
      return this.getPathData(data[paths[index]], paths, ++index)
    }else {
      return data[paths[index]]
    }
  }
}
