import { AfterViewInit, Directive, ElementRef, Input, OnDestroy, OnInit, ViewContainerRef } from '@angular/core';
import { fromEvent, Observable, Subscription } from 'rxjs';
import { distinctUntilChanged, map, tap } from 'rxjs/operators';
import { DragDropService } from './drag-grop.service';

@Directive({
  selector: '[app-droppable]',
})
export class DropDirective implements OnInit, AfterViewInit,OnDestroy {

  private _isDroppable = false;
  @Input('app-droppable') set isDroppable(val: boolean){
    this._isDroppable = val
    if(val === true && this.subscription === null){
      this.startDrop()
    }else if(val === false && this.subscription !== null){
      this.stopDrop()
    }
  }
  get isDroppable(){
    return this._isDroppable
  }

  subscription: Subscription = null
  dropSubscription: Subscription = null
  dragover$: Observable<{ x: number; y: number; }>
  drop$: Observable<DragEvent>

  @Input() data: any[]
  rectList: any[] = []
  domList: any[] = []

  private lastIndex: number = null
  constructor(
    public el: ElementRef,
    public viewContainerRef: ViewContainerRef,
    private srv: DragDropService
  ) {}

  ngOnInit(){
  }
  ngAfterViewInit(){
    this.dragover$ = fromEvent(this.el.nativeElement, 'dragover').pipe(
      tap((v:DragEvent)=> v.preventDefault()),
      distinctUntilChanged((p:any,q:any)=>p.pageX == q.pageX && p.pageY == q.pageY),
      map((v: DragEvent)=>({ x: v.pageX, y: v.pageY })),
    )
    
    this.drop$ = fromEvent(this.el.nativeElement, 'drop')
  }
  ngOnDestroy(){
    this.stopDrop()
  }
  startDrop(){
    let lastDom = null
    this.domList = this.el.nativeElement.children
    if(!this.domList||this.domList.length==0){
      return null
    }
    this.rectList.length = 0
    for(let item of this.domList){
      this.rectList.push(item.getBoundingClientRect())
    }

    this.subscription = this.dragover$.subscribe(v=>{
      for(let i = 0; i < this.rectList.length; i++){
        if(v.x > this.rectList[i].left && v.x < this.rectList[i].right && 
          v.y > this.rectList[i].top && v.y < this.rectList[i].bottom){
            if(lastDom == null || lastDom != this.domList[i]){
              lastDom = this.domList[i]
              this.lastIndex = i
            }
        }
      }
    })
    this.dropSubscription = this.drop$.subscribe(v=>{
      if(this.srv.dragData){
        this.data.splice(this.lastIndex, 0, this.srv.dragData)
        setTimeout(v=>{
          this.rectList.length = 0
          for(let item of this.domList){
            this.rectList.push(item.getBoundingClientRect())
          }
        },200)
      }else{
        console.log(112)
      }
    })
  }
  stopDrop(){
    this.subscription.unsubscribe()
    this.subscription = null
    this.dropSubscription.unsubscribe()
    this.dropSubscription = null
  }
}