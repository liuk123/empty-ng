import { Directive, ElementRef, HostListener, Input, OnDestroy, OnInit, Renderer2, ViewContainerRef } from '@angular/core';
import { fromEvent, Observable, Observer, Subscription } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';
import { DragListDirective } from './drag-list.directive';

@Directive({
  selector: '[app-draggable]',
})
export class DraggableDirective implements OnInit, OnDestroy {
  private _isDraggable = false;
  id = Symbol()

  @Input('app-draggable')
  set isDraggable(draggable: boolean) {
    this._isDraggable = draggable;
    this.rd.setAttribute(this.el.nativeElement, 'draggable', `${draggable}`);
  }
  get isDraggable() {
    return this._isDraggable;
  }

  dragSubscription: Subscription
  drag$: Observable<{ x: number; y: number; }>
  constructor(
    public el: ElementRef,
    private rd:Renderer2,
    private drags: DragListDirective,
    public viewContainerRef: ViewContainerRef
  ) {}

  ngOnInit(){
    let rect = this.el.nativeElement.getBoundingClientRect()
    this.drags.data.push({
      dom: this.el.nativeElement,
      rect: rect
    })

    let lastDom = null
    this.drag$ = fromEvent(this.el.nativeElement, 'drag').pipe(
      distinctUntilChanged((p:any,q:any)=>p.clientX == q.clientX && p.clientY == q.clientY),
      map((v: DragEvent)=>({ x: v.clientX, y: v.clientY })),
    )
    this.dragSubscription = this.drag$.subscribe(v=>{
      const rectlist = this.drags.data;
      for(let i=0; i<rectlist.length; i++){
        if(v.x > rectlist[i].rect.left && v.x < rectlist[i].rect.right && 
          v.y > rectlist[i].rect.top && v.y < rectlist[i].rect.bottom){
            if(lastDom == null || lastDom != rectlist[i].dom){
              lastDom = rectlist[i].dom
              console.log(rectlist[i].dom)
            }
        }
      }
    })
  }
  ngOnDestroy(){
    this.dragSubscription.unsubscribe()
  }
  @HostListener('dragstart', ['$event'])
  onDragStart(ev: DragEvent) {
    if(this.el.nativeElement === ev.target){
      console.log('drag start')
    }
  }

  @HostListener('dragend', ['$event'])
  onDragEnd(ev: Event) {
    if (this.el.nativeElement === ev.target) {
      console.log('drag end')
    }
  }
}