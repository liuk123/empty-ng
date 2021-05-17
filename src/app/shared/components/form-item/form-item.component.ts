import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { FormGroup } from '@angular/forms';

export class FormBase<T> {
  value: T;
  key: string;
  label: string;
  controlType: ControlType;
  type?: any;
  options?: { name: string, code: string }[];
  placeHolder?: string;
  disabled?: boolean;
  valide?: any[];

  constructor(data: {
      value?: T,
      key?: string,
      label?: string, 
      valide?: any[],
      controlType?: ControlType,
      type?: Type,
      placeHolder?: string,
      disabled?: boolean
  } = {}) {
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
type Type = 'text'|'number'|'hidden' //input
      |'tags'|'multiple'|'default' //select
  
@Component({
  selector: 'app-form-item',
  templateUrl: './form-item.component.html',
  styleUrls: ['./form-item.component.less'],
})
export class FormItemComponent implements OnInit {

  @Input() question: FormBase<string>;
  
  @Input() form: FormGroup;
  get isValid() { return this.form.controls[this.question.key].valid; }
  constructor() { }

  ngOnInit(): void {
  }

}
