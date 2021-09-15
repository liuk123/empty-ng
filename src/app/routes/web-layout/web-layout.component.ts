import { Component, OnInit, OnDestroy } from '@angular/core';
import { Menu, BreadcrumbMenu } from 'src/app/biz/model/common/menu.model';
import { MenuService } from 'src/app/biz/services/common/menu.service';
import { Subject } from 'rxjs';
import { takeUntil, filter } from 'rxjs/operators';
import { Router, NavigationEnd } from '@angular/router';
import { HttpUtilService } from 'src/app/biz/services/common/http-util.service';
import { UserService } from 'src/app/biz/services/common/user.service';

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
    private http: HttpUtilService,
    private userSrv: UserService,
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
    });
  }
  ngOnInit(): void {
    this.http.get(`/api/user/currentUser`).subscribe(v=>{
      if(v&&v.data){
        this.userSrv.reLoadUserInfo(v.data)
      }
    })
  }
  ngOnDestroy(){
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }


}
