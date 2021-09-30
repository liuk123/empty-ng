import { NgModule } from '@angular/core';
import { DemoHomeComponent } from './demo-home/demo-home.component';
import { DemoRoutingModule } from './demo-routing.module';

@NgModule({
  declarations: [DemoHomeComponent],
  imports: [
    DemoRoutingModule
  ]
})
export class DemoModule { }
