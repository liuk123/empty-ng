import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { Base64Component } from './views/base64/base64.component';
import { ToolHomeComponent } from './tool-home/tool-home.component';
import { ToolRoutingModule } from './tool-routing.module';
import { ColorComponent } from './views/color/color.component';
import { HtmlMarkedComponent } from './views/html-marked/html-marked.component';
import { DemoComponent } from './views/demo/demo.component';
import { DataProcessComponent } from './views/data-process/data-process.component';
import { CategoryComponent } from './views/category/category.component';
import { DevTransformComponent } from './views/dev-transform/dev-transform.component';
import { ToolService } from './service/tool.service';
import { ExcelComponent } from './views/excel/excel.component';
import { ObjectUtilService } from './service/object-util.service';

@NgModule({
  declarations: [
    ToolHomeComponent,
    Base64Component,
    ColorComponent,
    HtmlMarkedComponent,
    DemoComponent,
    DataProcessComponent,
    CategoryComponent,
    DevTransformComponent,
    ExcelComponent,
  ],
  providers:[ToolService,ObjectUtilService],
  imports: [
    SharedModule,
    ToolRoutingModule
  ]
})
export class ToolModule { }
