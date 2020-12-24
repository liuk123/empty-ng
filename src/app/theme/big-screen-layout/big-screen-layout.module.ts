import { NgModule } from '@angular/core';
import { BigScreenRoutingModule } from './big-screen-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { LayoutComponent } from './layout/layout.component';



@NgModule({
  declarations: [LayoutComponent],
  imports: [
    SharedModule,
    BigScreenRoutingModule,
  ]
})
export class BigScreenLayoutModule { }
