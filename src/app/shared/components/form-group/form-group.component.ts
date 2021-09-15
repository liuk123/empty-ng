import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormBase } from '../form-item/form-item.component';

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.less'],
})
export class FormGroupComponent implements OnInit {

  @Input() params:FormBase<any>[] = [];
  @Output() submitEmit = new EventEmitter();
  @Input() okText:string|null = null
  @Input() clearText:string|null = null
  @Input() span = 3
  @Input() set formData(val){
    this.validateForm.patchValue(val)
  }

  validateForm!: FormGroup;
  
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.validateForm = this.toFormGroup(this.params)
  }

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    if(!this.validateForm.valid) return null
    this.submitEmit.emit(this.validateForm.value);
  }

  resetForm(): void {
    this.validateForm.reset();
  }

  toFormGroup(questions: FormBase<string>[] ) {
    let group: any = {};

    group = questions.reduce((obj,v,i)=>{
        obj[v.key]=[v.value, v.valide]
        return obj
      },{})
    return this.fb.group(group);
  }

}
