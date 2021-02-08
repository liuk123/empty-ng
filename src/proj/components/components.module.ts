import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuBoxComponent } from './menu-box/menu-box.component';
import { ComponentsRoutingModule } from './components-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [MenuBoxComponent],
  imports: [
    SharedModule,
    ComponentsRoutingModule
  ]
})
export class ComponentsModule { }
