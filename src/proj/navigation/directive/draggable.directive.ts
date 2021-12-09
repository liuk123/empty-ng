import { AfterViewInit, Directive, ElementRef, Input, OnDestroy, OnInit, Renderer2, ViewContainerRef } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';

@Directive({
  selector: '[app-draggable]',
})
export class DraggableDirective implements OnInit, AfterViewInit {
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

  drag$: Observable<{ x: number; y: number; }>
  rect
  constructor(
    public el: ElementRef,
    private rd:Renderer2,
    public viewContainerRef: ViewContainerRef
  ) {}

  ngOnInit(){
    
  }
  ngAfterViewInit(){
    this.rect = {
      dom: this.el.nativeElement,
      id: this.id
    }
    this.drag$ = fromEvent(this.el.nativeElement, 'drag').pipe(
      distinctUntilChanged((p:any,q:any)=>p.pageX == q.pageX && p.pageY == q.pageY),
      map((v: DragEvent)=>({ x: v.pageX, y: v.pageY })),
    )
  }
}