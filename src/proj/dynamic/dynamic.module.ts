import { NgModule } from '@angular/core';
import { DynamicRoutingModule } from './dynamic-routing.module';
import { DynamicHomeComponent } from './dynamic-home/dynamic-home.component';
import { DynamicComponentService } from './service/dynamic-component.service';
import { DynamicEditComponent } from './dynamic-edit/dynamic-edit.component';
import { DragComponent } from './model/drag.component';
import { DragBaseModule } from './model/drag-base.module';
import { ViewService } from './service/view.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { NodesTreeComponent } from './components/nodes-tree/nodes-tree.component';
import { SelectCompDialogComponent } from './dynamic-edit/select-comp-dialog/select-comp-dialog.component';
import { MarkLineComponent } from './model/mark-line';
import { UtilService } from './service/util';
import { MoveService } from './service/move.service';
import { DataService } from './service/data.service';
import { BlockComponent } from './model/block.component';
import { InlineComponent } from './model/inline.component';
import { DefaultDataService } from './service/defaultData.service';

@NgModule({
  declarations: [
    DynamicHomeComponent,
    DynamicEditComponent,
    DragComponent,
    BlockComponent,
    NodesTreeComponent,
    SelectCompDialogComponent,
    MarkLineComponent
  ],
  imports: [
    SharedModule,
    DynamicRoutingModule
  ],
  providers:[
    DynamicComponentService,
    ViewService,
    UtilService,
    MoveService,
    DataService,
    DefaultDataService
  ]
})
export class DynamicModule extends DragBaseModule {
  dynamicComponents={
    "app-drag": DragComponent,
    "app-block": BlockComponent,
    "app-inline": InlineComponent
  }
  constructor() {
    super();
  }
}
