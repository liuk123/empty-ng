import { Injectable, OnDestroy } from '@angular/core';
import { Menu, BreadcrumbMenu } from '../../model/common/menu.model';
import { BehaviorSubject, Observable, Subject, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { JsUtilService } from 'src/app/shared/utils/js-util';
import { takeUntil } from 'rxjs/operators';
import { Result } from '../../model/common/result.model';
import { Meta, Title } from '@angular/platform-browser';
import { AppReuseStrategy } from 'src/app/core/services/route-reuse';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { ConfigService } from '../../../core/services/config.service';
import menuData from '../../../../assets/data/menu.json'

@Injectable({
  providedIn: 'root',
})
export class MenuService implements OnDestroy{

  private unsubscribe$ = new Subject<void>();

  constructor(
    private http: HttpClient,
    private jsUtil: JsUtilService,
    private title: Title,
    private meta: Meta,
    private router: Router,
    private routerInfo: ActivatedRoute
  ) {
    // 路由监听 设置meta title
    AppReuseStrategy.routeReuseEvent.pipe(
      takeUntil(this.unsubscribe$)
    ).subscribe(res => {
      if (res.type == 'detach') {
        // this.meta.removeTag("name='description'")
        // this.meta.removeTag("name='keywords'")
      } else if (this.router.url.includes(res.url)) {
        if (res.type == 'attach') {
          let routeMetaStr = res.route.data.meta
          let meta
          if (routeMetaStr !== null) {
            let curMenu = this.jsUtil.findItem(this.menus, v => v.route == res.url)
            let menuMeta = null, routeMeta = null
            if (curMenu && curMenu.meta) {
              menuMeta = this.formatString(curMenu.meta)
            }
            routeMeta = this.formatString(routeMetaStr)
            meta = Object.assign({}, ConfigService.Config.meta, routeMeta, menuMeta)
            if (!meta.title) {
              meta.title = curMenu && curMenu.title + '-' + ConfigService.Config.systemName || ConfigService.Config.systemName
            }
            this.setMeta(meta)
            this.addHistoryMenu(meta.title)
            
          }
          this.setBreadcrumb(res.url, res.route)
        }
      }
    })
  }
  ngOnDestroy(): void {
    this.unsubscribe$.next()
    this.unsubscribe$.complete()
  }

  // 路由动画
  // routeAnimation: string = ''

  // 菜单
  topMenusId = Symbol()
  private _menus: Menu[] = [];
  get menus() {
    return this._menus
  }
  set menus(data) {
    if (data) {
      this._menus = this.jsUtil.setTree(data)
    }
  }

  // 历史浏览记录
  private historyMenus: { title: string, route: string, params: any }[] = []

  setMenus(data) {
    if (data) {
      this._menus = this.jsUtil.setTree(data)
      this.menuSource.next(this._menus)
    }
  }

  /**
   * 添加历史记录
   * @param title 
   */
  addHistoryMenu(title) {
    if (!this.historyMenus.some(v => v.title == title)) {
      let i = this.router.url.indexOf('?')
      this.historyMenus.unshift({
        title,
        route: i == -1 ? this.router.url : this.router.url.slice(0, i),
        params: this.routerInfo.snapshot.queryParams
      })
      if (this.historyMenus.length > 10) {
        this.historyMenus.pop()
      }
      this.historySource.next(this.historyMenus)
    }
  }
  delHistoryItem(index){
    this.historyMenus.splice(index,1)
  }

  private menuSource = new BehaviorSubject<Menu[]>(this.menus)
  menuEvent = this.menuSource.asObservable()

  private breadcrumbSource = new BehaviorSubject<BreadcrumbMenu[]>([])
  breadcrumbEvent = this.breadcrumbSource.asObservable()

  private historySource = new BehaviorSubject<any>(this.historyMenus);
  historyEvent = this.historySource.asObservable()

  // private routeAnimationSource = new BehaviorSubject<string>(this.routeAnimation)
  // routeAnimationEvent = this.routeAnimationSource.asObservable()

  /**
   * 设置meta
   * @param meta 
   */
  setMeta(meta) {
    this.title.setTitle(meta.title)
    Object.keys(meta).forEach(key => {
      if (key !== 'title' && meta[key]) {
        this.meta.updateTag({ name: key, content: meta[key] })
      }
    })
    let metaNames = ConfigService.Config.clearMeta
    metaNames.forEach(v => {
      if (!(v in meta)) {
        this.clearMetaItem(v)
      }
    })
  }
  clearMetaItem(name: string){
    this.meta.removeTag(`name="${name}"`)
  }
  formatString(data) {
    let ret = {}
    let temArr = null
    let reg = /(.*?)=(.*?)\&/g
    while ((temArr = reg.exec(data)) != null) {
      ret[temArr[1]] = temArr[2]
    }
    return ret
  }

  

  /**
   * 设置面包屑菜单
   * @param value 
   * @param routeSnapshot 
   */
  private setBreadcrumb(value, routeSnapshot?: ActivatedRouteSnapshot) {
    let path = routeSnapshot.routeConfig?.path
    if (path.length > 0 && ~path.indexOf('/:')) {
      path = path.slice(0, path.indexOf('/:'))
      value = value.slice(0, value.indexOf(path)+path.length)
    }
    const routerStr = value.indexOf('?') != -1 ? value.slice(0, value.indexOf('?')) : value
    let ret = this.setBreadcrumbItem(this.menus, routerStr)
    this.breadcrumbSource.next(ret);
  }

  private setBreadcrumbItem(data, routerStr: string, childrenList = []) {
    if (data instanceof Array) {
      for (let i = 0; i < data.length; i++) {
        let tem = this.setBreadcrumbItem(data[i], routerStr, data)
        if (tem) {
          return tem
        }
      }
    } else if (data instanceof Object) {
      if (data.route === routerStr) {
        return [{
          id: data.id,
          title: data.title,
          type: data.type,
          route: data.route,
          link: data.link,
          children: childrenList.filter(v => v.id !== data.id)
        }]
      }else{
        let tem = this.setBreadcrumbItem(data.children, routerStr)
        if (tem) {
          tem.unshift({
            id: data.id,
            title: data.title,
            type: data.type,
            children: childrenList.filter(v => v.id !== data.id)
          })
          return tem
        }
      }
    }
  }

  /**
   * 获取菜单接口数据
   * @returns 
   */
  loadMenuData(v:Boolean):Observable<Result> {
    if(v){
      return this.http.get<Result>(`/menu/`)
    }else{
      return of(new Result(1,'',menuData.data))
    }
  }
}
