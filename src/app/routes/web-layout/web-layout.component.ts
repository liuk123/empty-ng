import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { NzDrawerService } from 'ng-zorro-antd/drawer';
import { fromEvent, Subject } from 'rxjs';
import { debounceTime, map, mergeMap, takeUntil } from 'rxjs/operators';
import { Menu, BreadcrumbMenu } from 'src/app/biz/model/common/menu.model';
import { User } from 'src/app/biz/model/common/user.model';
import { ConfigService } from 'src/app/biz/services/common/config.service';
import { MenuService } from 'src/app/biz/services/common/menu.service';
import { UserService } from 'src/app/biz/services/common/user.service';
import { AppReuseStrategy } from 'src/app/core/services/route-reuse';
import { MenuTreeComponent } from 'src/app/shared/components/menu-tree/menu-tree.component';
import { JsUtilService } from 'src/app/shared/utils/js-util';

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
  unsub$ = new Subject()
  constructor(
    private menuSrv: MenuService,
    private userSrv: UserService,
    private router: Router,
    private drawerService: NzDrawerService,
    private jsutil: JsUtilService,
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
    if(ConfigService.Config.isBrowser){
      fromEvent(window, 'resize').pipe(
        debounceTime(100),
        map(()=> this.isMobileFn()),
        takeUntil(this.unsub$)
      ).subscribe(v=>{
        if(this.isMobile !== v){
          this.isMobile = v
        }
      })

    }
  }
  ngOnDestroy() {
    this.unsub$.next()
    this.unsub$.unsubscribe()
  }
  isMobileFn(){
    return ConfigService.Config.isBrowser && window.screen.availWidth < 720
  }
  delHistoryItem(e,i,data){
    e.preventDefault()
    this.menuSrv.delHistoryItem(i)
    AppReuseStrategy.delRoute(data.route)
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
  openMenuDrawer(){
    const cloneData = this.jsutil.clone(this.menus, (item)=>{
      if(item.isMenuShow!==false){
        return item
      }
    })
    const drawerRef = this.drawerService.create({
      nzTitle:'cicode menu',
      nzContent: MenuTreeComponent,
      nzContentParams: {
        data: cloneData,
      }
    })
    drawerRef.afterOpen.pipe(
      mergeMap(()=>drawerRef.getContentComponent().ckEvent),
      takeUntil(this.unsub$)
    ).subscribe(v=>{
      if(v.type==='router'){
        this.router.navigate([v.route])
        drawerRef.close()
      }else if(v.type==='link'){
        window.open(v.link,'_blank')
        drawerRef.close()
      }
    })
  }

}
