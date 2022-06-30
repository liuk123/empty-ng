import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImgToBase64Component } from './views/img-to-base64/img-to-base64.component';
import { ToolHomeComponent } from './tool-home/tool-home.component';
import { ColorComponent } from './views/color/color.component';
import { CanvasMapComponent } from './views/canvas-map/canvas-map.component';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    {
        path:'home',
        component: ToolHomeComponent,
        children:[
            { path: '', redirectTo: 'img-to-base64', pathMatch: 'full'},
            {
                path:'img-to-base64',
                component: ImgToBase64Component,
                data:{
                    keep:false,
                },
            },
            {
                path:'color',
                component: ColorComponent,
                data:{
                    keep:true,
                },
            },
            {
                path:'canvas-map',
                component: CanvasMapComponent,
                data:{
                    keep:true,
                },
            }
        ],
        data:{
            keep:true,
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ToolRoutingModule {}
