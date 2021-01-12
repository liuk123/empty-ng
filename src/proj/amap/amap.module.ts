import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GdMapComponent } from './gd-map/gd-map.component';
import { AmapRoutingModule } from './amap-routing.module';
import { LocaMapComponent } from './loca-map/loca-map.component';



@NgModule({
  declarations: [GdMapComponent, LocaMapComponent],
  imports: [
    CommonModule,
    AmapRoutingModule
  ]
})
export class AmapModule { }
