import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DropDragHomeComponent } from './drop-drag-home/drop-drag-home.component';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    {
        path:'home',
        component: DropDragHomeComponent,
        data:{
            keep:true,
        }
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DropDragRoutingModule {}
