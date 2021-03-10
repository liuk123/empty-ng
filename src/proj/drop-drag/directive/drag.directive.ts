import { Directive, HostListener, ElementRef, Renderer2, Input } from '@angular/core';
import { fromEvent, Unsubscribable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { DragItem } from '../model/drag.model';
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
  @Input('dragItem')dragItem:DragItem

  oLeft:number = 0
  oTop:number = 0
  subLeft:number = 0
  subTop:number = 0
  
  unsubscribable:Unsubscribable
  constructor(
    private el: ElementRef,
    private rd: Renderer2,
    private srv: ViewService,) {
    }

  @HostListener('mousedown',['$event'])
  mousedown(e){
    e.stopPropagation()
    e.preventDefault()
      
    const moveEvent$ = fromEvent(this.el.nativeElement,'mousemove')
    this.unsubscribable = moveEvent$.subscribe((v:MouseEvent)=>{
      this.subLeft = v.clientX - e.clientX
      this.subTop = v.clientY - e.clientY
      this.rd.setStyle(this.el.nativeElement, 'left', this.oLeft + this.subLeft + 'px')
      this.rd.setStyle(this.el.nativeElement, 'top', this.oTop + this.subTop + 'px')
      this.rd.setStyle(this.el.nativeElement, 'z-index', 10)
    })

  }
  @HostListener('mouseup',['$event'])
  mouseup(e){
    e.stopPropagation()
    e.preventDefault()
    if(this.unsubscribable){
      this.oLeft = this.oLeft + this.subLeft
      this.oTop = this.oTop + this.subTop
      this.rd.setStyle(this.el.nativeElement, 'z-index', 5)
      this.unsubscribable.unsubscribe()
      this.unsubscribable=null
    }
  }
  @HostListener('mouseleave',['$event'])
  mouseleave(e){
    e.stopPropagation()
    e.preventDefault()
    if(this.unsubscribable){
      this.oLeft = this.oLeft + this.subLeft
      this.oTop = this.oTop + this.subTop
      this.rd.setStyle(this.el.nativeElement, 'z-index', 5)
      this.unsubscribable.unsubscribe()
      this.unsubscribable=null
    }

  }
    
}
