import { Directive, HostListener, ElementRef, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[ins-draggable]',
})
export class DragDirective {
  private _isDraggable = false;
  @Input() draggedClass: string;
  @Input() dragData: any;
  @Input('ins-draggable')
  set isDraggable(draggable: boolean) {
    this._isDraggable = draggable;
    this.rd.setAttribute(this.el.nativeElement, 'draggable', `${draggable}`);
  }
  get isDraggable() {
    return this._isDraggable;
  }

  constructor(
    private el:ElementRef,
    private rd:Renderer2,) { }

    @HostListener('dragstart', ['$event'])//监听事件
    onDragStart(ev: Event) {
      if(this.el.nativeElement===ev.target){
        console.log('dragstart')
        this.rd.addClass(this.el.nativeElement, this.draggedClass);
      }
    }
  
    @HostListener('dragend', ['$event'])
    onDragEnd(ev: Event) {
      if (this.el.nativeElement === ev.target) {
        console.log('dragend')
        this.rd.removeClass(this.el.nativeElement, this.draggedClass);
      }
    }

}
