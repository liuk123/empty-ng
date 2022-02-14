import { Component, OnInit, OnDestroy } from '@angular/core';
import { Menu, BreadcrumbMenu } from 'src/app/biz/model/common/menu.model';
import { MenuService } from 'src/app/biz/services/common/menu.service';
import { Subject } from 'rxjs';
import { takeUntil, filter } from 'rxjs/operators';
import { Router, NavigationEnd } from '@angular/router';
import { UserService } from 'src/app/biz/services/common/user.service';
import { AppReuseStrategy } from 'src/app/core/services/route-reuse';

@Component({
  selector: 'app-web-layout',
  templateUrl: './web-layout.component.html',
  styleUrls: ['./web-layout.component.less']
})
export class WebLayoutComponent implements OnInit, OnDestroy {

  menus: Menu[]
  breadcrumbMenus: BreadcrumbMenu[] = [];
  private unsubscribe$ = new Subject<void>();

  constructor(
    menuSrv: MenuService,
    private router: Router,
    private userSrv: UserService,
  ) {
    this.menus= menuSrv.menus;
    this.userSrv.getCurrentUser().subscribe(v=>{
      if(v&&v.data){
        this.userSrv.reLoadUserInfo(v.data)
      }
    })
    /**
     * 面包屑菜单
     */
    this.router.events.pipe(
      filter((evt) => evt instanceof NavigationEnd),
      takeUntil(this.unsubscribe$)
    ).subscribe((v: NavigationEnd) => {
      menuSrv.setBreadcrumb(v.urlAfterRedirects)
      this.breadcrumbMenus = menuSrv.breadcrumbMenus;
    });
    AppReuseStrategy.routeReuseEvent.pipe(
      takeUntil(this.unsubscribe$)
    ).subscribe(res=>{
      console.log(res)
      console.log(this.router.url)
      if(this.router.url === res.url){
        
      }
    })
  }
  ngOnInit(): void { }
  ngOnDestroy(){
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  toTop(){
    window.scroll({
      top:0,
      // behavior: 'smooth'
    })
  }

}
