import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ComponentMapModel, DragItem } from '../model/drag.model';
import { ViewService } from '../service/views.service';

@Component({
  selector: 'app-drop-drag-list',
  templateUrl: './drop-drag-list.component.html',
  styleUrls: ['./drop-drag-list.component.less']
})
export class DropDragListComponent implements OnInit {

  @Output() componentEvent = new EventEmitter<ComponentMapModel>()
  componentList: ComponentMapModel[]
  constructor(
    private srv:ViewService
  ) {}

  ngOnInit(): void {
    this.componentList = this.srv.getAllComponents()
  }
  componentListCk(item){
    this.componentEvent.emit(item)
  }

}
