import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-demo1',
  templateUrl: './demo1.component.html',
  styleUrls: ['./demo1.component.less']
})
export class Demo1Component implements OnInit, OnDestroy {

  @Input() data = '组件中的数据data1'

  @Output() eventEmit = new EventEmitter()
  @Output() timeEvent = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.data = '定时更新的数据'
    }, 10000);
  }

  eventE(){
    this.timeEvent.emit('eventEmit发送的数据')
    this.eventEmit.emit('eventEmit发送的数据')
    this.data = '按钮触发'
  }
  ngOnDestroy(): void {

  }
}
