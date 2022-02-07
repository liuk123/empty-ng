import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImgToBase64Component } from './components/img-to-base64/img-to-base64.component';
import { ToolHomeComponent } from './tool-home/tool-home.component';

const routes: Routes = [
    { path: '', redirectTo: 'demo-home', pathMatch: 'full'},
    {
        path:'demo-home',
        component: ToolHomeComponent,
        data:{
            keep:true,
        }
    },{
        path:'img-to-base64',
        component: ImgToBase64Component,
        data:{
            keep:true,
        }
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ToolRoutingModule {}
