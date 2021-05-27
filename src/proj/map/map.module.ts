import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapHomeComponent } from './map-home/map-home.component';
import { GdMapComponent } from './gd-map/gd-map.component';
import { MapRoutingModule } from './map-routing.module';
import { MapService } from './service/map.service';



@NgModule({
  declarations: [MapHomeComponent, GdMapComponent],
  imports: [
    CommonModule,
    MapRoutingModule
  ],
  providers:[MapService]
})
export class MapModule { }
