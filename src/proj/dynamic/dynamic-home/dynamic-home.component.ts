import { AfterViewInit, Component, ComponentRef, OnDestroy, OnInit, QueryList, ViewChildren } from '@angular/core';
import { ElDirective } from '../directive/el.directive';
import { ViewItem } from '../model/drag.model';
import { DynamicComponentService } from '../service/dynamic-component.service';
import { viewdata } from '../service/data';

@Component({
  selector: 'app-dynamic-home',
  templateUrl: './dynamic-home.component.html',
  styleUrls: ['./dynamic-home.component.less'],
})
export class DynamicHomeComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChildren(ElDirective) els!: QueryList<ElDirective>

  views: ViewItem[]
  components:ComponentRef<unknown>[] = []
  trackByViews(index: number, item: ViewItem): string { return item.id }
  constructor(private dynamicSrv: DynamicComponentService) {
    this.views = viewdata
  }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    this.els.forEach(v => {
       this.initComponents(v)
    })
  }
  initComponents(el:ElDirective){
    this.dynamicSrv.createComponents(el.elHost.children).then(a => {
      for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < a[i].length; j++) {
          this.components.push(a[i][j])
          console.log(a[i][j])
          el.viewContainerRef.insert(a[i][j].hostView)
        }
      }
    })
  }
  ngOnDestroy() {
    // this.components.forEach(v=>v.destroy())
    // this.components = null
  }
}
