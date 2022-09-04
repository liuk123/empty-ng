import { Component, HostListener, Input } from '@angular/core';
import { MoveService } from '../service/move.service';
import { DragItemStyle } from './drag.model';

@Component({
  selector: 'app-drag',
  template: `
    <div
      class="drag-box" 
      [style.height.px]="dragStyles?.height"
      [style.width.px]="dragStyles?.width"
      [style.left.px]="dragStyles?.left"
      [style.top.px]="dragStyles?.top">
      <!-- 八个点 -->
      <div class="shape-point" *ngFor="let p of pointStyle"
        [style.display]="dragStyles.status?'block':'none'"
        [ngStyle]="p.style"
        (mousedown)="pointDown($event,p.name)"
        ></div>
      <ng-content></ng-content>
    </div>
  `,
  styles: [`
    .drag-box{
      background-color: #ddd;
      position:absolute;
      top:0;
      left:0;
    }
    .shape-point{
      width:10px;
      height:10px;
      border:1px solid #666;
      border-radius: 50%;
      position: absolute;
      z-index: 11;
      background-color: #fff;
    }
  `]
})
export class DragComponent{

  @Input() dragStyles: DragItemStyle = null
  @Input() id=null

  constructor() {}

  pointDown(e,p){
    MoveService.emitPointerDown({e,p})
  }
  @HostListener("mousedown", ["$event"]) 
  mousedown(e) {
    if(MoveService.curComp.id == this.id){
      MoveService.emitCompDown(e)
    }
  }

  // 八个点
  pointStyle = [{
    name: 't',
    style: {
      left: '50%',
      top: '-5px',
      marginLeft: '-5px'
    }
  }, {
    name: 'r',
    style: {
      right: '-5px',
      top: '50%',
      marginTop: '-5px'
    }
  }, {
    name: 'b',
    style: {
      left: '50%',
      bottom: '-5px',
      marginLeft: '-5px'
    }
  }, {
    name: 'l',
    style: {
      left: '-5px',
      top: '50%',
      marginTop: '-5px'
    }
  }, {
    name: 'lt',
    style: {
      left: '-5px',
      top: '-5px',
    }
  }, {
    name: 'rt',
    style: {
      right: '-5px',
      top: '-5px',
    }
  }, {
    name: 'lb',
    style: {
      left: '-5px',
      bottom: '-5px',
    }
  }, {
    name: 'rb',
    style: {
      right: '-5px',
      bottom: '-5px',
    }
  }]
}
