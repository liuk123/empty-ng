import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/biz/services/user/user.service';
import { CommonService } from 'src/app/core/services/common.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder,
    private srv:UserService,
    private commonSrv: CommonService,
    private router:Router) {
    this.form = this.fb.group({
      phone: [null, [Validators.required]],
      password: [null, [Validators.required]],
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
    this.srv.login(value).subscribe(res=>{
      if(res.isSuccess()){
        this.commonSrv.reLoadUserInfo(res.data)
        this.router.navigate(['./blog/home'])
      }
    })
    
  }

}
