import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from 'src/app/core/model/user.model';
import { HttpUtilService } from 'src/app/core/services/http-util.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userInfo: User = {};
  private userSource = new BehaviorSubject<User>(this.userInfo);
  userEvent = this.userSource.asObservable();

  reLoadUserInfo(data:User){
    this.userInfo = data
    this.userSource.next(this.userInfo)
  }

  userUrl: string = '/api/user/';
  constructor(
    private http: HttpUtilService,
  ) {}

  /**
   * 
   * @param id 获取用户信息
   */
  getUserInfo(id){
    const url = `${this.userUrl}${id}`;
    return this.http.get(url)
  }
  /**
   * 用户注册
   * @param data
   */
  register(data){
    const url = this.userUrl;
    return this.http.post(url, data);
  }

  /**
   * 用户登录
   * @param data 
   */
  login(data){
    const url = `${this.userUrl}login`;
    let params = this.http.encodeParams(data);
    return this.http.post(url,null, {headers: this.http.DefaultHttpHeader, params});
  }
  /**
   * 用户退出
   * @param data 
   */
   logout(){
    const url = `${this.userUrl}logout`;  
    return this.http.get(url);
  }


}
