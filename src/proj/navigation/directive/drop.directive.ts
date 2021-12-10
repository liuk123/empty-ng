import { AfterViewInit, Directive, ElementRef, OnInit, ViewContainerRef } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';

@Directive({
  selector: '[app-drop]',
})
export class DropDirective implements OnInit, AfterViewInit {

  drop$: Observable<{ x: number; y: number; data: any }>
  data = []
  // dragend$: Observable<{dom: HTMLElement, id: number}>
  constructor(
    public el: ElementRef,
    public viewContainerRef: ViewContainerRef
  ) {}

  ngOnInit(){
  }
  ngAfterViewInit(){
    this.drop$ = fromEvent(this.el.nativeElement, 'dragover').pipe(
      distinctUntilChanged((p:any,q:any)=>p.pageX == q.pageX && p.pageY == q.pageY),
      map((v: DragEvent)=>({ x: v.pageX, y: v.pageY, data: this.data })),
    )
    // this.dragend$ = fromEvent(this.el.nativeElement, 'dragend').pipe(
    //   mapTo(this.rect)
    // )
  }
}