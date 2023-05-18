import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RssHomeComponent } from './rss-home/rss-home.component';
import { RssRoutingModule } from './rss-routing.module';
import { RssService } from './services/rss.service';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    RssHomeComponent
  ],
  imports: [
    SharedModule,
    RssRoutingModule
  ],
  providers: [RssService]
})
export class RssModule { }
