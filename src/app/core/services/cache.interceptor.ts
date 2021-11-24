import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpResponse,
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { filter, tap } from 'rxjs/operators';

@Injectable()
export class CacheInterceptor implements HttpInterceptor {
  private static cachebleUrlList: string[] = [
    '/deliverboard/v1/userBoard/userInfo'
  ];
  private static cacheReqMap = new Map();

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    if(!this.canCacherReq(req)){
      return next.handle(req)
    }

    const cachedResponse = CacheInterceptor.cacheReqMap.get(req.url);
    if(cachedResponse){
      return of(cachedResponse);
    }

    return next.handle(req).pipe(
      filter(event => event instanceof HttpResponse),
      tap(event => {
        console.log(event, '响应事件');
        CacheInterceptor.cacheReqMap.set(req.url, event);
      })
    );
  }

  /**
   * 判断当前请求是否需要缓存
   * @param req 
   * @returns 
   */
  canCacherReq(req: HttpRequest<any>): boolean {
    return CacheInterceptor.cachebleUrlList.indexOf(req.url) !== -1;
  }

  /**
   * 查询缓存的接口列表
   * @returns 
   */
  static getCachedUrlList(): string[] {
    return [...CacheInterceptor.cacheReqMap.keys()];
  }

  /**
   * 外部主动刷新(删除缓存)
   * @param req 
   */
  static delCachedReq(req: string) {
    CacheInterceptor.cacheReqMap.delete(req);
  }
}
