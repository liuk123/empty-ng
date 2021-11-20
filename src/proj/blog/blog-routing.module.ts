import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { BlogEditComponent } from './blog-edit/blog-edit.component';
import { BlogHomeComponent } from './blog-home/blog-home.component';
import { CollectBlogComponent } from './collect-blog/collect-blog.component';
import { FocusUserComponent } from './focus-user/focus-user.component';
import { MyBlogComponent } from './my-blog/my-blog.component';
import { SettingComponent } from './setting/setting.component';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    {
        path:'home',
        component: BlogHomeComponent,
        data:{
            keep:true,
        }
    },
    {
        path:'detail',
        component: BlogDetailComponent,
        data:{
            keep:false,
        }
    },{
        path:'edit',
        component: BlogEditComponent,
        data:{
            keep:true,
        }
    },{
        path:'operate',
        component: MyBlogComponent,
        data:{
            keep:true,
        }
    },{
        path:'collect',
        component: CollectBlogComponent,
        data:{
            keep:true,
        }
    },{
        path:'focus',
        component: FocusUserComponent,
        data:{
            keep:true,
        }
    },{
        path:'setting',
        component: SettingComponent,
        data:{
            keep:true,
        }
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class BlogRoutingModule {}
