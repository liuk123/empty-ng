import { BrowserModule } from '@angular/platform-browser';
// import { TransferHttpCacheModule } from '@nguniversal/common';

import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AppRoutesModule } from './routes/routes.module';
import { CoreModule } from './core/core.module';

// // #region i18n services
import { I18nHttpLoaderFactory, I18NService, StartupService, StartupServiceFactory } from './core';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

// // 加载i18n语言文件
const I18NSERVICE_MODULES = [
  TranslateModule.forRoot({
    loader: {
      provide: TranslateLoader,
      useFactory: I18nHttpLoaderFactory,
      deps: [HttpClient],
    },
  }),
];
//注入令牌，serveup.service.ts调用
const I18NSERVICE_PROVIDES = { provide: "I18N_TOKEN", useClass: I18NService, multi: false };
// #endregion

// #region Http Interceptors

import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { RouteReuseStrategy, RouterModule } from '@angular/router';
import { AppReuseStrategy } from './core/services/route-reuse';
import { DefaultInterceptor } from './core/services/default.interceptor';
import { CheckForUpdateService } from './core/services/check-for-update';
import { IntersectionObserverService } from './core/services/Intersection-observer.service';

const INTERCEPTOR_PROVIDES = [
  { provide: HTTP_INTERCEPTORS, useClass: DefaultInterceptor, multi: true },
];

const APPINIT_PROVIDES = [
  StartupService,
  {
    provide: APP_INITIALIZER,
    useFactory: StartupServiceFactory,
    deps: [StartupService],
    multi: true,
  }
];
// 监控窗口显示元素（懒加载图片）
export function IntersectionObserverFactory(intersectionObserverService:IntersectionObserverService){
  return intersectionObserverService.load()
}
const INTERSECTION_PROVIDES = {
  provide: 'INTERSECTIONOBSERVER',
  useFactory: IntersectionObserverFactory,
  deps: [IntersectionObserverService],
  multi: false
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    // SharedModule,
    CoreModule,
    RouterModule,
    AppRoutesModule,
    // 服务器渲染传递参数
    // BrowserTransferStateModule,
    // TransferHttpCacheModule,
    I18NSERVICE_MODULES,

    // ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production, registrationStrategy: 'registerImmediately' })
  ],
  providers: [
    ...INTERCEPTOR_PROVIDES,
    ...APPINIT_PROVIDES,
    I18NSERVICE_PROVIDES,
    INTERSECTION_PROVIDES,
    
    { provide: RouteReuseStrategy, useClass:  AppReuseStrategy},
    
    CheckForUpdateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
