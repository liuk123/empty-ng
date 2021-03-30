import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/biz/services/user/user.service';
import { CommonService } from 'src/app/core/services/common.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.less']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private srv:UserService,
    private commonSrv: CommonService,
    private router:Router) {
    this.form = this.fb.group({
      username: [null, [ Validators.required, Validators.minLength(2), Validators.maxLength(8) ]],
      phone: [null, [ Validators.required, Validators.minLength(11), Validators.maxLength(12) ]],
      password: [null, [ Validators.required, Validators.minLength(6), Validators.maxLength(10) ]],
    });
  }

  ngOnInit(): void {
  }

  submitForm(value): void {
    for (const i in this.form.controls) {
      this.form.controls[i].markAsDirty();
      this.form.controls[i].updateValueAndValidity();
    }
    if(this.form.valid == false) return null
    this.srv.register(value).subscribe(res=>{
      if(res.isSuccess()){
        this.commonSrv.reLoadUserInfo(res.data)
        this.router.navigate(['./blog/home']);
      }
    })
  }
}
