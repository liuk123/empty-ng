import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
export class FormBase<T> {
  value: T;
  key: string;
  label: string;
  controlType: ControlType;
  type?: string;
  options?: { key: string, value: string }[];
  placeHolder?: string;
  disabled?: boolean;
  valide?: any[];

  constructor(options: {
      value?: T,
      key?: string,
      label?: string,
      valide?: any[],
      controlType?: ControlType,
      type?: string,
      placeHolder?: string,
      disabled?: boolean
  } = {}) {
      this.value = options.value;
      this.key = options.key || '';
      this.label = options.label || '';
      this.valide = options.valide||[];
      this.controlType = options.controlType || 'textbox';
      this.type= options.type||'text',
      this.placeHolder = options.placeHolder||'',
      this.disabled = options.disabled||false
  }
}
type ControlType = 'textbox'
  |'dropdown'
  |'rangePicker';
  
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
