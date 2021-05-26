import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GdMapComponent } from './gd-map/gd-map.component';
import { MapHomeComponent } from './map-home/map-home.component';

const routes: Routes = [
    { path: '', redirectTo: 'map-home', pathMatch: 'full'},
    {
        path:'map-home',
        component: MapHomeComponent,
        data:{
        }
    },
    {
        path:'gd-map',
        component: GdMapComponent,
        data:{

        }
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MapRoutingModule {}
