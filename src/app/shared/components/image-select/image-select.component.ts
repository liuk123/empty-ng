import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-image-select',
  templateUrl: './image-select.component.html',
  styleUrls: ['./image-select.component.less'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(()=>ImageSelectComponent),
      multi:true//令牌多对一
    },
    // {
    //   provide: NG_VALIDATORS,
    //   useExisting: forwardRef(()=>ImageSelectComponent),
    //   multi:true//令牌多对一
    // }
  ]
})
export class ImageSelectComponent implements ControlValueAccessor {

  // 图片地址列表
  @Input() items: string[]
  // 已选择的图片
  selected: any
  @Input() useSvgIcon:boolean=false
  @Input() itemHeight='64px';
  @Input() itemWidth='64px';
  constructor() { }
  private propageteChange:(_: any) => void
  //输入值
  writeValue(data):void{
    this.selected=data;
  }
  //输出值
  registerOnChange(fn: (_: any) => void):void{
    this.propageteChange=fn;
  }
  registerOnTouched(fn:any):void{

  }

  onChange(data){
    this.selected=data
    this.propageteChange(data)
  }
}
