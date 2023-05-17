import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RssHomeComponent } from './rss-home/rss-home.component';
import { RssRoutingModule } from './rss-routing.module';
import { RssService } from './services/rss.service';

@NgModule({
  declarations: [
    RssHomeComponent
  ],
  imports: [
    CommonModule,
    RssRoutingModule
  ],
  providers: [RssService]
})
export class RssModule { }
