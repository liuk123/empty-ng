import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { BlogRoutingModule } from './blog-routing.module';
import { ArtListComponent } from './components/art-list/art-list.component';
import { BlogHomeComponent } from './blog-home/blog-home.component';
import { TagsComponent } from './components/tags/tags.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { ArticleService } from './services/article.service';
import { CommentService } from './services/comment.service';
import { BlogEditComponent } from './blog-edit/blog-edit.component';
import { OperateListComponent } from './my-blog/operate-list/operate-list.component';
import { MyBlogComponent } from './my-blog/my-blog.component';

@NgModule({
  declarations: [ArtListComponent,BlogHomeComponent,TagsComponent,BlogDetailComponent,BlogEditComponent,OperateListComponent,MyBlogComponent],
  imports: [
    SharedModule,
    BlogRoutingModule,
  ],
  providers:[ArticleService,CommentService]
})
export class BlogModule { }
