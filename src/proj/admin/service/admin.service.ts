import { Inject, Injectable } from '@angular/core';
import { HttpUtilService } from 'src/app/biz/services/common/http-util.service';

@Injectable()
export class AdminService {

  constructor(
    private http: HttpUtilService,
  ) {}

  /**
   * 获取用户
   * @param data 
   * @returns 
   */
  getUsers(data){
    const url = `/admin/user/`;
    let params = this.http.encodeParams(data);
    return this.http.get(url,{params});
  }
  /**
   * 获取分组
   * @param data 
   * @returns 
   */
  getUserGroup(data){
    const url = `/admin/userGroup/`;
    let params = this.http.encodeParams(data);
    return this.http.get(url,{params});
  }
  /**
   * 获取所有分组
   * @param data 
   * @returns 
   */
  getAllUserGroups(){
    const url = `/admin/allUserGroup/`;
    return this.http.get(url);
  }
  /**
   * 保存分组
   * @param data 
   * @returns 
   */
  saveUserGroup(data){
    const url = `/admin/userGroup/`
    return this.http.post(url, data);
  }
  /**
   * 保存用户
   * @param data 
   * @returns 
   */
  saveUser(data){
    const url = `/admin/user/`
    return this.http.post(url, data);
  }

  /**
   * 获取角色
   * @param data 
   * @returns 
   */
  getRoles(data){
    const url = `/role/`;
    let params = this.http.encodeParams(data);
    return this.http.get(url,{params});
  }
  /**
   * 获取所有角色
   * @param data 
   * @returns 
   */
  getAllRoles(){
    const url = `/role/all/`;
    return this.http.get(url);
  }

  /**
   * 获取权限
   * @param data 
   * @returns 
   */
  getAuthority(data){
    const url = `/auth/`;
    let params = this.http.encodeParams(data);
    return this.http.get(url,{params});
  }
  /**
   * 获取所有权限
   * @param data 
   * @returns 
   */
  getAllAuthority(){
    const url = `/auth/all/`;
    return this.http.get(url);
  }
  /**
   * 保存角色
   * @param data 
   * @returns 
   */
  saveRole(data){
    const url = `/role/`
    return this.http.post(url, data);
  }
  /**
   * 保存权限
   * @param data 
   * @returns 
   */
  saveAuthority(data){
    const url = `/auth/`;
    return this.http.post(url, data);
  }
  /**
   * 获取菜单
   * @param data 
   * @returns 
   */
  getMenus(data){
    const url = `/menu/all/`;
    const params = this.http.encodeParams(data)
    return this.http.get(url, {params});
  }

  /**
   * 保存菜单
   * @param data 
   * @returns 
   */
  saveMenu(data){
    const url = `/menu/`;
    return this.http.post(url, data);
  }
  /**
   * 获取链接
   * @returns 
   */
  getLink(){
    const url = `/link/`;
    return this.http.get(url);
  }
  /**
   * 保存链接
   * @param data 
   * @returns 
   */
  saveLink(data){
    const url = `/link/`
    return this.http.post(url, data);
  }
  /**
   * 删除链接
   * @param id 
   * @returns 
   */
  delLink(id){
    const url = `/link/`;
    return this.http.delete(url,{params: {id}});
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
  saveFavicon(data){
    const url = `/nodeapi/downloadFavicon`
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
  delBookmarkItem(id,icon){
    const url = `/bookmark/`;
    return this.http.delete(url,{params: {id, icon}});
  }
  delBookmarkCategory(id){
    const url = `/bookmark/bookmarkCategory/`;
    return this.http.delete(url,{params: {id}});
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
  getBookmarkByCateIds(data){
    const url = `/bookmark/bookmarkItem/`;
    let params = this.http.encodeParams(data)
    return this.http.get(url,{params});
  }

  /**
   * 获取友情链接
   * @param data 
   * @returns 
   */
  getFriend(){
    const url = `/friend/`;
    return this.http.get(url);
  }

  /**
   * 保存友链
   * @param data 
   * @returns 
   */
  saveFriend(data){
    const url = `/friend/`
    return this.http.post(url, data);
  }
  delFriend(id){
    const url = `/friend/`;
    return this.http.delete(url,{params: {id}});
  }


  /**
   * 获取链接
   * @returns 
   */
  getRss(data){
    const url = `/rss/`;
    let params = this.http.encodeParams(data);
    return this.http.get(url,{params}); 
  }
  /**
   * 保存链接
   * @param data 
   * @returns 
   */
  saveRss(data){
    const url = `/rss/`
    return this.http.post(url, data);
  }
  /**
   * 删除链接
   * @param id 
   * @returns 
   */
  delRss(id){
    const url = `/rss/`;
    return this.http.delete(url,{params: {id}});
  }

}
