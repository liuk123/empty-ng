import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DynamicRoutingModule {}
