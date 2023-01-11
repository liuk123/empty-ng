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
  private apiHttpNumber = 0
  private isLoading = false
  private loadingSubject = new BehaviorSubject(this.isLoading)
  loadingEvent = this.loadingSubject.asObservable()
  addHttp(){
    this.apiHttpNumber++
    if(this.apiHttpNumber>0&&this.isLoading == false){
      this.isLoading = true
      this.loadingSubject.next(this.isLoading)
    }
  }
  reduceHttp(){
    setTimeout(()=>{
      if(this.apiHttpNumber>0){
        this.apiHttpNumber--
      }
      if(this.apiHttpNumber==0 && this.isLoading == true){
          this.isLoading = false
          this.loadingSubject.next(this.isLoading)
      }
    },300)
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
