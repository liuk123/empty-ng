import { AfterViewInit, Component, ElementRef, HostListener, OnInit, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-demo-home',
  templateUrl: './demo-home.component.html',
  styleUrls: ['./demo-home.component.less']
})
export class DemoHomeComponent implements OnInit, AfterViewInit {

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
