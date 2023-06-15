import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MenuService } from 'src/app/biz/services/common/menu.service';
import { UserService } from 'src/app/biz/services/common/user.service';
import { ValidatorUtilService } from 'src/app/shared/utils/validator-util';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.less']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  avatars: string[]
  constructor(
    private fb: FormBuilder,
    private srv:UserService,
    private router:Router,
    private menuService: MenuService,
    private validator: ValidatorUtilService) {
    const nums = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
    this.avatars = nums.map(d=>`avatar:svg-${d}`)
    const imgRandom= `avatar:svg-${Math.floor(Math.random()*16).toFixed(0)}`
    this.form = this.fb.group({
      username: [null, [ Validators.required, Validators.minLength(2), Validators.maxLength(18) ]],
      email: [null, [ Validators.required, this.validator.customValidator(this.validator.reg.email) ]],
      password: [null, [ Validators.required, Validators.minLength(6), Validators.maxLength(10) ]],
      avatar: [imgRandom]
    })
  }

  ngOnInit(): void {
  }

  submitForm(value): void {
    for (const i in this.form.controls) {
      this.form.controls[i].markAsDirty();
      this.form.controls[i].updateValueAndValidity();
    }
    if(!this.form.valid) return null
    this.srv.register(value).subscribe(res=>{
      if(res.isSuccess()){
        this.srv.reLoadUserInfo(res.data)
        this.menuService.loadMenuData(true).subscribe(res=>{
          this.menuService.setMenus(res.data)
          this.router.navigate(['./blog/home'])
        })
      }
    })
  }
}
