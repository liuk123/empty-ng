import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DynamicEditComponent } from './dynamic-edit/dynamic-edit.component';
import { DynamicHomeComponent } from './dynamic-home/dynamic-home.component';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    {
        path:'home',
        component: DynamicHomeComponent,
        data:{
            keep:false,
            meta: null
        }
    },{
        path:'edit',
        component: DynamicEditComponent,
        data:{
            keep:false,
            meta: null
        }
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DynamicRoutingModule {}
