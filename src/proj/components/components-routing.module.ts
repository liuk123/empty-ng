import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuBoxComponent } from './menu-box/menu-box.component';

const routes: Routes = [
    { path: '', redirectTo: 'menu-box', pathMatch: 'full'},
    {
        path:'menu-box',
        component: MenuBoxComponent,
        data:{
            keep:true,
        }
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ComponentsRoutingModule {}
