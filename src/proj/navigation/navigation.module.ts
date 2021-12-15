import { NgModule } from '@angular/core';
import { NavigationHomeComponent } from './navigation-home/navigation-home.component';
import { NavigationRoutingModule } from './navigation-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { NavigationGalleryComponent } from './navigation-gallery/navigation-gallery.component';
import { DragDirective } from './directive/drag.directive';
import { DropDirective } from './directive/drop.directive';
import { NavigationCustiomComponent } from './navigation-custiom/navigation-custiom.component';

@NgModule({
  declarations: [NavigationHomeComponent, NavigationGalleryComponent, DragDirective, DropDirective, NavigationCustiomComponent],
  imports: [
    SharedModule,
    NavigationRoutingModule
  ]
})
export class NavigationModule { }
