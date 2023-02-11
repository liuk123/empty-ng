import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup } from '@angular/forms';

export class FormBase<T> {
  value: T;
  key: string;
  label: string;
  controlType: ControlType;
  type?: any;
  options?: {
    name: string,
    code: string|boolean,
  }[];
  children?: {[propName: string]: FormBase<T>[]}; // 与options配合使用，级联
  placeHolder?: string;
  disabled?: boolean;
  valide?: any[];
  opt?: any[];

  constructor(data: {
      value?: T,
      key?: string,
      label?: string, 
      valide?: any[],
      controlType?: ControlType,
      type?: Type,
      placeHolder?: string,
      disabled?: boolean,
      children?: {[propName: string]: FormBase<T>[]}
  } = {}) {
      this.children = data.children;
      this.value = data.value;
      this.key = data.key || '';
      this.label = data.label || '';
      this.valide = data.valide||[];
      this.controlType = data.controlType || 'textbox';
      this.type= data.type,
      this.placeHolder = data.placeHolder||'',
      this.disabled = data.disabled||false
  }
}
type ControlType = 'textbox'
  |'dropdown'
  |'rangePicker'
  |'radio'
  |'textarea'
type Type = 'text'|'number'|'hidden' //input
      |'tags'|'multiple'|'default' //select
  
@Component({
  selector: 'app-form-item',
  templateUrl: './form-item.component.html',
  styleUrls: ['./form-item.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormItemComponent implements OnInit {

  @Input() question: FormBase<string>=null;
  
  @Input() form: FormGroup;
  get isValid() { return this.form.controls[this.question.key].valid; }
  get values() { 
    let ret = this.form.controls[this.question.key]?.value
    if(Array.isArray(ret)){
      return ret
    }else{
      return [ret]
    }
  }
  constructor() { }

  ngOnInit(): void {
  }
}
