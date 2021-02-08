import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuBoxComponent } from './menu-box/menu-box.component';
import { ComponentsRoutingModule } from './components-routing.module';



@NgModule({
  declarations: [MenuBoxComponent],
  imports: [
    CommonModule,
    ComponentsRoutingModule
  ]
})
export class ComponentsModule { }
