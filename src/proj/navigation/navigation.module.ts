import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationHomeComponent } from './navigation-home/navigation-home.component';
import { NavigationRoutingModule } from './navigation-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { NavigationGalleryComponent } from './navigation-gallery/navigation-gallery.component';
import { DraggableDirective } from './directive/draggable.directive';
import { DropDirective } from './directive/drop.directive';

@NgModule({
  declarations: [NavigationHomeComponent, NavigationGalleryComponent, DraggableDirective, DropDirective],
  imports: [
    SharedModule,
    NavigationRoutingModule
  ]
})
export class NavigationModule { }
