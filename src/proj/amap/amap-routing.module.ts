import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GdMapComponent } from './gd-map/gd-map.component';


const routes: Routes = [
    { path: '', redirectTo: 'gd-map', pathMatch: 'full'},
    {
        path:'gd-map',
        component: GdMapComponent,
        data:{
            keep:false,
        }
    },
    {
        path:'loca-map',
        component: GdMapComponent,
        data:{
            keep:false,
        }
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AmapRoutingModule {}
