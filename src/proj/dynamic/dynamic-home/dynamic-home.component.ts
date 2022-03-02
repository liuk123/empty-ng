import { AfterViewInit, Component, ComponentRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { ElDirective } from '../directive/el.directive';
import { DragItem, ViewItem } from '../model/drag.model';
import { DynamicComponentService } from '../service/dynamic-component.service';
import { viewdata } from '../service/data';

@Component({
  selector: 'app-dynamic-home',
  templateUrl: './dynamic-home.component.html',
  styleUrls: ['./dynamic-home.component.less']
})
export class DynamicHomeComponent implements OnInit, AfterViewInit {

  @ViewChildren(ElDirective) els!: QueryList<ElDirective>

  views: ViewItem[]
  trackByViews(index: number, item: ViewItem): string { return item.id; }
  constructor(private dynamicSrv: DynamicComponentService) {
    this.views = viewdata
    
  }

  ngOnInit(): void {
  }
  ngAfterViewInit(){

    this.els.forEach(v=>{
      this.createComponents(v.elHost.children).then(a=>{
        a.forEach(b=>{
          v.viewContainerRef.insert(b.hostView)
        })
      })
    })
  }
  async createComponents(data: DragItem[], rootSelectorOrNode = null){
    let temArr = []
    if(Array.isArray(data)){
      for(let i=0;i<data.length;i++){
        let tem = this.createComponents(data[i].children, rootSelectorOrNode)
        if(tem){
          let component = await this.addDynamicComponent(data[i], tem, rootSelectorOrNode)
          temArr.push(component)
        }
      }
    }
    return Promise.all(temArr)
  }

  addDynamicComponent(dragItem: DragItem, projectableNodesPromise, rootSelectorOrNode){
    return projectableNodesPromise.then(v=>{
      return this.dynamicSrv.getComponentBySelector(
        dragItem.selector,
        dragItem.moduleLoaderFunction,
        [v.map(a=>a.location.nativeElement)],
        rootSelectorOrNode)
    })
  }
}
