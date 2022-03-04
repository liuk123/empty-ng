import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { DragItem } from '../model/drag.model';
import { compLibData, viewdata } from '../service/data';
import { ViewService } from '../service/view.service';

@Component({
  selector: 'app-dynamic-edit',
  templateUrl: './dynamic-edit.component.html',
  styleUrls: ['./dynamic-edit.component.less']
})
export class DynamicEditComponent implements OnInit, OnDestroy {

  @ViewChild('viewContainer', { static: true })
  viewContainer: ElementRef;

  // 组件树 需要渲染的
  compTreeData: DragItem[]
  // 公共组件列表
  compLibData: DragItem[]

  selectedCompTreeData : DragItem[]

  trackByViews(index: number, item: DragItem): string { return item.id }
  constructor(private viewSrv: ViewService) {
    this.compLibData = compLibData
    this.selectedCompTreeData = this.compTreeData = viewdata
  }

  ngOnInit(): void {
    this.viewSrv.initComponent(this.viewContainer, [this.selectedCompTreeData])
  }

  addComponent(data){
    this.viewSrv.initComponent(this.viewContainer, [[data]])
  }
  clearViews(){
    this.viewSrv.clearViews()
  }
  exportViews(){
    console.log(this.compTreeData)
  }
  
  ngOnDestroy() {
    this.clearViews()
  }
  
}
