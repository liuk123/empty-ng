import { Directive, HostListener, ElementRef, Renderer2, Input } from '@angular/core';
export class DragData{
  constructor(
    public left?:number,
    public top?:number,
  ){
    if(!left){
      this.left=0
    }
    if(!top){
      this.top=0
    }
  }
}
@Directive({
  selector: '[ins-draggable]',
})
export class DragDirective {
  private _isDraggable = false;
  @Input() draggedClass: string;
  @Input() dragData: DragData = new DragData();
  @Input('ins-draggable')
  set isDraggable(draggable: boolean) {
    this._isDraggable = draggable;
    this.rd.setAttribute(this.el.nativeElement, 'draggable', `${draggable}`);
  }
  get isDraggable() {
    return this._isDraggable;
  }

  x: number
  y: number
  constructor(
    private el: ElementRef,
    private rd: Renderer2,) { }

  @HostListener('dragstart', ['$event'])
  onDragStart(ev) {
    if (this.el.nativeElement === ev.target) {
      this.x = ev.clientX
      this.y = ev.clientY
      console.log(this.x)
      this.rd.setStyle(this.el.nativeElement, 'opacity', '0.4')
    }
  }

  @HostListener('drag', ['$event'])
  onDrag(ev: Event) {
    if (this.el.nativeElement === ev.target) {
      // console.log('drag')
    }
  }

  @HostListener('dragend', ['$event', '$event.target'])
  onDragEnd(ev,target) {
    if (this.el.nativeElement === ev.target) {
      console.log(target)
      this.dragData.left = this.dragData.left + ev.clientX - this.x
      this.dragData.top = this.dragData.top + ev.clientY - this.y
      this.rd.setStyle(this.el.nativeElement, 'left', this.dragData.left + 'px')
      this.rd.setStyle(this.el.nativeElement, 'top', this.dragData.top + 'px')
      this.rd.setStyle(this.el.nativeElement, 'opacity', '1')
      // this.rd.removeClass(this.el.nativeElement, this.draggedClass);
    }
  }

}
