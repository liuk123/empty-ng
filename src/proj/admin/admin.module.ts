import { NgModule } from '@angular/core';
import { GroupComponent } from './group/group.component';
import { UserComponent } from './user/user.component';
import { RoleComponent } from './role/role.component';
import { AuthComponent } from './auth/auth.component';
import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { AdminService } from './service/admin.service';
import { RoleService } from './service/role.service';
import { GroupService } from './service/group.service';
import { AuthorityService } from './service/authority.service';

@NgModule({
  declarations: [GroupComponent, UserComponent, RoleComponent, AuthComponent],
  imports: [
    SharedModule,
    AdminRoutingModule
  ],
  providers:[AdminService,RoleService,GroupService,AuthorityService]
})
export class AdminModule { }
