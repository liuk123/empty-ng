import { NgModule } from '@angular/core';
import { DropDragHomeComponent } from './drop-drag-home/drop-drag-home.component';
import { DropDragRoutingModule } from './drop-drag-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { DropDragListComponent } from './drop-drag-list/drop-drag-list.component';
import { ElDirective } from './directive/el.directive';
import { ViewService } from './service/views.service';
import { DropDirective } from './directive/drop.directive';
import { viewMap } from './views/view-config';
import { DragDirective } from './directive/drag.directive';
import { Drag2Component } from './views/drag2/drag2.component';
import { Drag1Component } from './views/drag1/drag1.component';

let views = [...viewMap.values()]

@NgModule({
  declarations: [
    DropDragHomeComponent,
    DropDragListComponent,
    ElDirective,
    DropDirective,
    DragDirective,

    Drag2Component,
    Drag1Component,
  ],
  imports: [
    SharedModule,
    DropDragRoutingModule,
  ],
  entryComponents: [],
  providers: [ViewService]
})
export class DropDragModule { }
