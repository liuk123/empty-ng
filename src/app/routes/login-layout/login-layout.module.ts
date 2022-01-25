import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { LoginRoutingModule } from './login-routing.module';
import { UserInfoComponent } from './userInfo/user-info.component';

@NgModule({
  declarations: [LoginComponent, RegisterComponent, UserInfoComponent],
  imports: [
    SharedModule,
    LoginRoutingModule
  ]
})
export class LoginLayoutModule { }
