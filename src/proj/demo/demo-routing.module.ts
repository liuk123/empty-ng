import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoHomeComponent } from './demo-home/demo-home.component';

const routes: Routes = [
    { path: '', redirectTo: 'demo-home', pathMatch: 'full'},
    {
        path:'demo-home',
        component: DemoHomeComponent,
        data:{
            keep:true,
        }
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DemoRoutingModule {}
