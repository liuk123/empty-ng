import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-menu-tree',
  templateUrl: './menu-tree.component.html',
  styleUrls: ['./menu-tree.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class MenuTreeComponent implements OnInit {

  @Output() ckEvent = new EventEmitter()
  @Input() data=[]
  constructor(private cf: ChangeDetectorRef) { }

  ngOnInit(): void {
  }
  openToggle(item){
    item.isSelected = !item.isSelected
    this.cf.markForCheck()
  }
  menuClick(item){
    this.ckEvent.emit(item)
  }

}
