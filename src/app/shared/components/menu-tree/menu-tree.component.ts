import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MenuTree } from 'src/app/biz/model/common/menu.model';

@Component({
  selector: 'app-menu-tree',
  templateUrl: './menu-tree.component.html',
  styleUrls: ['./menu-tree.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuTreeComponent implements OnInit {

  @Output() ckEvent = new EventEmitter()
  @Input() data: MenuTree[]=[]
  constructor(private cf: ChangeDetectorRef) { }

  ngOnInit(): void {
  }
  openToggle(item){
    item.selected = !item.selected
    this.cf.markForCheck()
  }
  menuClick(item){
    this.ckEvent.emit(item)
  }

}
