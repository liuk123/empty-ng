import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {filter} from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class HttpService {

  constructor(private http: HttpClient) {
  }

  /** GET请求处理（一般用于获取数据） **/
  get(url: string, httpOptions: any): Observable<any> {
    return this.http.get<any>(url, httpOptions)
  }

  /** POST请求处理（一般用于保存数据） **/
  post(url: string, data: any = {}, httpOptions: any): Observable<any> {
    return this.http.post<any>(url, data, httpOptions)
  }

  /** PUT请求处理（一般用于更新数据） **/
  put(url: string, data: any = {}, httpOptions: any): Observable<any> {
    return this.http.put<any>(url, data, httpOptions)
  }

  /** DELETE请求处理（一般用于删除数据） **/
  delete(url: string, httpOptions: any): Observable<any> {
    return this.http.delete<any>(url, httpOptions)
  }

  
  /**
   * 文件上传
   * @param url：后台服务地址
   * @param files：文件
   * @param params:其他参数
   * @param method：请求方式，默认为post
   * @param headers：headers
   */
  upload(url: string, {files, params = null, fileKey = 'uploadFile', method = 'POST'}:FileParams={}, {headers=null}={}): Observable<any> {
    let formData: FormData = new FormData()

    for(let i=0; i< files.length; i++){
      formData.append(fileKey, files[i])
    }
    if(params){
      Object.keys(params).forEach(key => {
        formData.set(key, params[key]);
      });
    }
    const req = new HttpRequest(method, url, formData, {
      headers,
      reportProgress: true,
    });
    return this.http.request(req).pipe(
      // filter(e => e instanceof HttpResponse)
    )
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

export class FileParams{
  constructor(
    public files?: File[],
    public params?: Object,
    public fileKey?: string,
    public method?: 'POST'|'GET'
  ){}
}