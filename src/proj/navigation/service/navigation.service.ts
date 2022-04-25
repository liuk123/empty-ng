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
  saveImportNav(data){
    const url = `/nav/importNav/`;
    return this.http.post(url,data);
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
  delNavItem(id){
    const url = `/nav/${id}`;
    return this.http.delete(url);
  }
  delNavCategory(id){
    const url = `/nav/navCategory/${id}`;
    return this.http.delete(url);
  }


  /**
   * 获取bookmark
   * @param data 
   * @returns 
   */
  getBookmarkCategory(){
    const url = `/bookmark/bookmarkCategory/`;
    return this.http.get(url);
  }
  getBookmarkCategoryByPid(id){
    const url = `/bookmark/`;
    return this.http.get(url,{params: {id}});
  }
  /**
   * 获取navItem
   * @param data 
   * @returns 
   */
  getBookmarkItem(data){
    const url = `/bookmark/bookmarkItem/`;
    let params = this.http.encodeParams(data);
    return this.http.get(url,{params});
  }
  /**
   * 保存navItem
   * @param data 
   * @returns 
   */
  saveBookmarkItem(data){
    const url = `/bookmark/`
    return this.http.post(url, data);
  }
  /**
   * 保存navCategory
   * @param data 
   * @returns 
   */
  saveBookmarkCategory(data){
    const url = `/bookmark/bookmarkCategory/`
    return this.http.post(url, data);
  }
  delBookmarkItem(id){
    const url = `/bookmark/`;
    return this.http.delete(url,{params: {id}});
  }
  delBookmarkCategory(id){
    const url = `/bookmark/bookmarkCategory/`;
    return this.http.delete(url,{params: {id}});
  }
}
