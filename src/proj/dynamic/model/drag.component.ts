import { Component, HostBinding, HostListener, Input } from '@angular/core';
import { MoveService } from '../service/move.service';
import { DragItemStyle } from './drag.model';
// [style]="{
//   height: dragStyles?.height + 'px',
//   width: dragStyles?.width +'px',
//   right: dragStyles?.left + 'px',
//   bottom: dragStyles?.top + 'px',
//   left: dragStyles?.left + 'px',
//   top: dragStyles?.top + 'px',
//   zIndex: isSelected?99: dragStyles?.zIndex,
//   borderColor: isSelected?'#ddd':'transparent'
// }"
@Component({
  selector: 'app-drag',
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
      position: absolute;
      border-width: 1px;
      border-style: solid;
      display: block;
    }
    /* .drag-box{
      position:absolute;
      border-width: 1px;
      border-style: solid;
    } */
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

  get isSelected(){
    return MoveService.curComp?.id == this.id
  }
  constructor() {}
  
  @HostBinding('style') get styles() {
    return {
      height: this.dragStyles?.height + 'px',
      width: this.dragStyles?.width +'px',
      [this.dragStyles?.alignX]: this.dragStyles?.left + 'px',
      [this.dragStyles?.alignY]: this.dragStyles?.top + 'px',
      zIndex: this.isSelected?99: this.dragStyles?.zIndex,
      borderColor: this.isSelected?'#ddd':'transparent'
    }
  }
  @HostBinding('id') get Id(){
    return this.id
  }

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
