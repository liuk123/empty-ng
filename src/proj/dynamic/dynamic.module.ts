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

@NgModule({
  declarations: [
    DynamicHomeComponent,
    DynamicEditComponent,
    DragComponent,
    NodesTreeComponent
  ],
  imports: [
    SharedModule,
    DynamicRoutingModule
  ],
  providers:[DynamicComponentService, ViewService]
})
export class DynamicModule extends DragBaseModule {
  dynamicComponents={
    "app-drag": DragComponent
  }
  constructor() {
    super();
  }
}
