import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { G2Component } from './views/g2/g2.component';
import { Base64Component } from './views/base64/base64.component';
import { ToolHomeComponent } from './tool-home/tool-home.component';
import { ToolRoutingModule } from './tool-routing.module';
import { ColorComponent } from './views/color/color.component';
import { HtmlMarkedComponent } from './views/html-marked/html-marked.component';
import { DemoComponent } from './views/demo/demo.component';
import { DataProcessComponent } from './views/data-process/data-process.component';

@NgModule({
  declarations: [
    ToolHomeComponent,
    G2Component,
    Base64Component,
    ColorComponent,
    HtmlMarkedComponent,
    DemoComponent,
    DataProcessComponent,
  ],
  imports: [
    SharedModule,
    ToolRoutingModule
  ]
})
export class ToolModule { }
