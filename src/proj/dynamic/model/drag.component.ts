import { Component, ElementRef, Inject, Input, OnDestroy, OnInit } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { distinctUntilChanged, filter, finalize, map, repeatWhen, switchMap, take, takeUntil } from 'rxjs/operators';
import { MOUSE_MOVE, MOUSE_UP } from './drag-move';
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
export class DragComponent implements OnInit, OnDestroy {

  // 默认移动距离
  private readonly DEFAULT_MOVE = 4
  // 默认放大缩小距离
  private readonly DEFAULT_POINT_MOVE = 4

  @Input() dragStyles: DragItemStyle = null

  mousedown$: Observable<any>

  constructor(
    @Inject(MOUSE_MOVE) private readonly mousemove$: Observable<any>,
    @Inject(MOUSE_UP) private readonly mouseup$: Observable<any>,
    private el: ElementRef
  ) {}

  ngOnInit(): void {
    this.mousedown$ = fromEvent(this.el.nativeElement, 'mousedown')
    this.listenerMove()
  }
  ngOnDestroy(): void {}
  /**
   * 移动组件
   */
  listenerMove(){
    let initX: number, initY: number, left: number, top: number

    let lossmove$: Observable<any> = this.mousemove$.pipe(
      takeUntil(this.mouseup$),
      repeatWhen(()=>this.mousedown$),
    )

    this.mousedown$.subscribe(v=>{
      initX = v.clientX
      initY = v.clientY
      if(this.dragStyles.status){
        v.stopPropagation()
        v.preventDefault()
      }
      left = this.dragStyles.left
      top = this.dragStyles.top
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
      this.dragStyles.left = left + v.x
      this.dragStyles.top = top + v.y
      this.dragStyles.isDownward = this.dragStyles.top - initY > 0
      this.dragStyles.isRightward = this.dragStyles.left - initX > 0
    })
  }

  /**
   * 修改大小
   * @param e 
   * @param point 
   */
  pointDown(e, point) {
    e.stopPropagation()
    e.preventDefault()

    const oWidth = this.dragStyles.width
    const oHeight = this.dragStyles.height
    const left = this.dragStyles.left
    const top = this.dragStyles.top

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
      takeUntil(this.mouseup$),
    ).subscribe((v: MouseEvent) => {
      this.dragStyles.width = oWidth + (hasL ? -v.x : hasR ? v.x : 0)
      this.dragStyles.height = oHeight + (hasT ? -v.y : hasB ? v.y : 0)
      this.dragStyles.left = left + (hasL ? v.x : 0)
      this.dragStyles.top = top + (hasT ? v.y : 0)
    })
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
