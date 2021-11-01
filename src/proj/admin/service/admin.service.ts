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
    const url = `/menu/`;
    const params = this.http.encodeParams(data)
    return this.http.get(url, {params});
  }
}
