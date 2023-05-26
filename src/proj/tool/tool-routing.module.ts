import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Base64Component } from './views/base64/base64.component';
import { ToolHomeComponent } from './tool-home/tool-home.component';
import { ColorComponent } from './views/color/color.component';
import { HtmlMarkedComponent } from './views/html-marked/html-marked.component';
import { DemoComponent } from './views/demo/demo.component';
import { DataProcessComponent } from './views/data-process/data-process.component';
import { CategoryComponent } from './views/category/category.component';
import { DevTransformComponent } from './views/dev-transform/dev-transform.component';
import { ExcelComponent } from './views/excel/excel.component';
import { BookmarkComponent } from './views/bookmark/bookmark.component';
import { NodeApiComponent } from './views/node-api/node-api.component';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    {
        path:'home',
        component: ToolHomeComponent,
        children:[
            { path: '', redirectTo: 'base64', pathMatch: 'full'},
            {
                path:'base64',
                component: Base64Component,
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
                path:'html-marked',
                component: HtmlMarkedComponent,
                data:{
                    keep:false,
                },
            },
            {
                path:'demo',
                component: DemoComponent,
                data:{
                    keep:true,
                },
            },
            {
                path:'data-process',
                component: DataProcessComponent,
                data:{
                    keep:true,
                },
            },
            {
                path:'category',
                component: CategoryComponent,
                data:{
                    keep:true,
                },
            },
            {
                path:'dev-transform',
                component: DevTransformComponent,
                data:{
                    keep:true,
                },
            },
            {
                path:'excel',
                component: ExcelComponent,
                data:{
                    keep:true,
                },
            },
            {
                path:'bookmark',
                component: BookmarkComponent,
                data:{
                    keep:true,
                },
            },
            {
                path:'nodeapi',
                component: NodeApiComponent,
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
