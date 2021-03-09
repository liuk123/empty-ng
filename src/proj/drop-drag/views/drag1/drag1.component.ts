import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-drag1',
  templateUrl: './drag1.component.html',
  styleUrls: ['./drag1.component.less']
})
export class Drag1Component implements OnInit {

  @Input("data1") data=""
  @Output() timeEvent = new EventEmitter<number>()
  constructor(
  ) {
  }

  ngOnInit(): void {
    setTimeout(()=>this.timeEvent.emit(213),3000)
    console.log('drag1创建了')
  }

}
