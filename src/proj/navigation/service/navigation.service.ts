import { Injectable } from '@angular/core';
import { HttpUtilService } from 'src/app/biz/services/common/http-util.service';

@Injectable()
export class NavigationService {

  constructor(
    private http: HttpUtilService
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
  delNavItem(ids){
    const url = `/nav/`;
    return this.http.delete(url,{params: {ids}});
  }
  delNavCategory(id){
    const url = `/nav/navCategory/${id}`;
    return this.http.delete(url);
  }



  getRandomBookmark(total=null){
    const url = `/bookmark/random/`;
    let params = this.http.encodeParams({total})
    return this.http.get(url,{params});
  }
  /**
   * 获取bookmark
   * @param data 
   * @returns 
   */
  getBookmarkCategory(isDelStateKey=false){
    const url = `/bookmark/bookmarkCategory/`;
    if(isDelStateKey){
      this.http.delStateKey('GET', url)
    }
    return this.http.get(url);
  }
  /**
   * 根据category获取bookmark
   * @param id 
   * @returns 
   */
  getBookmarkCategoryByPid(id,isDelStateKey=false){
    const url = `/bookmark/${id}`;
    if(isDelStateKey){
      this.http.delStateKey('GET', url)
    }
    return this.http.get(url);
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
  /**
   * 获取新闻
   */
  getNews(id){
    const url = `/news/newCategory/${id??''}`
    return this.http.get(url)
  }
}