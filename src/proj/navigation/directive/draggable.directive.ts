import { AfterViewInit, Directive, ElementRef, Input, OnDestroy, OnInit, Renderer2, ViewContainerRef } from '@angular/core';
import { DropDirective } from './drop.directive';

@Directive({
  selector: '[app-draggable]',
})
export class DraggableDirective implements OnInit {
  private _isDraggable = false;
  
  @Input() id: string
  @Input('app-draggable')
  set isDraggable(draggable: boolean) {
    this._isDraggable = draggable;
    this.rd.setAttribute(this.el.nativeElement, 'draggable', `${draggable}`);
  }
  get isDraggable() {
    return this._isDraggable;
  }

  constructor(
    public el: ElementRef,
    private rd:Renderer2,
    private drop: DropDirective 
  ) {}

  ngOnInit(){
    this.drop.data.push({
      dom: this.el.nativeElement,
      id: this.id
    })
  }
}