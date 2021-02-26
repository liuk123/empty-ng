import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DragItem } from '../model/drag.model';
import { ViewService } from '../service/views.service';

@Component({
  selector: 'app-drop-drag-home',
  templateUrl: './drop-drag-home.component.html',
  styleUrls: ['./drop-drag-home.component.less']
})
export class DropDragHomeComponent implements OnInit {

  views: DragItem[]
  constructor(
    private srv: ViewService
  ) { }

  ngOnInit(): void {
    this.srv.getViewJson().subscribe(v=>{
      this.views = v
    })
  }

}
