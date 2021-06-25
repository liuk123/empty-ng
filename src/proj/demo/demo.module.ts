import { NgModule } from '@angular/core';
import { DemoHomeComponent } from './demo-home/demo-home.component';
import { DemoRoutingModule } from './demo-routing.module';
import { G2chartDirective } from './directive/g2chart.directive';



@NgModule({
  declarations: [DemoHomeComponent, G2chartDirective],
  imports: [
    DemoRoutingModule
  ]
})
export class DemoModule { }
