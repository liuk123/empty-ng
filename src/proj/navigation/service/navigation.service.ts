import { Injectable } from '@angular/core';
import { HttpUtilService } from 'src/app/biz/services/common/http-util.service';

@Injectable()
export class NavigationService {

  constructor(
    private http: HttpUtilService,
  ) {}

  /**
   * 获取navCategory
   * @param data 
   * @returns 
   */
  getNavCategory(){
    const url = `/nav/navCategory/`;
    return this.http.get(url);
  }
  /**
   * 获取navItem
   * @param data 
   * @returns 
   */
   getNavItem(data){
    const url = `/nav/navItem/`;
    let params = this.http.encodeParams(data);
    return this.http.get(url,{params});
  }
  /**
   * 保存navItem
   * @param data 
   * @returns 
   */
  saveNavItem(data){
    const url = `/nav/`
    return this.http.post(url, data);
  }
  /**
   * 保存navCategory
   * @param data 
   * @returns 
   */
  saveNavCategory(data){
    const url = `/nav/navCategory/`
    return this.http.post(url, data);
  }
}
