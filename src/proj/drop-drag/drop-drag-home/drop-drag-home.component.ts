import { AfterViewInit, Component, ComponentFactoryResolver, ComponentRef, OnInit, QueryList, ViewChild, ViewChildren, ViewContainerRef } from '@angular/core';
import { from, of } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
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
  @ViewChildren(ElDirective) els!:QueryList<ElDirective>
  views: DragItem[]
  viewMap = viewMap
  crefMap=new Map<string, ComponentRef<Component>>();
  trackByViews(index: number, item: DragItem): string { return item.component; }
  constructor(
    private srv: ViewService,
    private componentFactoryResolver: ComponentFactoryResolver
  ) { }

  ngOnInit(): void {
    this.srv.getViewJson().subscribe(v => {
      this.views = v
      this.views.forEach(view=>this.loadComponent(view,this.viewMap.get(view.component)))
    })
  }

  loadComponent(view:DragItem,component){
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
      const componentRef = this.ele.viewContainerRef.createComponent<Component>(componentFactory);
      this.crefMap.set(componentFactory.selector,componentRef)
      if(componentFactory.inputs){
        componentFactory.inputs.forEach(v=>componentRef.instance[v.templateName]=view.inputs)
      }
      if(componentFactory.outputs){
        componentFactory.outputs.forEach(v=>componentRef.instance[v.templateName]=view.outputs)
      }
  }

  addComponent(ev) {
    console.log(this.els.length)
    // this.loadComponent({}, this.ele.viewContainerRef)
  }

  ngAfterViewInit() {
    // this.els.toArray().forEach
    // this.els.changes.pipe(
    //   map(v=>from(v.toArray())),
    //   mergeMap(v=>v)
    // ).subscribe((v:any)=>{
    //   // const viewContainerRef = v.viewContainerRef
    //   // if(viewContainerRef.length==0){
    //   //   const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.viewMap.get(v.elHost.component));
    //   //   viewContainerRef.clear();
    //   //   const componentRef = viewContainerRef.createComponent(componentFactory);
    //   //   // componentRef.instance.data = adItem.data;
    //     // console.log(v)
    //   // }
    // })
  }
}
