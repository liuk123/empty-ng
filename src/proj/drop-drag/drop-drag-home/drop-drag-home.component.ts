import { AfterViewInit, Component, ComponentFactoryResolver, ComponentRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ElDirective } from '../directive/el.directive';
import { ComponentMapModel, DragItem, ViewItem } from '../model/drag.model';
import { ViewService } from '../service/views.service';
import { v4 as uuidv4 } from 'uuid';
import { viewdata } from 'src/assets/data/views';

@Component({
  selector: 'app-drop-drag-home',
  templateUrl: './drop-drag-home.component.html',
  styleUrls: ['./drop-drag-home.component.less']
})
export class DropDragHomeComponent implements OnInit, AfterViewInit {
  @ViewChild(ElDirective) ele!: ElDirective
  @ViewChildren(ElDirective) els!: QueryList<ElDirective>
  views: ViewItem[]
  trackByViews(index: number, item: ViewItem): string { return item.id; }
  trackByDrags(index: number, item: DragItem): string { return item.id; }
  constructor(
    private srv: ViewService,
  ) {
    // console.log(uuidv4())
    // console.log(uuidv4())
    // console.log(uuidv4())
  }

  ngOnInit(): void {
    console.log(this.views)
    // this.srv.getViewJson().subscribe(v => {
    //   this.views = v
    // })
  }
  ngAfterViewInit() {
    this.els.changes.subscribe((value) =>
      value.forEach((el, index) => this.srv.initViews(el))
    )
const me = this
    setTimeout(function(){me.views = viewdata},1000)
  }

  updata(){
    this.srv.setDragItemInputs('ee5eb883-90d6-4119-a00e-3930d0ad899c',{data:456});
  }
  getSomeData(){
    console.log(this.srv.getDragItemOutputs('ee5eb883-90d6-4119-a00e-3930d0ad899c'))
  }

  addComponent(data: ComponentMapModel) {

    this.srv.loadComponent({
      id: uuidv4(),
      parentId: "18412da9-78f0-4924-8be1-dc1c466d407a",
      component: data.selector,
      label: data.label,
      inputs: {
        "data":123
      },
      outputs: {
        "timeEvent":"",
      },
      events:{
        "timeEvent1":function(v){
          console.log(v)
          console.log(this)
        }
      },
      icon: "",
      styles: {
        left: 0,
        top: 0,
        width: 100,
        height: 120
      }
    }, this.ele.viewContainerRef)
  }
}
