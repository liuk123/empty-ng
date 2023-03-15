import { NgModule } from '@angular/core';
import { NavigationHomeComponent } from './navigation-home/navigation-home.component';
import { NavigationRoutingModule } from './navigation-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { NavigationCustiomComponent } from './navigation-custiom/navigation-custiom.component';
import { NavigationService } from './service/navigation.service';
import { NavigationBookmarkComponent } from './navigation-bookmark/navigation-bookmark.component';
import { NavigationNewsComponent } from './navigation-news/navigation-news.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [NavigationHomeComponent, NavigationCustiomComponent, NavigationBookmarkComponent, NavigationNewsComponent, SearchComponent],
  imports: [
    SharedModule,
    NavigationRoutingModule
  ],
  providers: [NavigationService]
})
export class NavigationModule { }
