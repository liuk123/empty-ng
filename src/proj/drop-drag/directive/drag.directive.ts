import { Directive, HostListener, ElementRef, Renderer2, Input } from '@angular/core';
import { ViewService } from '../service/views.service';
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
  @Input() dragData: DragData = new DragData();
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
    private srv: ViewService) { }

  @HostListener('dragstart', ['$event'])
  onDragStart(ev) {
    if (this.el.nativeElement === ev.target) {
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
      // this.dragData.left = ev.pageX -ev.offsetX - this.srv.getDropData('18412da9-78f0-4924-8be1-dc1c466d407a').left
      // this.dragData.top = ev.pageY -ev.offsetY - this.srv.getDropData('18412da9-78f0-4924-8be1-dc1c466d407a').top
      // // console.log(this.srv.getDropData('18412da9-78f0-4924-8be1-dc1c466d407a').left)
      // this.rd.setStyle(this.el.nativeElement, 'left', this.dragData.left + 'px')
      // this.rd.setStyle(this.el.nativeElement, 'top', this.dragData.top + 'px')
      // 
      this.rd.setStyle(this.el.nativeElement, 'opacity', '1')
    }
  }

}
