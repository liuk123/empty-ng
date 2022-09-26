import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { G2Component } from './views/g2/g2.component';
import { Base64Component } from './views/base64/base64.component';
import { ToolHomeComponent } from './tool-home/tool-home.component';
import { ToolRoutingModule } from './tool-routing.module';
import { ColorComponent } from './views/color/color.component';
import { CanvasMapComponent } from './views/canvas-map/canvas-map.component';
import { DemoComponent } from './views/demo/demo.component';

@NgModule({
  declarations: [
    ToolHomeComponent,
    G2Component,
    Base64Component,
    ColorComponent,
    CanvasMapComponent,
    DemoComponent,
  ],
  imports: [
    SharedModule,
    ToolRoutingModule
  ]
})
export class ToolModule { }
