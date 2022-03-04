import { Component, ElementRef, OnDestroy, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { DragItem } from '../model/drag.model';
import { viewdata } from '../service/data';
import { ViewService } from '../service/view.service';

@Component({
  selector: 'app-dynamic-home',
  templateUrl: './dynamic-home.component.html',
  styleUrls: ['./dynamic-home.component.less'],
})
export class DynamicHomeComponent implements OnInit, OnDestroy {

  @ViewChild('viewContainer', { static: true })
  viewContainer: ElementRef;

  compTreeData: DragItem[]
  constructor(private viewSrv: ViewService) {
    this.compTreeData = viewdata
  }

  ngOnInit(): void {
    this.viewSrv.initComponent(this.viewContainer, [this.compTreeData])
  }
  ngOnDestroy() {
    this.viewSrv.clearViews()
  }
}
