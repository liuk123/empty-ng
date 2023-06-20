import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
/**
 * 记录http请求日志
 * http请求数量
 */
@Injectable({
  providedIn: 'root',
})
export class HttpLogService implements OnDestroy{

  private unsubscribe$ = new Subject<void>()
  private loadingSubject = new BehaviorSubject(false)
  loadingEvent = this.loadingSubject.asObservable()

  private apiHttpNumber = 0
  private timer=null
  addHttp(){
    this.apiHttpNumber++
    if(this.timer == null){
      this.loadingSubject.next(true)
    }
  }
  reduceHttp(){
    if(this.apiHttpNumber>0){
      this.apiHttpNumber--
    }
    if(this.timer!==null){
      clearTimeout(this.timer)
    }
    this.timer = setTimeout(()=>{
      this.timer=null
      if(this.apiHttpNumber==0){
          this.loadingSubject.next(false)
      }
    },500)
  }
  clear(){
    if(this.timer!==null){
      clearTimeout(this.timer)
      this.timer=null
    }
    this.apiHttpNumber=0
  }
  get httpNumber(){
    return this.apiHttpNumber
  }
  constructor() {}
  ngOnDestroy(): void {
    this.unsubscribe$.next()
    this.unsubscribe$.complete()
  }

}
