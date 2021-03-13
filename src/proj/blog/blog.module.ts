import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { BlogRoutingModule } from './blog-routing.module';
import { ArtListComponent } from './components/art-list/art-list.component';
import { BlogHomeComponent } from './blog-home/blog-home.component';
import { TagsComponent } from './components/tags/tags.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { ArticleService } from './services/article.service';
import { CommentService } from './services/comment.service';
import { BlogEditComponent } from './blog-edit/blog-edit.component';



@NgModule({
  declarations: [ArtListComponent,BlogHomeComponent,TagsComponent,BlogDetailComponent,BlogEditComponent],
  imports: [
    SharedModule,
    BlogRoutingModule,
  ],
  providers:[ArticleService,CommentService]
})
export class BlogModule { }
