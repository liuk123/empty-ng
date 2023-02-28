import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.less']
})
export class ButtonComponent implements OnInit {

  @Input() text=null

  @Output() btnEmit = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  btnEvent(){
    this.btnEmit.emit(null)
  }

}
