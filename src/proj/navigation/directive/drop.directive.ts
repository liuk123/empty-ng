import { AfterViewInit, Directive, ElementRef, Input, OnDestroy, ViewContainerRef } from '@angular/core';
import { fromEvent, Observable, Subject } from 'rxjs';
import { distinctUntilChanged, map, takeUntil, tap } from 'rxjs/operators';
import { DragDropService } from './drag-grop.service';

@Directive({
  selector: '[app-droppable]',
})
export class DropDirective implements AfterViewInit, OnDestroy {

  private subject = new Subject()
  
  private _isDroppable = false;
  @Input('app-droppable') set isDroppable(val: boolean){
    if(val === true){
      this.startDrop()
    }else if(val === false && this._isDroppable === true){
      this.stopDrop()
    }
    this._isDroppable = val
  }
  get isDroppable(){
    return this._isDroppable
  }

  dragover$: Observable<{ x: number; y: number; }>
  drop$: Observable<DragEvent>
  dragleave$: Observable<DragEvent>

  @Input() data: any[]
  rectList: any[] = []
  domList: any[] = []

  private lastIndex: number = null
  constructor(
    public el: ElementRef,
    public viewContainerRef: ViewContainerRef,
    private srv: DragDropService
  ) {}
  ngAfterViewInit(){
    this.dragover$ = fromEvent(this.el.nativeElement, 'dragover').pipe(
      tap((v:DragEvent)=> v.preventDefault()),
      distinctUntilChanged((p:any,q:any)=>p.pageX == q.pageX && p.pageY == q.pageY),
      map((v: DragEvent)=>({ x: v.pageX, y: v.pageY })),
    )
    
    this.drop$ = fromEvent(this.el.nativeElement, 'drop')
    this.dragleave$ = fromEvent(this.el.nativeElement, 'dragleave')

    this.srv.refreshEvent.pipe(
      takeUntil(this.subject)
    ).subscribe(v=>{
      this.domList = this.el.nativeElement.children
      this.rectList.length = 0
      for(let item of this.domList){
        this.rectList.push(item.getBoundingClientRect())
      }
    })
  }
  ngOnDestroy(){
    this.stopDrop()
  }
  startDrop(){
    
    this.domList = this.el.nativeElement.children
    this.rectList.length = 0
    for(let item of this.domList){
      this.rectList.push(item.getBoundingClientRect())
    }

    let lastDom = null
    this.dragover$.pipe(
      takeUntil(this.subject)
    ).subscribe(v=>{
      for(let i = 0; i < this.rectList.length; i++){
        if(v.x > this.rectList[i].left && v.x < this.rectList[i].right && 
          v.y > this.rectList[i].top && v.y < this.rectList[i].bottom){
            if(lastDom == null || lastDom != this.domList[i]){
              lastDom = this.domList[i]
              lastDom.style.borderColor = '#007ACC'
              this.lastIndex = i
            }
        }else{
          this.domList[i].style.borderColor = 'transparent'
        }
      }
    })
    this.drop$.pipe(
      takeUntil(this.subject)
    ).subscribe(v=>{
      console.log('drop')
      this.srv.drop(this.lastIndex, this.data)
      if(lastDom){
        lastDom.style.borderColor = 'transparent'
      }
    })
    this.dragleave$.pipe(
      takeUntil(this.subject)
    ).subscribe(v=>{
      if(lastDom && v.target === this.el.nativeElement){
        console.log('dragleave')
        lastDom.style.borderColor = 'transparent'
      }
    })
  }
  stopDrop(){
    this.subject.next()
    this.subject.complete()
  }
}