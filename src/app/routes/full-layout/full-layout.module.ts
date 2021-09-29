import { NgModule } from '@angular/core';
import { FullLayoutComponent } from './full-layout.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [FullLayoutComponent],
  imports: [
    SharedModule
  ]
})
export class FullLayoutModule { }
