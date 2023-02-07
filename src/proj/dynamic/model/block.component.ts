import { Component, HostBinding, HostListener, Input } from '@angular/core';
import { MoveService } from '../service/move.service';
import { DragItemStyle } from './drag.model';

@Component({
  selector: 'app-block',
  template: `
    <!-- 八个点 -->
    <div class="shape-point" *ngFor="let p of pointStyle"
      [style.display]="dragStyles.status?'block':'none'"
      [ngStyle]="p.style"
      (mousedown)="pointDown($event,p.name)"
      ></div>
    <ng-content></ng-content>
  `,
  styles: [`
    :host{
      position: relative;
      border-width: 1px;
      border-style: solid;
      display: block;
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
export class BlockComponent{

  @Input() dragStyles: DragItemStyle = null
  @Input() id=null

  @HostBinding('style.height.%') get height(){
    return this.dragStyles.height
  }
  @HostBinding('style.width.%') get width(){
    return this.dragStyles.width
  }
  @HostBinding('style.borderColor') get borderColor(){
    return MoveService.curComp?.id == this.id?'#ddd':'transparent'
  }

  constructor() {}

  pointDown(e,p){
    // if(MoveService.curComp.id == this.id && MoveService.curComp?.styles?.status){
      MoveService.emitPointerDown({e,p})
    // }
  }
  @HostListener("mousedown", ["$event"]) 
  mousedown(e) {
    if(MoveService.curComp?.id == this.id && MoveService.curComp?.styles?.status){
      MoveService.emitCompDown(e)
    }
  }

  // 八个点
  pointStyle = [
    {
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
    name: 'rb',
    style: {
      right: '-5px',
      bottom: '-5px',
    }
  }]
}
