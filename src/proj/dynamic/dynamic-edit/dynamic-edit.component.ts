import { Component, ComponentRef, OnDestroy, OnInit, QueryList, ViewChildren, ViewContainerRef } from '@angular/core';
import { DragItem } from '../model/drag.model';
import { componentLib, viewdata } from '../service/data';
import { ElDirective } from '../directive/el.directive';
import { ViewService } from '../service/view.service';

@Component({
  selector: 'app-dynamic-edit',
  templateUrl: './dynamic-edit.component.html',
  styleUrls: ['./dynamic-edit.component.less']
})
export class DynamicEditComponent implements OnInit, OnDestroy {

  @ViewChildren(ElDirective) els!: QueryList<ElDirective>

  compTreeData: DragItem[]
  compCommonData: DragItem[]
  components:ComponentRef<unknown>[] = []
  viewRefs:ViewContainerRef[] = []
  trackByViews(index: number, item: DragItem): string { return item.id }
  constructor(private viewSrv: ViewService) {
    this.compTreeData = viewdata
    this.compCommonData = componentLib
  }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    this.els.forEach(v => {
       this.viewSrv.initComponent(v.viewContainerRef, [[v.elHost]])
       this.viewRefs.push(v.viewContainerRef)
    })
  }

  addComponent(viewContainerRef, data){
    this.viewSrv.initComponent(viewContainerRef, data)
  }
  clearViews(){
    this.viewSrv.clearViews()
  }
  
  ngOnDestroy() {
    this.clearViews()
  }
  
}
