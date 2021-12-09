import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationHomeComponent } from './navigation-home/navigation-home.component';
import { NavigationRoutingModule } from './navigation-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { NavigationGalleryComponent } from './navigation-gallery/navigation-gallery.component';
import { DraggableDirective } from './directive/draggable.directive';



@NgModule({
  declarations: [NavigationHomeComponent, NavigationGalleryComponent, DraggableDirective],
  imports: [
    SharedModule,
    NavigationRoutingModule
  ]
})
export class NavigationModule { }
