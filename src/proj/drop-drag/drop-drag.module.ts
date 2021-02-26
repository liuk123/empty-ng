import { NgModule } from '@angular/core';
import { DropDragHomeComponent } from './drop-drag-home/drop-drag-home.component';
import { DropDragRoutingModule } from './drop-drag-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { DropDragListComponent } from './drop-drag-list/drop-drag-list.component';
import { viewMap } from './views/view-config';

const views = [...viewMap.values()]

@NgModule({
  declarations: [DropDragHomeComponent, DropDragListComponent],
  imports: [
    SharedModule,
    DropDragRoutingModule
  ],
  entryComponents: views
})
export class DropDragModule { }
