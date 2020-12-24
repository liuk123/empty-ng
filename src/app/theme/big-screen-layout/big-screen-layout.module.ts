import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { BigScreenLayoutComponent } from './big-screen-layout.component';



@NgModule({
  declarations: [BigScreenLayoutComponent],
  imports: [
    SharedModule
  ]
})
export class BigScreenLayoutModule { }
