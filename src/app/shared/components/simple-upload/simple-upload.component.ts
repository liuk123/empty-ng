import { Component, Input, forwardRef, ViewChild, ElementRef } from '@angular/core';
import { AbstractControl, ControlValueAccessor, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator } from '@angular/forms';

@Component({
  selector: 'app-simple-upload',
  templateUrl: './simple-upload.component.html',
  styleUrls: ['./simple-upload.component.less'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(()=>SimpleUploadComponent),
      multi:true//令牌多对一
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(()=>SimpleUploadComponent),
      multi:true//令牌多对一
    }
  ]
})
export class SimpleUploadComponent implements ControlValueAccessor, Validator {
  @ViewChild('fileLoad', {read: ElementRef}) fileLoadRef: ElementRef
  @Input() accept: string = null
  files=[]

  loading = false
  constructor() { }
  private propageteChange:(_: any) => void

  //输入值
  writeValue(data:File[]):void{
    this.files = data
    if(this.fileLoadRef){
      if(data == null){
        this.fileLoadRef.nativeElement.value = null
        return null
      }
      // fileList不允许改变，需要借助DataTransfer的fileList重新赋值
      const dataTransfer = new DataTransfer()
      data?.forEach(v=>{
        dataTransfer.items.add(v)
      })
      this.fileLoadRef.nativeElement.files = dataTransfer.files
    }
  }
  //输出值
  registerOnChange(fn: (_: any) => void):void{
    this.propageteChange=fn;
  }
  registerOnTouched(fn:any):void{
  }
  validate(control: AbstractControl): ValidationErrors | null {
    return null;
  }
  onChange(e){
    this.files = Array.from(e.target.files)
    this.propageteChange(this.files)
  }
}
