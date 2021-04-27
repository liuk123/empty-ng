import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { GroupComponent } from './group/group.component';
import { RoleComponent } from './role/role.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
    { path: '', redirectTo: 'user', pathMatch: 'full'},
    {
        path:'user',
        component: UserComponent,
        data:{
            keep:true,
        }
    },
    {
        path:'group',
        component: GroupComponent,
        data:{
            keep:true,
        }
    },
    {
        path:'role',
        component: RoleComponent,
        data:{
            keep:true,
        }
    },
    {
        path:'auth',
        component: AuthComponent,
        data:{
            keep:true,
        }
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule {}