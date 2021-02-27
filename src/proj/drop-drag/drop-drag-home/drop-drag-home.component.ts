import { AfterViewInit, Component, ComponentFactoryResolver, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { from, Observable, of, zip } from 'rxjs';
import { ElDirective } from '../directive/el.directive';
import { DragItem } from '../model/drag.model';
import { ViewService } from '../service/views.service';
import { map, mergeMap } from 'rxjs/operators';
import { viewMap } from '../views/view-config';

@Component({
  selector: 'app-drop-drag-home',
  templateUrl: './drop-drag-home.component.html',
  styleUrls: ['./drop-drag-home.component.less']
})
export class DropDragHomeComponent implements OnInit, AfterViewInit {

  @ViewChildren(ElDirective) els!:QueryList<ElDirective>
  views$: Observable<DragItem[]>
  viewMap = viewMap
  constructor(
    private srv: ViewService,
    private componentFactoryResolver: ComponentFactoryResolver
  ) { }

  ngOnInit(): void {
    this.views$ = this.srv.getViewJson()
  }

  ngAfterViewInit() {

    this.els.changes.pipe(
      map(v=>from(v.toArray())),
      mergeMap(v=>v)
    ).subscribe((v:any)=>{
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.viewMap.get(v.elHost.component));
      const viewContainerRef = v.viewContainerRef
      viewContainerRef.clear();
      const componentRef = viewContainerRef.createComponent(componentFactory);
      // componentRef.instance.data = adItem.data;
    })
  }
}
