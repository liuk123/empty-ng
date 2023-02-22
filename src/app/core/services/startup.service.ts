import { Injectable, Inject } from '@angular/core';
import { Observable, zip } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { I18NService } from '../i18n/i18n.service';
import { MenuService } from '../../biz/services/common/menu.service';
import { UserService } from 'src/app/biz/services/common/user.service';

export function StartupServiceFactory(startupService: StartupService) {
  return () => startupService.load();
}

@Injectable()
export class StartupService {
  constructor(
    private menuService: MenuService,
    @Inject("I18N_TOKEN") private i18n: I18NService,
    private userSrv: UserService) {}

  load(): Observable<void> {
    const defaultLang = this.i18n.defaultLang
    return zip(
      this.i18n.loadLangData(defaultLang),
      this.menuService.loadMenuData(),
      this.userSrv.getCurrentUser()
    ).pipe(
      // 接收其他拦截器后产生的异常消息
      catchError(res => {
        console.warn(`StartupService.load: Network request failed`, res);
        return [];
      }),
      map(([langData,menuData, userData])=>{
        // setting language data
        this.i18n.use(defaultLang, langData);
        this.menuService.setMenus(menuData?.data)
        this.userSrv.reLoadUserInfo(userData?.data)
      })
    )
  }
}
