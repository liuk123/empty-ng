import { Directive, HostListener, ElementRef, Renderer2, Input } from '@angular/core';
import { ViewService } from '../service/views.service';
import { DropDirective } from './drop.directive';

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
  constructor(
    private el: ElementRef,
    private rd: Renderer2,
    private srv: ViewService,
    private dropDirective: DropDirective) { }


    
}
