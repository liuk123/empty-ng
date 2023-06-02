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
import { RadioDialogComponent } from './views/data-process/radio-dialog/radio-dialog.component';
import { BookmarkComponent } from './views/bookmark/bookmark.component';
import { AjaxService } from './service/ajax.service';
import { NodeApiComponent } from './views/node-api/node-api.component';
import { ImageComponent } from './views/image/image.component';
import { PaletteService } from './service/palette.service';

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
    RadioDialogComponent,
    BookmarkComponent,
    NodeApiComponent,
    ImageComponent,
  ],
  providers:[ToolService,ObjectUtilService,AjaxService,PaletteService],
  imports: [
    SharedModule,
    ToolRoutingModule
  ]
})
export class ToolModule { }
