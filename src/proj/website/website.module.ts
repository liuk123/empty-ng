import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { AboutComponent } from './about/about.component';
import { ToolRoutingModule } from './website-routing.module';
import { LinksComponent } from './links/links.component';
import { WebsiteService } from './service/website.service';

@NgModule({
  declarations: [
    AboutComponent,
    LinksComponent
  ],
  imports: [
    SharedModule,
    ToolRoutingModule
  ],
  providers:[WebsiteService]
})
export class WebsiteModule { }
