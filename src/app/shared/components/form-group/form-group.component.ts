import { Component, OnInit, Input, Output, EventEmitter, ViewChild, TemplateRef, ElementRef, ViewContainerRef, QueryList, ViewChildren, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ElDirective } from '../../directive/el.directive';
import { NgUtilService } from '../../utils/ng-util';
import { FormBase } from '../form-item/form-item.component';
import { InputComponent } from '../form-modules/input/input.component';

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.less'],
})
export class FormGroupComponent implements OnInit, AfterViewInit {

  @ViewChild('dynamicForm', { read: ViewContainerRef, static: true}) dynamicForm: ViewContainerRef

  @Input() params:FormBase<any>[] = [];
  @Output() submitEmit = new EventEmitter();
  @Input() okText:string|null = null
  @Input() clearText:string|null = null
  @Input() span = 3
  @Input() set formData(val){
    this.validateForm.patchValue(val)
  }

  validateForm!: FormGroup;
  
  constructor(private fb: FormBuilder, private ngUtil: NgUtilService) {
  }
  ngAfterViewInit(){
  }
  ngOnInit(): void {
    this.validateForm = this.toFormGroup(this.params)
    
    this.params.forEach(v=>{
      let params = {
        componentRef: InputComponent,
        inputs: {
          question: v,
          form: this.validateForm,
          span: this.span
        }
      }
      this.ngUtil.loadComponent(params, this.dynamicForm)
    })
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
