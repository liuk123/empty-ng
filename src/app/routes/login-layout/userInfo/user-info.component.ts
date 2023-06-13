import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/biz/services/common/user.service';
import { MessageUtilService } from 'src/app/core/services/message-util.service';
import { ValidatorUtilService } from 'src/app/shared/utils/validator-util';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.less']
})
export class UserInfoComponent implements OnInit {
  form: FormGroup;
  avatars: string[]
  constructor(
    private fb: FormBuilder,
    private srv:UserService,
    private message: MessageUtilService,
    private validator: ValidatorUtilService) {
    const nums = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
    this.avatars = nums.map(d=>`avatar:svg-${d}`)
    this.form = this.fb.group({
      id: [null],
      username: [null, [ Validators.minLength(2), Validators.maxLength(8) ]],
      email: [null, [ this.validator.customValidator(this.validator.reg.email) ]],
      phone: [null, [ this.validator.customValidator(this.validator.reg.phone) ]],
      avatar: [null, Validators.required]
    })
  }

  ngOnInit(): void {
    this.srv.getCurrentUser().subscribe(v=>{
      if(v&&v.data){
        this.form.patchValue(v.data)
      }
    })
  }
  
  submitForm(value): void {
    Object.values(this.form.controls).forEach(v=>{
      v.markAsDirty();
      v.updateValueAndValidity()
    })
    if(!this.form.valid) return null
    this.srv.saveUserInfo(value).subscribe(res=>{
      if(res.isSuccess()){
        this.srv.reLoadUserInfo(res.data)
        this.message.info(res.resultMsg)
      }
    })
  }
}
