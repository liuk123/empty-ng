import { Directive, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { fromEvent, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

export type ReaderType = 'readAsText' //读取为文本
|'readAsBinaryString'
|'readAsDataURL' //读取为url

@Directive({
  selector: '[readerFile]'
})
export class ReaderFileDirective implements OnInit, OnDestroy{
  
  subEvent = new Subject()
  //发出文件内容
  @Output() readerFile = new EventEmitter()
  //文件读取速度
  @Output() progress  = new EventEmitter()
  //读取方式，
  @Input() readerType:ReaderType = 'readAsText'
  //限制文件类型
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
          this.readerFile.emit({
            name: oFile.name,
            data: reader.result
          })
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
    this.subEvent.next(null)
    this.subEvent.complete()
  }
}
