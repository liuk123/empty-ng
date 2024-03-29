import { NgModule } from '@angular/core';
import { GroupComponent } from './group/group.component';
import { UserComponent } from './user/user.component';
import { RoleComponent } from './role/role.component';
import { AuthComponent } from './auth/auth.component';
import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { AdminService } from './service/admin.service';
import { MenuComponent } from './menu/menu.component';
import { LinkComponent } from './link/link.component';
import { BookmarkComponent } from './bookmark/bookmark.component';
import { BookmarkCategoryComponent } from './bookmark-category/bookmark-category.component';
import { FriendComponent } from './friend/friend.component';
import { RssComponent } from './rss/rss.component';

@NgModule({
  declarations: [RssComponent, GroupComponent, UserComponent, RoleComponent, AuthComponent, MenuComponent, LinkComponent, BookmarkComponent,BookmarkCategoryComponent,FriendComponent],
  imports: [
    SharedModule,
    AdminRoutingModule
  ],
  providers:[AdminService]
})
export class AdminModule { }
