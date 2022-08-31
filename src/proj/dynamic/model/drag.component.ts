import { Component, ElementRef, Inject, Input, OnDestroy, OnInit } from '@angular/core';
import { concat, fromEvent, Observable, of } from 'rxjs';
import { distinctUntilChanged, filter, finalize, map, publish, repeatWhen, startWith, switchMap, take, takeUntil } from 'rxjs/operators';
import { MOUSE_MOVE, MOUSE_UP } from './drag-move';
import { DragItemStyle } from './drag.model';

@Component({
  selector: 'app-drag',
  template: `
    <div
      class="drag-box" 
      [style.height.px]="height"
      [style.width.px]="width"
      [style.left.px]="oLeft"
      [style.top.px]="oTop">
      <div [style]="{'display': dragStyles.status?'block':'none'}">
        <div class="shape-point" *ngFor="let p of pointStyle"
          [style]="p.style"
          (mousedown)="pointDown($event,p.name)"
          ></div>
      </div>
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
      width:20px;
      height:20px;
      border:2px solid #666;
      border-radius: 50%;
      position: absolute;
      z-index: 100;
    }
  `]
})
export class DragComponent implements OnInit, OnDestroy {

  private readonly DEFAULT_MOVE = 10
  private readonly DEFAULT_POINT_MOVE = 10

  @Input() active = true
  @Input() dragStyles: DragItemStyle
  width = 100
  height = 100
  oLeft = 0
  oTop = 0

  mousedown$: Observable<any>
  // lossmove$: Observable<any>

  constructor(
    @Inject(MOUSE_MOVE) private readonly mousemove$: Observable<any>,
    @Inject(MOUSE_UP) private readonly mouseup$: Observable<any>,
    private el: ElementRef
  ) {
    // this.lossmove$ = 
  }

  ngOnInit(): void {
    if(this.dragStyles){
      this.width = this.dragStyles.width
      this.height = this.dragStyles.height
      this.oLeft = this.dragStyles.left
      this.oTop = this.dragStyles.top
    }
    this.mousedown$ = fromEvent(this.el.nativeElement, 'mousedown')
    this.listenerMove()
  }
  ngOnDestroy(): void {
    
  }
  /**
   * 移动组件
   */
  listenerMove(){
    let initX: number, initY: number, left: number, top: number

    let lossmove$: Observable<any> = this.mousemove$.pipe(
      takeUntil(this.mouseup$),
      finalize(()=>{
        this.dragStyles.left = this.oLeft
        this.dragStyles.top = this.oTop
        this.dragStyles.width = this.width
        this.dragStyles.height = this.height
      }),
      repeatWhen(()=>this.mousedown$),
    )

    this.mousedown$.subscribe(v=>{
      initX = v.clientX
      initY = v.clientY
      v.stopPropagation()
      v.preventDefault()
      left = this.oLeft
      top = this.oTop
    })

    this.mousedown$.pipe(
      take(1),
      switchMap(()=>lossmove$),
      filter(_=>this.dragStyles.status),
      map((v:MouseEvent)=> ({
        x:Math.floor((v.clientX - initX)/this.DEFAULT_MOVE)*this.DEFAULT_MOVE,
        y:Math.floor((v.clientY - initY)/this.DEFAULT_MOVE)*this.DEFAULT_MOVE
      })),
      distinctUntilChanged((p:any,q:any)=>p.x == q.x && p.y == q.t),
    ).subscribe(v=>{
      this.oLeft = left + v.x
      this.oTop = top + v.y
    })
    
    // this.mousedown$.pipe(
    //   switchMap(()=>this.mouseup$),
    //   take(1)
    // ).subscribe(v=>{
    //   this.dragStyles.left = this.oLeft
    //   this.dragStyles.top = this.oTop
    //   this.dragStyles.width = this.width
    //   this.dragStyles.height = this.height
    // })
  }

  /**
   * 修改大小
   * @param e 
   * @param point 
   */
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
    
    this.mousemove$.pipe(
      map((v:MouseEvent)=> ({
        x:Math.floor((v.clientX - e.clientX)/this.DEFAULT_POINT_MOVE)*this.DEFAULT_POINT_MOVE,
        y:Math.floor((v.clientY - e.clientY)/this.DEFAULT_POINT_MOVE)*this.DEFAULT_POINT_MOVE
      })),
      distinctUntilChanged((p:any,q:any)=>p.x == q.x && p.y == q.t),
      finalize(()=>{
        this.dragStyles.left = this.oLeft
        this.dragStyles.top = this.oTop
        this.dragStyles.width = this.width
        this.dragStyles.height = this.height
      }),
      takeUntil(this.mouseup$),
    ).subscribe((v: MouseEvent) => {
      this.width = oWidth + (hasL ? -v.x : hasR ? v.x : 0)
      this.height = oHeight + (hasT ? -v.y : hasB ? v.y : 0)
      this.oLeft = left + (hasL ? v.x : 0)
      this.oTop = top + (hasT ? v.y : 0)
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
