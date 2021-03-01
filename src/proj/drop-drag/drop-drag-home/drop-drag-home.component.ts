import { AfterViewInit, Component, ComponentFactoryResolver, OnInit, QueryList, ViewChild, ViewChildren, ViewContainerRef } from '@angular/core';
import { ElDirective } from '../directive/el.directive';
import { DragItem } from '../model/drag.model';
import { ViewService } from '../service/views.service';
import { viewMap } from '../views/view-config';

@Component({
  selector: 'app-drop-drag-home',
  templateUrl: './drop-drag-home.component.html',
  styleUrls: ['./drop-drag-home.component.less']
})
export class DropDragHomeComponent implements OnInit, AfterViewInit {
  @ViewChild(ElDirective) ele!: ElDirective
  views: DragItem[]
  viewMap = viewMap
  constructor(
    private srv: ViewService,
    private componentFactoryResolver: ComponentFactoryResolver
  ) { }

  ngOnInit(): void {
    this.srv.getViewJson().subscribe(v => {
      this.views = v
      this.views.forEach(view=>this.loadComponent(view,this.ele.viewContainerRef))
    })
  }

  loadComponent(view:DragItem,vf:ViewContainerRef){
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.viewMap.get(view.component));
      const componentRef = vf.createComponent(componentFactory);
      // if(view.inputParams){
      //   view.inputParams.forEach(item=>{
      //     componentRef.instance[item.key] = item.to;
      //   })
      // }
      // if(view.outputParams){
      //   view.outputParams.forEach(item=>{
      //     componentRef.instance[item.key] = item.to;
      //   })
      // }
  }

  addComponent(ev) {
    console.log(this.ele.viewContainerRef.get(1))
    // this.loadComponent(this.viewMap.get("app-drag2"), this.ele.viewContainerRef)
  }

  ngAfterViewInit() {
    // this.els.changes.pipe(
    //   map(v=>from(v.toArray())),
    //   mergeMap(v=>v)
    // ).subscribe((v:any)=>{
    //   const viewContainerRef = v.viewContainerRef
    //   if(viewContainerRef.length==0){
    //     const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.viewMap.get(v.elHost.component));
    //     viewContainerRef.clear();
    //     const componentRef = viewContainerRef.createComponent(componentFactory);
    //     // componentRef.instance.data = adItem.data;
    //     console.log(111)
    //   }
    // })
  }
}
