import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { throwIfEmpty } from 'rxjs/operators';

@Component({
  selector: 'app-drag1',
  templateUrl: './drag1.component.html',
  styleUrls: ['./drag1.component.less']
})
export class Drag1Component implements OnInit {

  _data=""
  @Input("data") set data(v){
    this._data = v
    this.timeEvent1.emit(v)
  }
  get data(){
    return this._data
  }
  @Output() timeEvent = new EventEmitter<string>()
  @Output() timeEvent1 = new EventEmitter<string>()
  @Input() componentId:string =''
  constructor(
  ) {
  }

  ngOnInit(): void {
    setTimeout(()=>this.timeEvent.emit('213'),3000)
    console.log('drag1创建了')
  }

}
