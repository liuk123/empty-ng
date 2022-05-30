import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogHomeComponent } from './blog-home/blog-home.component';
import { TagsComponent } from './components/tags/tags.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { ArticleService } from './services/article.service';
import { CommentService } from './services/comment.service';
import { BlogEditComponent } from './blog-edit/blog-edit.component';
import { MyBlogComponent } from './my-blog/my-blog.component';
import { CollectBlogComponent } from './collect-blog/collect-blog.component';
import { FocusUserComponent } from './focus-user/focus-user.component';
import { CategoryEditComponent } from './category-edit/category-edit.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [
    BlogHomeComponent,
    TagsComponent,
    BlogDetailComponent,
    BlogEditComponent,
    MyBlogComponent,
    CollectBlogComponent,
    FocusUserComponent,
    CategoryEditComponent,
    CardComponent,
  ],
  imports: [
    SharedModule,
    BlogRoutingModule,
  ],
  providers:[ArticleService,CommentService]
})
export class BlogModule { }
