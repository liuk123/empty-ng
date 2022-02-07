import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { G2Component } from './components/g2/g2.component';
import { ImgToBase64Component } from './components/img-to-base64/img-to-base64.component';
import { DemoHomeComponent } from './demo-home/demo-home.component';
import { DemoRoutingModule } from './demo-routing.module';

@NgModule({
  declarations: [
    DemoHomeComponent,
    G2Component,
    ImgToBase64Component,
  ],
  imports: [
    SharedModule,
    DemoRoutingModule
  ]
})
export class DemoModule { }
