import { Injectable } from '@angular/core'
import { Subject } from 'rxjs'
/**
 * 测试用
 */
@Injectable({
  providedIn: 'root',
})
export class WorkerService {
  private workerSubject = new Subject()
  workerEvent = this.workerSubject.asObservable()
  worker:any = null
  timer = null
  constructor(){}

  stop(){
    if(this.worker){
      this.workerSubject.complete();
      this.worker.terminate();
      this.worker = null;
    }
  }
  postMessage(data, time=6000){
    if(this.worker===null){
      this.start()
    }
    this.worker.postMessage(data)
    setTimeout(()=>{
      if(this.timer){
        this.worker.terminate();
        this.worker = null;
        this.workerSubject.error('timer out')
      }
    },time)
  }
  start(){
    this.worker = new Worker(new URL('./html-parse.worker.ts', import.meta.url));
    this.worker.onmessage = ({data})=>{
      this.workerSubject.next(data)
      if(this.timer){
        clearTimeout(this.timer)
        this.timer = null
      }
    }
    this.worker.onmessageerror = (err)=>{
      this.workerSubject.error(err)
    }
  }
}