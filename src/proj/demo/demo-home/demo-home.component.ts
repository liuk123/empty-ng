import { AfterViewInit, Component, ElementRef, HostListener, OnInit, QueryList, ViewChildren } from '@angular/core';
import { DraggableDirective } from 'src/app/shared/directive/drop-drag/draggable.directive';

@Component({
  selector: 'app-demo-home',
  templateUrl: './demo-home.component.html',
  styleUrls: ['./demo-home.component.less']
})
export class DemoHomeComponent implements OnInit, AfterViewInit {

  @ViewChildren(DraggableDirective) els!: QueryList<DraggableDirective>
  

  data = new Array(6)
  rectList = []
  constructor() {
  }

  ngOnInit(): void {
    
   
  }
  ngAfterViewInit() {
    // this.rectList = this.els.map(item=>{
    //   return item.el.nativeElement.getBoundingClientRect()
    // })
  }

}
