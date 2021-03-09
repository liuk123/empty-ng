import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationHomeComponent } from './navigation-home/navigation-home.component';
import { navigationRoutingModule } from './navigation-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { NavigationGalleryComponent } from './navigation-gallery/navigation-gallery.component';
import { BannerComponent } from './components/banner/banner.component';



@NgModule({
  declarations: [NavigationHomeComponent, NavigationGalleryComponent,BannerComponent],
  imports: [
    SharedModule,
    navigationRoutingModule
  ]
})
export class NavigationModule { }
