import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { fromEvent } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';
import { Menu, BreadcrumbMenu } from 'src/app/biz/model/common/menu.model';
import { User } from 'src/app/biz/model/common/user.model';
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
  userInfo: User;
  isMobile: Boolean
  constructor(
    private menuSrv: MenuService,
    private userSrv: UserService,
    private router: Router,
  ) {
    this.isMobile = this.isMobileFn()
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
    this.menuSrv.breadcrumbEvent.subscribe(v=>{
      if(v?.length>0){
        this.breadcrumbMenus = v
      }
    })
    this.menuSrv.historyEvent.subscribe(v=>{
      if(v?.length>0){
        this.history = v
      }
    })
    this.userSrv.getCurrentUser().subscribe(v => {
      if (v?.data) {
        this.userSrv.reLoadUserInfo(v.data)
      }
    })
    this.menuSrv.menuEvent.subscribe(v => {
      this.menus = v
    })
    this.userSrv.userEvent.subscribe(v=>{
      this.userInfo = v
    });
    if(window){
      fromEvent(window, 'resize').pipe(
        debounceTime(100),
        map(()=> this.isMobileFn())
      ).subscribe(v=>{
        if(this.isMobile !== v){
          this.isMobile = v
        }
      })

    }
  }
  ngOnDestroy() {
  }
  isMobileFn(){
    return window && window.screen.availWidth < 720
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
  logout(){
    this.userSrv.logout().subscribe(res=>{
      if(res.isSuccess()){
        this.userSrv.reLoadUserInfo(null)
        this.menuSrv.loadNoUserMenuData().subscribe(res=>{
          this.menuSrv.setMenus(res)
          this.router.navigate(['./blog/home'])
        })
        
      }
    });

  }

}
