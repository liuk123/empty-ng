import { Injectable } from '@angular/core'
import { Subject } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class HtmlParserWorkerService {
  
  private workerSubject = new Subject()
  workerEvent = this.workerSubject.asObservable()
  worker:any = null
  timer = null
  constructor(){}

  stop(){
    // this.workerSubject.complete();
    if(this.worker){
      this.worker.terminate();
      this.worker = null;
    }
  }
  postMessage(data, time=6000){
    if(this.worker===null){
      this.start()
    }
    this.worker.postMessage(data)
    this.timer = setTimeout(()=>{
      if(this.timer){
        this.worker.terminate();
        this.worker = null;
        this.workerSubject.error('timer out')
      }
    },time)
  }
  start(){
    this.worker = new Worker(new URL('../worker/html-parse.worker.ts', import.meta.url));
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