import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapHomeComponent } from './map-home/map-home.component';
import { GdMapComponent } from './gd-map/gd-map.component';



@NgModule({
  declarations: [MapHomeComponent, GdMapComponent],
  imports: [
    CommonModule
  ]
})
export class MapModule { }
