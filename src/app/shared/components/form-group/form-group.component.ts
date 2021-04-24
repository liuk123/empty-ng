import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormBase } from 'src/app/core/model/form-base';

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.less'],
})
export class FormGroupComponent implements OnInit {

  @Input('value') questions:FormBase<any>[] = [];
  @Output() submitEmit = new EventEmitter();

  validateForm!: FormGroup;
  
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.validateForm = this.toFormGroup(this.questions)
  }

  submitForm(): void {
    this.validateForm.markAllAsTouched();
    this.validateForm.updateValueAndValidity();
    this.submitEmit.emit(this.validateForm.valid);
  }

  resetForm(): void {
    this.validateForm.reset();
  }

  toFormGroup(questions: FormBase<string>[] ) {
    let group: any = {};
    group = questions.reduce((obj,v)=>{
        obj[v.key]=[v.value, v.valide]
        return obj
      },{})
    return this.fb.group(group);
  }
}
