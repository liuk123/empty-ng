import { Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output, Renderer2 } from '@angular/core';
import { fromEvent, Unsubscribable } from 'rxjs';
import { ViewService } from '../../service/views.service';

@Component({
  selector: 'app-drag-box',
  templateUrl: './drag-box.component.html',
  styleUrls: ['./drag-box.component.less'],
})
export class DragBoxComponent implements OnInit {

  @Input() active = true
  @Input() componentId = 'ee5eb883-90d6-4119-a00e-3930d0ad899c'
  width = 0
  height = 0
  oLeft = 0
  oTop = 0

  moveUnsubscribable: Unsubscribable
  upUnsubscribable: Unsubscribable
  constructor(
    private el: ElementRef,
    private rd: Renderer2,
    private srv: ViewService) {
      
    }

  ngOnInit(): void {
    const styles = this.srv.getDragItemStyles(this.componentId)
    this.width = styles.width
    this.height = styles.height
    this.oLeft = styles.left
    this.oTop = styles.top
  }

  @HostListener('mousedown', ['$event'])
  mousedown(e) {
    e.stopPropagation()
    e.preventDefault()

    const left = this.oLeft
    const top = this.oTop
    const moveEvent$ = fromEvent(document, 'mousemove')
    this.moveUnsubscribable = moveEvent$.subscribe((v: MouseEvent) => {
      this.oLeft = left + v.clientX - e.clientX
      this.oTop = top + v.clientY - e.clientY
    })
    const upEvent$ = fromEvent(document, 'mouseup')
    this.upUnsubscribable = upEvent$.subscribe((v: MouseEvent) => {
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
    
    const moveEvent$ = fromEvent(document, 'mousemove')
    this.moveUnsubscribable = moveEvent$.subscribe((v: MouseEvent) => {
      const disX = v.clientX - e.clientX
      const disY = v.clientY - e.clientY
      this.width = oWidth + (hasL ? -disX : hasR ? disX : 0)
      this.height = oHeight + (hasT ? -disY : hasB ? disY : 0)
      this.oLeft = left + (hasL ? disX : 0)
      this.oTop = top + (hasT ? disY : 0)
    })
    const upEvent$ = fromEvent(document, 'mouseup')
    this.upUnsubscribable = upEvent$.subscribe((v: MouseEvent) => {
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
