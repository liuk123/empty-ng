import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { AboutComponent } from './about/about.component';
import { ToolRoutingModule } from './website-routing.module';

@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
    SharedModule,
    ToolRoutingModule
  ]
})
export class WebsiteModule { }
