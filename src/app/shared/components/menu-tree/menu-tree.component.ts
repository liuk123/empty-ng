import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MenuTree } from 'src/app/biz/model/common/menu.model';

@Component({
  selector: 'app-menu-tree',
  templateUrl: './menu-tree.component.html',
  styleUrls: ['./menu-tree.component.less'],
})
export class MenuTreeComponent implements OnInit {

  @Output() ckEvent = new EventEmitter()
  @Input() data: MenuTree[]|any[]=[]
  @Input() children = null
  @Input() isMenu = false;
  constructor() { }

  ngOnInit(): void {
  }
  openToggle(item){
    item.selected = !item.selected
  }
  menuClick(item){
    this.ckEvent.emit(item)
  }

}
