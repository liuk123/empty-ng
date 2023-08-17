import {Injectable} from '@angular/core';
import {HttpClient, HttpParams, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

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
  // fileKey = 'uploadFile', 
  upload(url:string, data:any=null, {method = 'POST', headers=null}={}): Observable<any> {
    const req = new HttpRequest(method, url, data, {
      headers,
      reportProgress: true,
    });
    return this.http.request(req)
  }
  download(url:string, data:any=null, {method = 'POST', headers=null}={}): Observable<any> {
    const req = new HttpRequest(method, url, data, {
      headers,
      responseType: 'blob',
      reportProgress: true,
    });
    return this.http.request(req)
  }
  /**
   * jsonp 方式请求跨域数据(待测试)
   * @param url 
   * @param fn 
   */
  // getByJsonp(url: string, fn:Function){
  //   if(!window){
  //     return null
  //   }
  //   let fnName = 'JSONP_' + new Date().getTime()
  //   let node = document.createElement('script')
  //   window[fnName] = function(data:any){
  //     fn(data)
  //     node.remove()
  //     // document.body.removeChild(node)
  //   }
  //   let link = url + (url.indexOf('?')==-1?'?':'&') + 'callback=' + fnName
  //   node.src = link
  //   node.type = 'text/javascript'
  //   document.body.appendChild(node)
  // }

  /**
   * 把对象转化成httpparams
   * @param params obj
   */
  encodeParams(params){
    return Object.keys(params)
      .filter(key=>params[key] !== undefined)
      .reduce((sum:HttpParams,key:string)=>{
          return sum.append(key,params[key]);
      },new HttpParams());
  }
}

// export class FileParams{
//   constructor(
//     public files?: File[],
//     public params?: Object,
//     public fileKey?: string,
//     public method?: 'POST'|'GET'
//   ){}
// }