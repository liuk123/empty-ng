import { Directive, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { fromEvent, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

export type ReaderType = 'readAsText'|'readAsBinaryString'|'readAsDataURL'

@Directive({
  selector: '[readerFile]'
})
export class ReaderFileDirective implements OnInit, OnDestroy{
  
  subEvent = new Subject()
  @Output() readerFile = new EventEmitter()
  @Output() progress  = new EventEmitter()
  @Input() readerType:ReaderType = 'readAsText'
  @Input() fileType: string[]
  constructor(
    private ref: ElementRef) {}

  ngOnInit(){
    const ele = this.ref.nativeElement;
    fromEvent(ele,'dragover').pipe(takeUntil(this.subEvent)).subscribe((ev:any)=>{
      ev.preventDefault()
    })
    fromEvent(ele,'drop').pipe(takeUntil(this.subEvent)).subscribe((ev:DragEvent)=>{
      ev.preventDefault()
      const oFile = ev.dataTransfer.files[0]
      if(oFile.size!=0 && (!this.fileType || this.fileType.includes(oFile.name.slice(oFile.name.lastIndexOf('.')+1)))){
        const reader = new FileReader()
        reader[this.readerType](oFile)
        reader.onload = (e) => {
          if(reader.result!==null){
            this.readerFile.emit(reader.result)
          }
        }
        reader.onprogress = (e)=>{
          this.progress.emit(Math.floor(e.loaded/e.total*100+0.5))
        }
        reader.onerror = (e) => {
          console.error('读取失败')
        };
        reader.onabort = (e) => {
          console.warn('读取中断')
        };
      }
    })
  }
  ngOnDestroy(){
    this.subEvent.next()
    this.subEvent.complete()
  }
}
