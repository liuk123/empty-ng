import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MenuService } from 'src/app/biz/services/common/menu.service';
import { UserService } from 'src/app/biz/services/common/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder,
    private menuService: MenuService,
    private srv:UserService,
    private router:Router) {
    this.form = this.fb.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true]
    });
  }

  ngOnInit(): void {
  }

  submitForm(value): void {
    Object.values(this.form.controls).forEach(v=>{
      v.markAsDirty();
      v.updateValueAndValidity();
    })
    if(this.form.valid == false) return null
    this.srv.login(value).subscribe(res=>{
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
