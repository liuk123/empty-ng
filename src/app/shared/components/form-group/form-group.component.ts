import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ViewContainerRef, AfterViewInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormBase } from '../form-item/form-item.component';

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.less']
})
export class FormGroupComponent implements OnInit, AfterViewInit {

  @ViewChild('dynamicForm', { read: ViewContainerRef, static: true}) dynamicForm: ViewContainerRef

  hiddenParams:FormBase<any>[] = []
  _params:FormBase<any>[] = []
  @Input() set params(val){
    this.hiddenParams = []
    this._params = []
    val.forEach(v=>{
      if(v.type=='hidden'){
        this.hiddenParams.push(v)
      }else{
        this._params.push(v)
      }
    })
  };
  @Output() submitEmit = new EventEmitter();
  @Input() okText:string|null = null
  @Input() clearText:string|null = null
  @Input() span = 3
  @Input() set formData(val){
    if(this.validateForm){
      this.validateForm.patchValue(val)
    }
  }

  validateForm!: FormGroup;
  
  constructor(private fb: FormBuilder) {
  }
  ngAfterViewInit(){
  }
  ngOnInit(): void {
    this.validateForm = this.toFormGroup([...this._params, ...this.hiddenParams])
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
    let ret = this.getDeepItem(questions)
    return this.fb.group(ret);
  }
  getDeepItem(data){
    let ret = {}
    data.forEach(item=> {
      if(item.children){
        let keys = Object.keys(item.children)
        keys.forEach(key=>{
          let obj = this.getDeepItem(item.children[key])
          ret=Object.assign(ret, obj)
        })
      }
       ret[item.key]=[item.value, item.valide]
      return ret
    })
    return ret
  }
}
