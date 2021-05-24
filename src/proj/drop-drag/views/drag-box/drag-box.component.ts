import { Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output, Renderer2 } from '@angular/core';
import { fromEvent, Unsubscribable } from 'rxjs';
import { distinctUntilChanged, filter, map, tap } from 'rxjs/operators';
import { ViewService } from '../../service/views.service';

@Component({
  selector: 'app-drag-box',
  templateUrl: './drag-box.component.html',
  styleUrls: ['./drag-box.component.less'],
})
export class DragBoxComponent implements OnInit {

  private DEFAULT_MOVE = 10
  private DEFAULT_POINT_MOVE = 10

  @Input() active = true
  @Input() componentId = ''
  width = 100
  height = 100
  oLeft = 0
  oTop = 0

  moveUnsubscribable: Unsubscribable
  upUnsubscribable: Unsubscribable
  moveEvent$
  upEvent$
  constructor(
    private el: ElementRef,
    private rd: Renderer2,
    private srv: ViewService) {
      
    }

  ngOnInit(): void {
    const styles = this.srv.getDragItemStyles(this.componentId)
    if(styles){
      this.width = styles.width
      this.height = styles.height
      this.oLeft = styles.left
      this.oTop = styles.top
    }
    if(!this.moveEvent$){
      this.moveEvent$ = fromEvent(document, 'mousemove')
    }
    if(!this.upEvent$){
      this.upEvent$ = fromEvent(document, 'mouseup')
    }
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
      this.srv.setDragItemStyles(this.componentId, {
        left:this.oLeft,
        top:this.oTop,
        width:this.width,
        height: this.height
      })
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
      this.srv.setDragItemStyles(this.componentId, {
        left:this.oLeft,
        top:this.oTop,
        width:this.width,
        height: this.height
      })
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
