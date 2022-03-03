import { Component, ComponentRef, OnDestroy, OnInit, QueryList, ViewChildren, ViewContainerRef } from '@angular/core';
import { DragItem } from '../model/drag.model';
import { DynamicComponentService } from '../service/dynamic-component.service';
import { componentLib, viewdata } from '../service/data';
import { ElDirective } from '../directive/el.directive';

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
  constructor(private dynamicSrv: DynamicComponentService) {
    this.compTreeData = viewdata
    this.compCommonData = componentLib
  }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    this.els.forEach(v => {
       this.addComponent(v.viewContainerRef, [[v.elHost]])
       this.viewRefs.push(v.viewContainerRef)
    })
  }

  addComponent(viewContainerRef:ViewContainerRef, data: DragItem[][]){
    this.dynamicSrv.createComponents(data).then(a=>{
      for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < a[i].length; j++) {
          this.components.push(a[i][j])
          viewContainerRef.insert(a[i][j].hostView)
        }
      }
    })
  }
  clearViews(){
    this.viewRefs.forEach(v=>v.clear())
  }
  ngOnDestroy() {
    // this.components.forEach(v=>v.destroy())
    // this.components = null
  }
  
}
