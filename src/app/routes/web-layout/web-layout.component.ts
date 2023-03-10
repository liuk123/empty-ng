import { animate, animateChild, group, query, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { BreadcrumbMenu } from 'src/app/biz/model/common/menu.model';
import { MenuService } from 'src/app/biz/services/common/menu.service';

export const slideInAnimation =
  trigger('routeAnimations', [
    transition('* <=> *', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ], { optional: true }),
      query(':enter', [
        style({ top: '8em',opacity: 0 })
      ], { optional: true }),
      query(':leave', animateChild(), { optional: true }),
      group([
        query(':leave', [
          animate('200ms ease-out', style({ top: '-8em', opacity: 0 }))
        ], { optional: true }),
        query(':enter', [
          animate('300ms ease-out', style({ top: '0%', opacity: 1  }))
        ], { optional: true }),
        query('@*', animateChild(), { optional: true })
      ]),
    ])
  ]);

@Component({
  selector: 'app-web-layout',
  templateUrl: './web-layout.component.html',
  styleUrls: ['./web-layout.component.less'],
  animations: [
    slideInAnimation
  ]
})
export class WebLayoutComponent implements OnInit, OnDestroy {

  
  breadcrumbMenus: BreadcrumbMenu[] = [];
  unsub$ = new Subject()
  constructor(
    private menuSrv: MenuService,
  ) {
    /**
     * 面包屑菜单
     */
    // this.router.events.pipe(
    //   filter((evt) => evt instanceof NavigationEnd),
    //   takeUntil(this.unsubscribe$)
    // ).subscribe((v: NavigationEnd) => {
    //   this.menuSrv.setBreadcrumb(v.urlAfterRedirects)
    //   this.breadcrumbMenus = this.menuSrv.getBreadcrumbMenus();
    // });
  }

  ngOnInit(): void {
    this.menuSrv.breadcrumbEvent.pipe(takeUntil(this.unsub$)).subscribe(v => {
      if (v?.length > 0) {
        this.breadcrumbMenus = v
      }
    })
  }
  ngOnDestroy() {
    this.unsub$.next()
    this.unsub$.complete()
  }

  toTop() {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    })
  }
}
