import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { BlogRoutingModule } from './blog-routing.module';
import { ArtListComponent } from './components/art-list/art-list.component';
import { BlogHomeComponent } from './blog-home/blog-home.component';
import { TagsComponent } from './components/tags/tags.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';



@NgModule({
  declarations: [ArtListComponent,BlogHomeComponent,TagsComponent,BlogDetailComponent],
  imports: [
    SharedModule,
    BlogRoutingModule,
  ]
})
export class BlogModule { }
