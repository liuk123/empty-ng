import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {filter, map} from 'rxjs/operators';
import {MessageUtilService} from './message-util.service';
import {HttpResponseAlertStatus} from '../model/http-response-alert-status.model';
import {Result} from '../model/result.model';
import {environment} from 'src/environments/environment'

@Injectable({
  providedIn: 'root',
})
export class HttpUtilService {

  JsonHttpHeader = new HttpHeaders({'Content-Type':  'application/json'})
  DefaultHttpHeader = new HttpHeaders({'Content-Type':  'application/x-www-form-urlencoded'})
  DefaultHttpOptions={
    headers: this.JsonHttpHeader
  }
  constructor(private http: HttpClient,
              private messageUtil: MessageUtilService) {
  }

  /** GET请求处理（一般用于获取数据） **/
  get(url: string, httpOptions: any = {}, status: HttpResponseAlertStatus = environment.httpMsg): Observable<Result | any> {
    return this.http.get<Result | any>(url, httpOptions).pipe(
      map(restResponse => {
        return this.callback(restResponse, status);
      }),
      // catchError(this.handleError(url, [])),
    );
  }

  /** POST请求处理（一般用于保存数据） **/
  post(url: string, data: any = {}, httpOptions: any = this.DefaultHttpOptions, status: HttpResponseAlertStatus = environment.httpMsg): Observable<Result> {
    return this.http.post<Result>(url, data, httpOptions).pipe(
      map(restResponse => {
        return this.callback(restResponse, status);
      }),
      // catchError(this.handleError(url, [])),
    );
  }

  /** PUT请求处理（一般用于更新数据） **/
  put(url: string, data: any = {}, httpOptions: any = {}, status: HttpResponseAlertStatus = environment.httpMsg): Observable<Result | any> {
    return this.http.put<Result | any>(url, data, httpOptions).pipe(
      map(restResponse => {
        return this.callback(restResponse, status);
      }),
      // catchError(this.handleError(url, [])),
    );
  }

  /** DELETE请求处理（一般用于删除数据） **/
  delete(url: string, data: any = {}, status: HttpResponseAlertStatus = environment.httpMsg): Observable<Result | any> {
    return this.http.delete<Result | any>(url, data).pipe(
      map(restResponse => {
        return this.callback(restResponse, status);
      }),
      // catchError(this.handleError(url, [])),
    );
  }

  /**
   * 文件上传
   * @param url：后台服务地址
   * @param files：文件
   * @param params:其他参数
   * @param fileKey：文件key，默认为files
   * @param method：请求方式，默认为post
   * @param headers：headers
   */
  upload(url: string, {files = null, params = null,fileKey = 'files',method = 'POST'}={}, {headers=null}={}): Observable<any> {
    const formData = new FormData();
    if(files){
      files.forEach((file: any) => {
        formData.append(fileKey, file);
      });
    }
    if(params){
      Object.keys(params).forEach(key => {
        formData.set(key, params[key]);
      });
    }
    const req = new HttpRequest(method, url, formData, {
      headers,
      reportProgress:true,
    });
    return this.http.request(req).pipe(filter(e => e instanceof HttpResponse));
  }

  callback(response, status: HttpResponseAlertStatus) {
    response = Result.init(response);
    if (status !== HttpResponseAlertStatus.NONE) {
      this.messageUtil.default(response, status);
    }
    return response;
  }

  /**
   * 把对象转化成httpparams
   * @param params obj
   */
  encodeParams(params){
    return Object.keys(params)
        .filter(key=>params[key] != null)
        .reduce((sum:HttpParams,key:string)=>{
            return sum.append(key,params[key]);
        },new HttpParams());
  }
}
