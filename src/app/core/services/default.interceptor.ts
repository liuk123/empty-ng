import { Inject, Injectable, Optional, TransferState, makeStateKey } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse,
  HttpResponseBase,
  HttpResponse,
} from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, finalize, mergeMap } from 'rxjs/operators';
import { MessageUtilService } from './message-util.service';
import { ConfigService } from 'src/app/core/services/config.service';
import { HttpLogService } from './http-log.service';

const CODEMESSAGE: { [key: number]: string } = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。',
};


@Injectable()
export class DefaultInterceptor implements HttpInterceptor {

  constructor(
    private message: MessageUtilService,
    @Optional() @Inject('serverUrl') private serverUrl: string,
    private state: TransferState,
    private httpLog: HttpLogService
  ){}

  getCookie(name) {
    if(document){
      let arr = document.cookie.replace(/\s/g, "").split(';');
      for (let i = 0; i < arr.length; i++) {
        let tempArr = arr[i].split('=');
        if (tempArr[0] == name) {
          return decodeURIComponent(tempArr[1]);
        }
      }
    }
    return '';
  }
  private handleData(ev: HttpResponseBase): Observable<any>{
    if (ev instanceof HttpResponse) {
      let body = ev.body
      if(body && body.resultCode == 0){
        return throwError({statusText: body.resultMsg});
      }
    }
    
    return of(ev);
  }
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      this.message.error(CODEMESSAGE[error.status] || error.statusText)
      console.error(`请求错误:`, error.error);
    }
    return throwError(new Error('Something bad happened; please try again later.'));
  }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    let url = req.url;
    // 是否需要加 /api--->转
    let isApi = !url.startsWith('http') && !url.startsWith('/assets')
    if(this.serverUrl){ // 服务器渲染 url用绝对地址
      if(isApi){
        url = this.serverUrl + ConfigService.Config.baseUrl + url
      }else{
        url = this.serverUrl + url
      }
    }else{ // 浏览器渲染
      this.httpLog.addHttp()
      if(isApi){
        url = ConfigService.Config.baseUrl + url
      }
    }
    
    let resetReq:HttpRequest<any>
    if(req.method !=='GET'){
      resetReq = req.clone({url, setHeaders: {
        'X-XSRF-TOKEN': this.getCookie('XSRF-TOKEN'),
        'app_key': 'l34o1'+ String(new Date().getDate()).padStart(2, '0') + Math.floor(Math.random()*1000000+0.5)
      }})
    }else{
      resetReq = req.clone({url})
    }

    const apiUrlWithParams = isApi? ConfigService.Config.baseUrl + req.urlWithParams: req.urlWithParams
    const apiUrl = isApi? ConfigService.Config.baseUrl + req.url: req.url
    const key = makeStateKey(req.method + '_' + apiUrlWithParams)

    if(this.state.hasKey<any>(key)){
      const result = this.state.get<any>(key, null)
      // 浏览器端并且在白名单中，允许缓存。否则删掉缓存
      if(!this.serverUrl){
        if(!ConfigService.Config.browserCacheList.some(item=>{
          const reg = new RegExp(`^${item}$`)
          return reg.test(req.method + '_' + apiUrl)
        })){
          this.state.remove(key)
        }
        this.httpLog.reduceHttp()
      }
      return of(new HttpResponse({body: result.body}))
    }
    // config中黑名单 ssr不调用
    if(this.serverUrl && ConfigService.Config.ssrBlacklist.includes(req.method + '_' + apiUrl)){
      return of(new HttpResponse({body: {}}))
    }
    return next.handle(resetReq).pipe(
      mergeMap(ev => {
        if (ev instanceof HttpResponseBase) {
          if(this.serverUrl||
            ConfigService.Config.browserCacheList.some(item=>{
              const reg = new RegExp(`^${item}$`)
              return reg.test(req.method + '_' + apiUrlWithParams)
            })
          ){
            this.state.set(key, <any>ev)
          }
          return this.handleData(ev)
        }
        // 若一切都正常，则后续操作
        return of(ev);
      }),
      finalize(()=>{
        if(!this.serverUrl){
          this.httpLog.reduceHttp()
        }
      }),
      catchError(this.handleError.bind(this)),
      // tap(ev => {
      //   if (ev instanceof HttpResponse) {
      //     // 服务器或浏览器端的白名单进行缓存
      //     if(this.serverUrl||
      //       ConfigService.Config.browserCacheList.some(item=>{
      //         const reg = new RegExp(`^${item}$`)
      //         return reg.test(req.method + '_' + apiUrlWithParams)
      //       })
      //     ){
      //       this.state.set(key, <any>ev)
      //     }
      //     if(!this.serverUrl){
      //       this.httpLog.reduceHttp()
      //     }
      //   }
      // }),
    );
  }
}
