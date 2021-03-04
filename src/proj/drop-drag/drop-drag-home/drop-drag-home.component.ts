import { Component, ComponentFactoryResolver, ComponentRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ElDirective } from '../directive/el.directive';
import { DragItem } from '../model/drag.model';
import { ViewService } from '../service/views.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-drop-drag-home',
  templateUrl: './drop-drag-home.component.html',
  styleUrls: ['./drop-drag-home.component.less']
})
export class DropDragHomeComponent implements OnInit {
  @ViewChild(ElDirective) ele!: ElDirective
  @ViewChildren(ElDirective) els!:QueryList<ElDirective>
  views: DragItem[]
  // trackByViews(index: number, item: DragItem): string { return item.component; }
  constructor(
    private srv: ViewService,
  ) {
    console.log(uuidv4())
    console.log(uuidv4())
    console.log(uuidv4())
  }

  ngOnInit(): void {
    this.srv.getViewJson().subscribe(v => {
      this.views = v
      // this.views.forEach(view=>this.srv.loadComponent(view, this.ele.viewContainerRef))
      Object.keys(this.views).forEach(key=>{
        this.views[key].components.forEach(v=>{
          this.srv.loadComponent(v, this.ele.viewContainerRef)
        })
      })
    })
  }

  addComponent(ev) {
    console.log(this.els.length)
    this.srv.loadComponent({
      "id":uuidv4(),
      "component": "app-drag1",
      "label": "组件1",
      "inputs": "",
      "outputs": "",
      "icon": "",
      "children": []
      }, this.ele.viewContainerRef)
  }
}
