import { NgModule } from '@angular/core';
import { MenuBoxComponent } from './menu-box/menu-box.component';
import { ComponentsRoutingModule } from './components-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { G2Component } from './g2/g2.component';
import { ComponentsHomeComponent } from './components-home/components-home.component';



@NgModule({
  declarations: [MenuBoxComponent, G2Component, ComponentsHomeComponent],
  imports: [
    SharedModule,
    ComponentsRoutingModule
  ]
})
export class ComponentsModule { }
