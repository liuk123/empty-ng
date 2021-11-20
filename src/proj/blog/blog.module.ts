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
import { MyBlogComponent } from './my-blog/my-blog.component';
import { CollectBlogComponent } from './collect-blog/collect-blog.component';
import { FocusUserComponent } from './focus-user/focus-user.component';
import { SettingComponent } from './setting/setting.component';

@NgModule({
  declarations: [ArtListComponent,BlogHomeComponent,TagsComponent,BlogDetailComponent,BlogEditComponent,MyBlogComponent, CollectBlogComponent, FocusUserComponent, SettingComponent],
  imports: [
    SharedModule,
    BlogRoutingModule,
  ],
  providers:[ArticleService,CommentService]
})
export class BlogModule { }
