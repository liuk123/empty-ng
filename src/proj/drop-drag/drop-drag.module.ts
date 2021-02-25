import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropDragHomeComponent } from './drop-drag-home/drop-drag-home.component';
import { DropDragRoutingModule } from './drop-drag-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [DropDragHomeComponent],
  imports: [
    SharedModule,
    DropDragRoutingModule
  ]
})
export class DropDragModule { }
