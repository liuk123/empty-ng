import { ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo2',
  templateUrl: './demo2.component.html',
  styleUrls: ['./demo2.component.less']
})
export class Demo2Component implements OnInit, OnDestroy {

  @Input() data = 222

  constructor() { }

  ngOnInit(): void {
    
  }
  ngOnDestroy(){
    
  }

}
