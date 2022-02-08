import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { AboutComponent } from './about/about.component';
import { ToolRoutingModule } from './website-routing.module';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AboutComponent,
    ContactComponent
  ],
  imports: [
    SharedModule,
    ToolRoutingModule
  ]
})
export class WebsiteModule { }