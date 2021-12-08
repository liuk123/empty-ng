import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { G2Component } from './components/g2/g2.component';
import { MenuBoxComponent } from './components/menu-box/menu-box.component';
import { DemoHomeComponent } from './demo-home/demo-home.component';
import { DragListDirective } from './demo-home/directive/drag-list.directive';
import { DraggableDirective } from './demo-home/directive/draggable.directive';
import { DemoRoutingModule } from './demo-routing.module';

@NgModule({
  declarations: [
    DemoHomeComponent,
    G2Component,
    MenuBoxComponent,
    DragListDirective,
    DraggableDirective
  ],
  imports: [
    SharedModule,
    DemoRoutingModule
  ]
})
export class DemoModule { }
