import { Component, HostListener, Input, OnInit } from '@angular/core';
import { fromEvent, Unsubscribable } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';
import { DragItem, DragItemStyle } from './drag.model';

@Component({
  selector: 'app-drag',
  template: `
    <div
      class="drag-box" 
      [style.height.px]="height"
      [style.width.px]="width"
      [style.left.px]="oLeft"
      [style.top.px]="oTop">
      <div class="shape-point" *ngFor="let p of pointStyle"
        [style]="p.style"
        (mousedown)="pointDown($event,p.name)"
        ></div>
      <ng-content></ng-content>
    </div>
  `,
  styles: [`
    .drag-box{
      width:100px;
      height:100px;
      background-color: #ddd;
      position:absolute;
      top:0;
      left:0;
    }
    .shape-point{
      width:20px;
      height:20px;
      border:2px solid #666;
      border-radius: 50%;
      position: absolute;
    }
  `]
})
export class DragComponent implements OnInit {

  private readonly DEFAULT_MOVE = 10
  private readonly DEFAULT_POINT_MOVE = 10

  @Input() active = true
  @Input() dragStyles: DragItemStyle
  width = 100
  height = 100
  oLeft = 0
  oTop = 0

  moveUnsubscribable: Unsubscribable
  upUnsubscribable: Unsubscribable
  moveEvent$
  upEvent$
  constructor() {}

  ngOnInit(): void {
    if(this.dragStyles){
      this.width = this.dragStyles.width
      this.height = this.dragStyles.height
      this.oLeft = this.dragStyles.left
      this.oTop = this.dragStyles.top
    }
    this.moveEvent$ = fromEvent(document, 'mousemove')
    this.upEvent$ = fromEvent(document, 'mouseup')
  }

  @HostListener('mousedown', ['$event'])
  mousedown(e) {
    e.stopPropagation()
    e.preventDefault()
    const left = this.oLeft
    const top = this.oTop
    this.moveUnsubscribable =this.moveEvent$.pipe(
      map((v:MouseEvent)=> ({
        x:Math.floor((v.clientX - e.clientX)/this.DEFAULT_MOVE)*this.DEFAULT_MOVE,
        y:Math.floor((v.clientY - e.clientY)/this.DEFAULT_MOVE)*this.DEFAULT_MOVE
      })),
      distinctUntilChanged((p:any,q:any)=>p.x == q.x && p.y == q.t),
    ).subscribe((v) => {
      this.oLeft = left + v.x
      this.oTop = top + v.y
    })
    this.upUnsubscribable = this.upEvent$.subscribe((v: MouseEvent) => {
      e.stopPropagation()
      e.preventDefault()
      if (this.moveUnsubscribable) {
        this.moveUnsubscribable.unsubscribe()
        this.moveUnsubscribable = null
      }
      if (this.upUnsubscribable) {
        this.upUnsubscribable.unsubscribe()
        this.upUnsubscribable = null
      }
      this.dragStyles.left = this.oLeft
      this.dragStyles.top = this.oTop
      this.dragStyles.width = this.width
      this.dragStyles.height = this.height
    })

  }

  pointDown(e, point) {
    e.stopPropagation()
    e.preventDefault()

    const oWidth = this.width
    const oHeight = this.height
    const left = this.oLeft
    const top = this.oTop

    const hasT = /t/.test(point)
    const hasB = /b/.test(point)
    const hasL = /l/.test(point)
    const hasR = /r/.test(point)
    
    this.moveUnsubscribable = this.moveEvent$.pipe(
      map((v:MouseEvent)=> ({
        x:Math.floor((v.clientX - e.clientX)/this.DEFAULT_POINT_MOVE)*this.DEFAULT_POINT_MOVE,
        y:Math.floor((v.clientY - e.clientY)/this.DEFAULT_POINT_MOVE)*this.DEFAULT_POINT_MOVE
      })),
      distinctUntilChanged((p:any,q:any)=>p.x == q.x && p.y == q.t),
    ).subscribe((v: MouseEvent) => {
      this.width = oWidth + (hasL ? -v.x : hasR ? v.x : 0)
      this.height = oHeight + (hasT ? -v.y : hasB ? v.y : 0)
      this.oLeft = left + (hasL ? v.x : 0)
      this.oTop = top + (hasT ? v.y : 0)
    })
    
    this.upUnsubscribable = this.upEvent$.subscribe((v: MouseEvent) => {
      e.stopPropagation()
      e.preventDefault()
      if (this.moveUnsubscribable) {
        this.moveUnsubscribable.unsubscribe()
        this.moveUnsubscribable = null
      }
      if (this.upUnsubscribable) {
        this.upUnsubscribable.unsubscribe()
        this.upUnsubscribable = null
      }
      this.dragStyles.left = this.oLeft
      this.dragStyles.top = this.oTop
      this.dragStyles.width = this.width
      this.dragStyles.height = this.height
    })
  }
  pointStyle = [{
    name: 't',
    style: {
      left: '50%',
      top: '-10px',
      marginLeft: '-10px'
    }
  }, {
    name: 'r',
    style: {
      right: '-10px',
      top: '50%',
      marginTop: '-10px'
    }
  }, {
    name: 'b',
    style: {
      left: '50%',
      bottom: '-10px',
      marginLeft: '-10px'
    }
  }, {
    name: 'l',
    style: {
      left: '-10px',
      top: '50%',
      marginTop: '-10px'
    }
  }, {
    name: 'lt',
    style: {
      left: '-10px',
      top: '-10px',
    }
  }, {
    name: 'rt',
    style: {
      right: '-10px',
      top: '-10px',
    }
  }, {
    name: 'lb',
    style: {
      left: '-10px',
      bottom: '-10px',
    }
  }, {
    name: 'rb',
    style: {
      right: '-10px',
      bottom: '-10px',
    }
  }]
}
