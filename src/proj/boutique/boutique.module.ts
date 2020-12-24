import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoutiqueRoutingModule } from './boutique-routing.module';
import { BoutiqueComponent } from './boutique/boutique.component';
import { GdMapComponent } from './gd-map/gd-map.component';
import { BoutiqueService } from '../service/boutique.service';



@NgModule({
  declarations: [BoutiqueComponent, GdMapComponent],
  imports: [
    CommonModule,
    BoutiqueRoutingModule
  ],
  providers: [BoutiqueService]
})
export class BoutiqueModule { }
