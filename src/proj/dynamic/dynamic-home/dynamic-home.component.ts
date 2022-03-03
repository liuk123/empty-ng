import { Component, ComponentRef, OnDestroy, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { DragItem } from '../model/drag.model';
import { DynamicComponentService } from '../service/dynamic-component.service';
import { componentLib, viewdata } from '../service/data';

@Component({
  selector: 'app-dynamic-home',
  templateUrl: './dynamic-home.component.html',
  styleUrls: ['./dynamic-home.component.less'],
})
export class DynamicHomeComponent implements OnInit, OnDestroy {

  @ViewChild('viewContainer', { read: ViewContainerRef, static: true })
  viewContainer: ViewContainerRef;

  compTreeData: DragItem[]
  // compCommonData: DragItem[]
  components:ComponentRef<unknown>[] = []
  constructor(private dynamicSrv: DynamicComponentService) {
    this.compTreeData = viewdata
    // this.compCommonData = componentLib
  }

  ngOnInit(): void {
    this.addComponent(this.viewContainer, [this.compTreeData])
  }

  addComponent(viewContainerRef:ViewContainerRef, data: DragItem[][]){
    this.dynamicSrv.createComponents(data).then(a => {
      for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < a[i].length; j++) {
          this.components.push(a[i][j])
          viewContainerRef.insert(a[i][j].hostView)
        }
      }
    })
  }
  ngOnDestroy() {
    this.components.forEach(v=>v.destroy())
    this.components = null
  }
}
