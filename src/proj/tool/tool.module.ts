import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { G2Component } from './views/g2/g2.component';
import { ImgToBase64Component } from './views/img-to-base64/img-to-base64.component';
import { ToolHomeComponent } from './tool-home/tool-home.component';
import { ToolRoutingModule } from './tool-routing.module';

@NgModule({
  declarations: [
    ToolHomeComponent,
    G2Component,
    ImgToBase64Component,
  ],
  imports: [
    SharedModule,
    ToolRoutingModule
  ]
})
export class ToolModule { }