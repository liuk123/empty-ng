import { NgModule } from '@angular/core';
import { DropDragHomeComponent } from './drop-drag-home/drop-drag-home.component';
import { DropDragRoutingModule } from './drop-drag-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { DropDragListComponent } from './drop-drag-list/drop-drag-list.component';
// import { viewMap } from './views/view-config';
import { ElDirective } from './directive/el.directive';

// const views = [...viewMap.values()]

@NgModule({
  declarations: [
    DropDragHomeComponent,
    DropDragListComponent,
    ElDirective
  ],
  imports: [
    SharedModule,
    DropDragRoutingModule
  ],
  entryComponents: []
})
export class DropDragModule { }
