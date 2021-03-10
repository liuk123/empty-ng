import { Directive, HostListener, ElementRef, Renderer2, Input } from '@angular/core';
import { fromEvent, Unsubscribable } from 'rxjs';
import { ViewService } from '../service/views.service';

@Directive({
  selector: '[ins-draggable]',
})
export class DragDirective {
  private _isDraggable = false;
  @Input('ins-draggable')
  set isDraggable(draggable: boolean) {
    this._isDraggable = draggable;
    this.rd.setAttribute(this.el.nativeElement, 'draggable', `${draggable}`);
  }
  get isDraggable() {
    return this._isDraggable;
  }

  width = 100
  height = 100
  oLeft: number = 0
  oTop: number = 0

  moveUnsubscribable: Unsubscribable
  upUnsubscribable: Unsubscribable
  constructor(
    private el: ElementRef,
    private rd: Renderer2,
    private srv: ViewService,) {
  }

  @HostListener('mousedown', ['$event'])
  mousedown(e) {
    e.stopPropagation()
    e.preventDefault()
    if (this.moveUnsubscribable || this.upUnsubscribable) {
      this.moveUnsubscribable.unsubscribe()
      this.moveUnsubscribable = null
      this.upUnsubscribable.unsubscribe()
      this.upUnsubscribable = null
      return null
    }

    const left = this.oLeft
    const top = this.oTop
    // this.rd.setStyle(this.el.nativeElement, 'z-index', 10)
    const moveEvent$ = fromEvent(document, 'mousemove')
    this.moveUnsubscribable = moveEvent$.subscribe((v: MouseEvent) => {
      this.oLeft = left + v.clientX - e.clientX
      this.oTop = top + v.clientY - e.clientY
      this.rd.setStyle(this.el.nativeElement, 'left', this.oLeft + 'px')
      this.rd.setStyle(this.el.nativeElement, 'top', this.oTop + 'px')
    })
    const upEvent$ = fromEvent(e.target, 'mouseup')
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
    })

  }
}
