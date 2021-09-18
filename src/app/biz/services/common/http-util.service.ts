import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { HttpService } from 'src/app/core/services/http.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Result } from '../../model/common/result.model';

@Injectable({
  providedIn: 'root',
})
export class HttpUtilService extends HttpService {
  
  JsonHttpHeader = new HttpHeaders({'Content-Type':  'application/json'})
  DefaultHttpHeader = new HttpHeaders({'Content-Type':  'application/x-www-form-urlencoded'})
  DefaultHttpOptions={
    headers: this.JsonHttpHeader
  }

  constructor(http: HttpClient){
    super(http)
  }

  /** GET请求处理（一般用于获取数据） **/
  get(url: string, httpOptions: any={}): Observable<any> {
    return super.get(url, httpOptions).pipe(
      map(response => {
        return Result.init(response)
      }),
    )
  }

  /** POST请求处理（一般用于保存数据） **/
  post(url: string, data: any=null, httpOptions: any = this.DefaultHttpOptions): Observable<any>{
    return super.post(url, data, httpOptions).pipe(
      map(response => {
        return Result.init(response)
      }),
    )
  }

  /** PUT请求处理（一般用于更新数据） **/
  put(url: string, data: any=null, httpOptions:any={}): Observable<any> {
    return super.put(url, data, httpOptions).pipe(
      map(response => {
        return Result.init(response)
      }),
    )
  }

  /** DELETE请求处理（一般用于删除数据） **/
  delete(url: string, data: any =null): Observable<any> {
    return super.get(url, data).pipe(
      map(response => {
        return Result.init(response)
      }),
    )
  }
}
