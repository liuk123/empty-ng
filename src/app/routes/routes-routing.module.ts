import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './system-page/page-not-found';
import { WebLayoutComponent } from './web-layout/web-layout.component';
import { FullLayoutComponent } from './full-layout/full-layout.component';
import { ConfigService } from '../core/services/config.service';

const routes: Routes = [
  {
    path: '',
    component: WebLayoutComponent,
    children: [
      { path: '', redirectTo: 'blog', pathMatch: 'full' },
      {
        path: 'nav',
        loadChildren: () =>
          import('../../proj/navigation/navigation.module').then(m => m.NavigationModule),
      },
      {
        path: 'blog',
        loadChildren: () =>
          import('../../proj/blog/blog.module').then(m => m.BlogModule),
      },
      {
        path: 'admin',
        loadChildren: () =>
          import('../../proj/admin/admin.module').then(m => m.AdminModule),
      },
      {
        path: 'dynamic',
        loadChildren: () =>
          import('../../proj/dynamic/dynamic.module').then(m => m.DynamicModule),
      },{
        path: 'tool',
        loadChildren: () =>
          import('../../proj/tool/tool.module').then(m => m.ToolModule),
      },{
        path: 'website',
        loadChildren: () =>
          import('../../proj/website/website.module').then(m => m.WebsiteModule),
      }
    ]
  },
  {
    path: 'full',
    component: FullLayoutComponent,
    children: [
      {
        path: 'dynamic',
        loadChildren: () =>
          import('../../proj/dynamic/dynamic.module').then(m => m.DynamicModule),
      }
    ]
  },
  {
    path: 'user',
    loadChildren: () =>
      import('./login-layout/login-layout.module').then(m => m.LoginLayoutModule),
  },
  { path: '**', component:PageNotFoundComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      initialNavigation: 'enabledBlocking',
      useHash: ConfigService.Config.useHash
    })],
  exports: [RouterModule],
})
export class RouteRoutingModule { }