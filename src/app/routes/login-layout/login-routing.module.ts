import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserInfoComponent } from './userInfo/user-info.component';

const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full'},
    {
        path:'login',
        component: LoginComponent,
        data:{
            keep:false,
        }
    },
    {
        path:'register',
        component: RegisterComponent,
        data:{
            keep:false,
        }
    },
    {
        path:'userInfo',
        component: UserInfoComponent,
        data:{
            keep:false,
        }
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class LoginRoutingModule {}
