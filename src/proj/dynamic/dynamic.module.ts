import { ComponentFactoryResolver, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicRoutingModule } from './dynamic-routing.module';
import { DynamicHomeComponent } from './dynamic-home/dynamic-home.component';
import { DynamicComponentService } from './service/dynamic-component.service';
import { ElDirective } from './directive/el.directive';
import { DynamicEditComponent } from './dynamic-edit/dynamic-edit.component';
import { DropDirective } from './directive/drop.directive';
import { DragComponent } from './model/drag.component';
import { DragBaseModule } from './model/drag-base.module';
import { ViewService } from './service/view.service';

@NgModule({
  declarations: [
    DynamicHomeComponent,
    DynamicEditComponent,
    ElDirective,
    DropDirective,
    DragComponent
  ],
  imports: [
    CommonModule,
    DynamicRoutingModule
  ],
  providers:[DynamicComponentService, ViewService]
})
export class DynamicModule extends DragBaseModule {
  dynamicComponents = [DragComponent];

  constructor(componentFactoryResolver: ComponentFactoryResolver) {
    super(componentFactoryResolver);
  }
}
