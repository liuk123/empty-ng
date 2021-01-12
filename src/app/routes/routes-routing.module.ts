import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BigScreenLayoutComponent } from '../theme/big-screen-layout/big-screen-layout.component';

const routes: Routes = [
  {
    path: '',
    component: BigScreenLayoutComponent,
    children: [
      { path: '', redirectTo: 'screen', pathMatch: 'full'},
      { 
        path: 'screen',
        loadChildren: () => 
          import('../../proj/boutique/boutique.module').then(m=>m.BoutiqueModule),
      },
      { 
        path: 'amap',
        loadChildren: () => 
          import('../../proj/amap/amap.module').then(m=>m.AmapModule),
      },
    ]
  },
  {
    path: 'user',
    loadChildren: () => 
          import('../theme/login-layout/login-layout.module').then(m=>m.LoginLayoutModule),
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