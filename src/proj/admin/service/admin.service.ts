import { Inject, Injectable } from '@angular/core';
import { HttpUtilService } from 'src/app/core/services/http-util.service';

@Injectable()
export class AdminService {

  baseUrl: string = '/api/';
  constructor(
    private http: HttpUtilService,
  ) {}

  getUsers(data){
    const url = `${this.baseUrl}admin/user/`;
    let params = this.http.encodeParams(data);
    return this.http.get(url,{params});
  }

  getUserGroup(data){
    const url = `${this.baseUrl}admin/userGroup/`;
    let params = this.http.encodeParams(data);
    return this.http.get(url,{params});
  }
  getAllUserGroups(){
    const url = `${this.baseUrl}admin/allUserGroup/`;
    return this.http.get(url);
  }
  saveUserGroup(data){
    const url = `${this.baseUrl}admin/userGroup/`
    return this.http.post(url, data);
  }
  saveUser(data){
    const url = `${this.baseUrl}admin/user/`
    return this.http.post(url, data);
  }

  getRoles(data){
    const url = `${this.baseUrl}role/`;
    let params = this.http.encodeParams(data);
    return this.http.get(url,{params});
  }
  getAllRoles(){
    const url = `${this.baseUrl}role/all/`;
    return this.http.get(url);
  }

  getAuthority(data){
    const url = `${this.baseUrl}auth/`;
    let params = this.http.encodeParams(data);
    return this.http.get(url,{params});
  }
  getAllAuthority(){
    const url = `${this.baseUrl}auth/all/`;
    return this.http.get(url);
  }
  saveRole(data){
    const url = `${this.baseUrl}role/`
    return this.http.post(url, data);
  }
  saveAuthority(data){
    const url = `${this.baseUrl}auth/`;
    return this.http.post(url, data);
  }
}
