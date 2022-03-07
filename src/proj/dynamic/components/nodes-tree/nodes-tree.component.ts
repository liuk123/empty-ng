import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-nodes-tree',
  templateUrl: './nodes-tree.component.html',
  styleUrls: ['./nodes-tree.component.less']
})
export class NodesTreeComponent implements OnInit {

  @Output() ckEvent = new EventEmitter()
  @Input() data: any[]=[]
  @Input() children = null
  constructor() { }

  ngOnInit(): void {
  }
  openToggle(item){
    item.selected = !item.selected
  }
  menuClick(data){
    this.ckEvent.emit(data)
  }
}
