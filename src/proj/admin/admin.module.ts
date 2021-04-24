import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupComponent } from './group/group.component';
import { UserComponent } from './user/user.component';
import { RoleComponent } from './role/role.component';
import { AuthComponent } from './auth/auth.component';
import { AdminRoutingModule } from './admin-routing.module';



@NgModule({
  declarations: [GroupComponent, UserComponent, RoleComponent, AuthComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
