import { Component, OnInit, OnDestroy } from '@angular/core';
import { Menu, BreadcrumbMenu } from 'src/app/biz/model/common/menu.model';
import { MenuService } from 'src/app/biz/services/common/menu.service';
import { UserService } from 'src/app/biz/services/common/user.service';

@Component({
  selector: 'app-web-layout',
  templateUrl: './web-layout.component.html',
  styleUrls: ['./web-layout.component.less']
})
export class WebLayoutComponent implements OnInit, OnDestroy {

  menus: Menu[]
  breadcrumbMenus: BreadcrumbMenu[] = [];
  history = null
  constructor(
    private menuSrv: MenuService,
    private userSrv: UserService,
  ) {
    this.menuSrv.breadcrumbEvent.subscribe(v=>{
      this.breadcrumbMenus = v
    })
    this.menuSrv.historyEvent.subscribe(v=>{
      this.history = v
    })
    this.userSrv.getCurrentUser().subscribe(v => {
      if (v && v.data) {
        this.userSrv.reLoadUserInfo(v.data)
      }
    })
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
  }
  ngOnDestroy() {
  }

  delHistoryItem(e,i){
    e.preventDefault()
    this.menuSrv.delHistoryItem(i)
  }
  toTop() {
    window.scroll({
      top: 0,
      // behavior: 'smooth'
    })
  }

}
