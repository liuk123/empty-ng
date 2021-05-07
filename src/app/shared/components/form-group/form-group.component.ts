import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { InputControlService } from 'src/app/core/services/form-base.service';
import { FormBase } from '../form-item/form-item.component';

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.less'],
})
export class FormGroupComponent implements OnInit {

  @Input('data') questions:FormBase<any>[] = [];
  @Output() submitEmit = new EventEmitter();
  @Input() okText:string|null = null
  @Input() clearText:string|null = null

  validateForm!: FormGroup;
  
  constructor(private ics: InputControlService) { }

  ngOnInit(): void {
    this.validateForm = this.ics.toFormGroup(this.questions)
  }

  submitForm(): void {
    this.validateForm.markAllAsTouched();
    this.validateForm.updateValueAndValidity();
    this.submitEmit.emit(this.validateForm.valid);
  }

  resetForm(): void {
    this.validateForm.reset();
  }

}
