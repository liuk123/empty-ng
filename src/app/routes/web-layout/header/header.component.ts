import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzDrawerService } from 'ng-zorro-antd/drawer';
import { Subject } from 'rxjs';
import { mergeMap, takeUntil } from 'rxjs/operators';
import { Menu } from 'src/app/biz/model/common/menu.model';
import { User } from 'src/app/biz/model/common/user.model';
import { MenuService } from 'src/app/biz/services/common/menu.service';
import { UserService } from 'src/app/biz/services/common/user.service';
import { ConfigService } from 'src/app/core/services/config.service';
import { AppReuseStrategy } from 'src/app/core/services/route-reuse';
import { MenuTreeComponent } from 'src/app/shared/components/menu-tree/menu-tree.component';
import { JsUtilService } from 'src/app/shared/utils/js-util';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit, OnDestroy {
  
  title=ConfigService.Config.systemName

  unsub$ = new Subject()
  menus: Menu[]
  userInfo: User
  history = null

  constructor(
    private menuSrv: MenuService,
    private userSrv: UserService,
    private router: Router,
    private drawerService: NzDrawerService,
    private jsutil: JsUtilService,
  ) { 

  }

  ngOnInit(): void {
    this.menuSrv.menuEvent.pipe(takeUntil(this.unsub$)).subscribe(v => {
      this.menus = v
    })
    this.userSrv.userEvent.pipe(takeUntil(this.unsub$)).subscribe(v => {
      this.userInfo = v
    });
    this.menuSrv.historyEvent.pipe(takeUntil(this.unsub$)).subscribe(v => {
      if (v?.length > 0) {
        this.history = v
      }
    }) 

  }
  ngOnDestroy(): void {
    this.unsub$.next()
    this.unsub$.complete()
  }

  logout() {
    this.userSrv.logout().subscribe(res => {
      if (res.isSuccess()) {
        this.userSrv.reLoadUserInfo(null)
        this.menuSrv.loadMenuData(false).subscribe((res:any) => {
          this.menuSrv.setMenus(res.data)
          this.router.navigate(['./blog/home'])
        })

      }
    });
  }
  openMenuDrawer() {
    const cloneData = this.jsutil.clone(this.menus, (item) => {
      if (item.isMenuShow !== false) {
        return item
      }
    })
    const drawerRef = this.drawerService.create({
      nzTitle: 'cicode menu',
      nzContent: MenuTreeComponent,
      nzContentParams: {
        data: cloneData,
      }
    })
    drawerRef.afterOpen.pipe(
      mergeMap(() => drawerRef.getContentComponent().ckEvent),
      takeUntil(this.unsub$)
    ).subscribe(v => {
      if (v.type === 'router') {
        this.router.navigate([v.route])
        drawerRef.close()
      } else if (v.type === 'link') {
        window.open(v.link, '_blank')
        drawerRef.close()
      }
    })
  }
  fullScrean(){
    if (!document.fullscreenElement) {
      //进入页面全屏
      document.documentElement.requestFullscreen();
    } else {
      if (document.exitFullscreen) {
        //退出全屏
        document.exitFullscreen();
      }
    }
  }
  delHistoryItem(e, i, data) {
    e.preventDefault()
    this.menuSrv.delHistoryItem(i)
    AppReuseStrategy.delRoute(data.route)
  }
  goPage(url){
    window.open(url,'_blank')
  }
}
