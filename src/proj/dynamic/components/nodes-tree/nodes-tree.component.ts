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
  @Input() menuDown=[
    {
      title: '复制',
      code: 'copy'
    },{
      title: '移动',
      code: 'move'
    },{
      title: '删除',
      code: 'delete'
    },
  ]
  contentIndex=1
  constructor() { }

  ngOnInit(): void {
  }
  openToggle(item){
    item.selected = !item.selected
  }
  menuClick(data){
    this.ckEvent.emit({data,i:0})
  }
  selContents(data, i:number){
    this.contentIndex = i
    this.ckEvent.emit({data,i:this.contentIndex})
  }
}
