import { Component, OnInit, OnDestroy } from '@angular/core';
import { Menu, BreadcrumbMenu } from 'src/app/biz/model/common/menu.model';
import { MenuService } from 'src/app/biz/services/common/menu.service';
import { Subject } from 'rxjs';
import { takeUntil, filter } from 'rxjs/operators';
import { Router, NavigationEnd } from '@angular/router';
import { UserService } from 'src/app/biz/services/common/user.service';
import { AppReuseStrategy } from 'src/app/core/services/route-reuse';
import { JsUtilService } from 'src/app/shared/utils/js-util';
import { Meta, Title } from '@angular/platform-browser';
import { environment } from '../../../environments/environment';

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
    private menuSrv: MenuService,
    private router: Router,
    private userSrv: UserService,
    private jsUtil: JsUtilService,
    private title: Title,
    private meta: Meta,

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
      if(res.type=='detach'){
        // this.meta.removeTag("name='description'")
        // this.meta.removeTag("name='keywords'")
      }else if(this.router.url.includes(res.url)){
        if(res.type == 'attach'){
          let metaNames = environment.clearMeta
          let routeMetaStr = res.route.data.meta
          if(routeMetaStr===null){
            return null
          }
          let menuItem = this.jsUtil.findItem(this.menuSrv.menus, v=>v.route==res.url)
          let menuMeta = null, routeMeta = null
          if(menuItem && menuItem.meta){
            menuMeta = this.formatString(menuItem.meta)
          }
          if(routeMetaStr){
            routeMeta = this.formatString(routeMetaStr)
          }
          let meta = Object.assign({},environment.meta,routeMeta,menuMeta)

          this.title.setTitle(meta.title||menuItem&&menuItem.title+'-'+ environment.systemName||environment.systemName)
          this.meta.addTags(Object.keys(meta).map(key=>({name: key, content: meta[key]})),false)
          metaNames.forEach(v=>{
            if(!(v in meta)){
              this.meta.removeTag(`name='${v}'`)
            }
          })
        }
      }
    })
  }
  formatString(data){
    let ret = {}
    let temArr = null
    let reg = /(.*?)=(.*?)\&/g
    while((temArr = reg.exec(data))!=null){
      ret[temArr[1]] = temArr[2]
    }
    return ret
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
