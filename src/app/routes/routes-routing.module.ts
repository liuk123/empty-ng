import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WebLayoutComponent } from './web-layout/web-layout.component';

const routes: Routes = [
  {
    path: '',
    component: WebLayoutComponent,
    children: [
      { path: '', redirectTo: 'demo', pathMatch: 'full'},
      { 
        path: 'demo',
        loadChildren: () => 
          import('../../proj/demo/demo.module').then(m=>m.DemoModule),
      },
      { 
        path: 'components',
        loadChildren: () => 
          import('../../proj/components/components.module').then(m=>m.ComponentsModule),
      },
      { 
        path: 'dropdrag',
        loadChildren: () => 
          import('../../proj/drop-drag/drop-drag.module').then(m=>m.DropDragModule),
      },
    ]
  },
  {
    path: 'user',
    loadChildren: () => 
          import('./login-layout/login-layout.module').then(m=>m.LoginLayoutModule),
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes, {
        useHash: true,
        scrollPositionRestoration: 'top',
      }
    )],
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