import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicRoutingModule } from './dynamic-routing.module';
import { DynamicHomeComponent } from './dynamic-home/dynamic-home.component';
import { DynamicComponentService } from './service/dynamic-component.service';
import { ElDirective } from './directive/el.directive';



@NgModule({
  declarations: [
    DynamicHomeComponent,
    ElDirective,
  ],
  imports: [
    CommonModule,
    DynamicRoutingModule
  ],
  providers:[DynamicComponentService]
})
export class DynamicModule { }
