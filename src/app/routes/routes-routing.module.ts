import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './error-page/page-not-found';
import { WebLayoutComponent } from './web-layout/web-layout.component';
import { environment } from 'src/environments/environment';
import { FullLayoutComponent } from './full-layout/full-layout.component';

const routes: Routes = [
  {
    path: '',
    component: WebLayoutComponent,
    children: [
      { path: '', redirectTo: 'blog', pathMatch: 'full' },
      {
        path: 'demo',
        loadChildren: () =>
          import('../../proj/demo/demo.module').then(m => m.DemoModule),
      },
      {
        path: 'components',
        loadChildren: () =>
          import('../../proj/components/components.module').then(m => m.ComponentsModule),
      },
      {
        path: 'drag',
        loadChildren: () =>
          import('../../proj/drop-drag/drop-drag.module').then(m => m.DropDragModule),
      },
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
    ]
  },
  {
    path: 'full',
    component: FullLayoutComponent,
    children: [
      {
        path: 'map',
        loadChildren: () =>
          import('../../proj/map/map.module').then(m => m.MapModule),
      },
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
      scrollPositionRestoration: 'top',
      initialNavigation: 'enabled',
      useHash: environment.useHash
    })],
  exports: [RouterModule],
})
export class RouteRoutingModule { }
// router.events.pipe(
//   *       filter((e: Event): e is Scroll => e instanceof Scroll)
//   *     ).subscribe(e => {
//   *       if (e.position) {
//   *         // backward navigation
//   *         viewportScroller.scrollToPosition(e.position);
//   *       } else if (e.anchor) {
//   *         // anchor navigation
//   *         viewportScroller.scrollToAnchor(e.anchor);
//   *       } else {
//   *         // forward navigation
//   *         viewportScroller.scrollToPosition([0, 0]);
//   *       }
//   *     });