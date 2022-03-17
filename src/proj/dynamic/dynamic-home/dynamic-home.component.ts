import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { JsUtilService } from 'src/app/shared/utils/js-util';
import { DragItem } from '../model/drag.model';
import { compLibData, viewdata } from '../service/data';
import { ViewService } from '../service/view.service';

@Component({
  selector: 'app-dynamic-home',
  templateUrl: './dynamic-home.component.html',
  styleUrls: ['./dynamic-home.component.less'],
})
export class DynamicHomeComponent implements OnInit, OnDestroy {

  @ViewChild('viewContainer', { static: true })
  viewContainer: ElementRef;

  compTreeData: DragItem[]
  constructor(private viewSrv: ViewService, private jsUtil:JsUtilService) {
    this.compTreeData = this.jsUtil.clone(viewdata,(item)=>{
      let tem = compLibData.find(v=>v.selector == item.selector)
      if(tem){
        item.moduleLoaderFunction = tem.moduleLoaderFunction
      }
      return item
    })
  }

  ngOnInit(): void {
    this.viewSrv.initDraggableComp(this.viewContainer, [this.compTreeData])
  }
  ngOnDestroy() {
    this.viewSrv.clearViews()
  }
}