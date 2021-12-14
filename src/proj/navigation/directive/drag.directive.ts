import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';
import { DragDropService } from './drag-grop.service';
import { DropDirective } from './drop.directive';

@Directive({
  selector: '[app-draggable]',
})
export class DragDirective {
  private _isDraggable = false;
  
  @Input() dragData
  @Input('app-draggable')
  set isDraggable(draggable: boolean) {
    this._isDraggable = draggable;
    this.rd.setAttribute(this.el.nativeElement, 'draggable', `${draggable}`);
  }
  get isDraggable() {
    return this._isDraggable;
  }

  constructor(
    private el: ElementRef,
    private rd:Renderer2,
    private srv: DragDropService,
    private drop: DropDirective
  ) {}

  @HostListener('dragstart', ['$event'])
  onDragStart(ev: DragEvent) {
    if(this.el.nativeElement===ev.target){
      console.log('dragstart')
      this.srv.setDragData(this.dragData)
      this.srv.setDragList(this.drop.data)
    }
  }
  @HostListener('dragend', ['$event'])
  onDragEnd(ev: DragEvent) {
    if(this.el.nativeElement===ev.target){
      console.log('dragend')
      this.srv.setDragData(null)
      this.srv.setDragList(null)
    }
  }
}