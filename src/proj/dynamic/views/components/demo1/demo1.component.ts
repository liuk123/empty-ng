import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-demo1',
  templateUrl: './demo1.component.html',
  styleUrls: ['./demo1.component.less']
})
export class Demo1Component implements OnInit, OnDestroy {

  @Input() data = 111

  @Output() eventEmit = new EventEmitter()
  @Output() timeEvent = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }

  eventE(){
    this.timeEvent.emit(333)
    this.eventEmit.emit(111)
  }
  ngOnDestroy(): void {

  }
}
