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
import { catchError, tap } from 'rxjs/operators';
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
  private checkStatus(ev: HttpResponseBase): void {
    if ((ev.status >= 200 && ev.status < 300) || ev.status === 401) {
      return null
    }

    const errortext = CODEMESSAGE[ev.status] || ev.statusText;
    this.message.error(`请求错误 ${ev.status}: ${ev.url}。 ${errortext}`)
  }
  
  // private handleData(ev: HttpResponseBase, req: HttpRequest<any>, next: HttpHandler): Observable<any> {
  //   this.checkStatus(ev);
  //   // 业务处理：一些通用操作
  //   switch (ev.status) {
  //     case 200:
  //       // console.log(123)
  //       // if (ev instanceof HttpResponse) {
  //       //   let body = ev.body
  //       //   if(body && body.resultCode == 0){
  //       //     this.message.error(body.resultMsg)
  //       //     return throwError({});
  //       //   }
  //       // }else{

  //       // }


  //       // 业务层级错误处理，以下是假定restful有一套统一输出格式（指不管成功与否都有相应的数据格式）情况下进行处理
  //       // 例如响应内容：
  //       //  错误内容：{ status: 1, msg: '非法参数' }
  //       //  正确内容：{ status: 0, response: {  } }
  //       // 则以下代码片断可直接适用
  //       // if (ev instanceof HttpResponse) {
  //       //   const body = ev.body;
  //       //   if (body && body.status !== 0) {
  //       //     this.injector.get(NzMessageService).error(body.msg);
  //       //     // 注意：这里如果继续抛出错误会被行254的 catchError 二次拦截，导致外部实现的 Pipe、subscribe 操作被中断，例如：this.http.get('/').subscribe() 不会触发
  //       //     // 如果你希望外部实现，需要手动移除行254
  //       //     return throwError({});
  //       //   } else {
  //       //     // 忽略 Blob 文件体
  //       //     if (ev.body instanceof Blob) {
  //       //        return of(ev);
  //       //     }
  //       //     // 重新修改 `body` 内容为 `response` 内容，对于绝大多数场景已经无须再关心业务状态码
  //       //     return of(new HttpResponse(Object.assign(ev, { body: body.response })));
  //       //     // 或者依然保持完整的格式
  //       //     return of(ev);
  //       //   }
  //       // }
  //       break;
  //     case 401:
  //       // if (this.refreshTokenEnabled && this.refreshTokenType === 're-request') {
  //       //   return this.tryRefreshToken(ev, req, next);
  //       // }
  //       // this.toLogin();
  //       break;
  //     case 403:
  //     case 404:
  //     case 500:
  //       // this.goTo(`/exception/${ev.status}`);
  //       break;
  //     default:
  //       if (ev instanceof HttpErrorResponse) {
  //         console.warn(
  //           '未可知错误，大部分是由于后端不支持跨域CORS或无效配置引起',
  //           ev
  //         );
  //       }
  //       break;
  //   }
  //   if (ev instanceof HttpErrorResponse) {
  //     return throwError(ev);
  //   } else {
  //     return of(ev);
  //   }
  // }


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
    
    // let headers={}
    // if(req.method !=='GET'){
    //   headers['X-XSRF-TOKEN'] = this.getCookie('XSRF-TOKEN')
    //   headers['app_key'] = 'l34o1'+ String(new Date().getDate()).padStart(2, '0') + Math.floor(Math.random()*1000000+0.5)
    // } 
    // const resetReq = req.clone({url, setHeaders: headers})
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
      // this.httpLog.reduceHttp()
      return of(new HttpResponse({body: {}}))
    }
    return next.handle(resetReq).pipe(
      catchError((err: HttpErrorResponse) => {
        if(!this.serverUrl){
          this.httpLog.reduceHttp()
        }
        this.checkStatus(err);
        if (err instanceof HttpErrorResponse) {
          return throwError(err);
        } else {
          return of(err);
        }
      }),
      tap(ev => {
        if (ev instanceof HttpResponse) {
          // 服务器或浏览器端的白名单进行缓存
          if(this.serverUrl||
            ConfigService.Config.browserCacheList.some(item=>{
              const reg = new RegExp(`^${item}$`)
              return reg.test(req.method + '_' + apiUrlWithParams)
            })
          ){
            this.state.set(key, <any>ev)
          }
          if(!this.serverUrl){
            this.httpLog.reduceHttp()
          }
        }
      }),
    );
  }
}
