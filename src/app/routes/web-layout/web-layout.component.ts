import { Component, OnInit, OnDestroy } from '@angular/core';
import { Menu, BreadcrumbMenu } from 'src/app/core/model/menu.model';
import { MenuService } from 'src/app/core/services/menu.service';
import { Subject } from 'rxjs';
import { takeUntil, filter } from 'rxjs/operators';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-web-layout',
  templateUrl: './web-layout.component.html'
})
export class WebLayoutComponent implements OnInit, OnDestroy {

  menus: Menu[]
  breadcrumbMenus: BreadcrumbMenu[] = [];
  private unsubscribe$ = new Subject<void>();

  constructor(
    menuSrv: MenuService,
    private router: Router,
  ) {
    this.menus= menuSrv.menus;
    /**
     * 面包屑菜单
     */
    this.router.events.pipe(
      filter((evt) => evt instanceof NavigationEnd),
      takeUntil(this.unsubscribe$)
    ).subscribe((v: NavigationEnd) => {
      menuSrv.setBreadcrumb(v.urlAfterRedirects)
      this.breadcrumbMenus = menuSrv.breadcrumbMenus;
      console.log(this.breadcrumbMenus)
    });
  }
  ngOnInit(): void {
  }
  ngOnDestroy(){
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }


}
