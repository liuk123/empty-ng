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

let views = [...viewMap.values()]

@NgModule({
  declarations: [
    DropDragHomeComponent,
    DropDragListComponent,
    ElDirective,
    DropDirective,
    DragDirective,
  ],
  imports: [
    SharedModule,
    DropDragRoutingModule,
  ],
  entryComponents: views,
  providers: [ViewService]
})
export class DropDragModule { }
