import { NgModule } from '@angular/core';
import { MapHomeComponent } from './map-home/map-home.component';
import { GdMapComponent } from './gd-map/gd-map.component';
import { MapRoutingModule } from './map-routing.module';
import { MapService } from './service/map.service';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [MapHomeComponent, GdMapComponent],
  imports: [
    SharedModule,
    MapRoutingModule
  ],
  providers:[MapService]
})
export class MapModule { }
