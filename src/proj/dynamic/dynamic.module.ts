import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicRoutingModule } from './dynamic-routing.module';
import { DynamicHomeComponent } from './dynamic-home/dynamic-home.component';
import { DynamicComponentService } from './service/dynamic-component.service';
import { ElDirective } from './directive/el.directive';
import { DynamicEditComponent } from './dynamic-edit/dynamic-edit.component';



@NgModule({
  declarations: [
    DynamicHomeComponent,
    ElDirective,
    DynamicEditComponent,
  ],
  imports: [
    CommonModule,
    DynamicRoutingModule
  ],
  providers:[DynamicComponentService]
})
export class DynamicModule { }
