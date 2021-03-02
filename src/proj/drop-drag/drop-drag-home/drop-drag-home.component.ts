import { Component, ComponentFactoryResolver, ComponentRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ElDirective } from '../directive/el.directive';
import { DragItem } from '../model/drag.model';
import { ViewService } from '../service/views.service';

@Component({
  selector: 'app-drop-drag-home',
  templateUrl: './drop-drag-home.component.html',
  styleUrls: ['./drop-drag-home.component.less']
})
export class DropDragHomeComponent implements OnInit {
  @ViewChild(ElDirective) ele!: ElDirective
  @ViewChildren(ElDirective) els!:QueryList<ElDirective>
  views: DragItem[]
  crefMap=new Map<string, ComponentRef<Component>>();
  trackByViews(index: number, item: DragItem): string { return item.component; }
  constructor(
    private srv: ViewService,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {
  }

  ngOnInit(): void {
    this.srv.getViewJson().subscribe(v => {
      this.views = v
      this.views.forEach(view=>this.loadComponent(view,this.srv.viewMap.get(view.component)))
    })
  }

  loadComponent(view:DragItem,component){
    if(!this.crefMap.get(view.id)){
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
      const componentRef = this.ele.viewContainerRef.createComponent<Component>(componentFactory);
      if(componentFactory.inputs){
        componentFactory.inputs.forEach(v=>componentRef.instance[v.templateName]=view.inputs)
      }
      if(componentFactory.outputs){
        componentFactory.outputs.forEach(v=>componentRef.instance[v.templateName]=view.outputs)
      }
      this.crefMap.set(view.id,componentRef)
    }else{
      // this.crefMap.get(view.id).changeDetectorRef.markForCheck()
    }
  }

  addComponent(ev) {
    console.log(this.els.length)
    this.loadComponent({
      "id":"123321",
      "component": "app-drag2",
      "label": "组件2",
      "inputs": "",
      "outputs": "",
      "icon": "",
    },this.srv.viewMap.get('app-drag2'))
  }
}
