import { Component, OnInit } from '@angular/core';
import { Form, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.less']
})
export class SettingComponent implements OnInit {

  categoryValue = null
  validateForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      categoryList: this.fb.array([])
    });
  }
  get categoryList(){
    return this.validateForm.get('categoryList') as FormArray
  }
  addCategory(): void {
    if(!this.categoryValue){
      return null
    }
    this.categoryList.push(this.fb.control(this.categoryValue))
    this.categoryValue = null
  }
  removeCategory(i): void {
    this.categoryList.removeAt(i)
  }
  editCategory(): void {
  }
}
