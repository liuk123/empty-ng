import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoHomeComponent } from './demo-home/demo-home.component';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    {
        path:'Demo',
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
