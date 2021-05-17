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
  saveUserGroup(data){
    const url = `${this.baseUrl}admin/userGroup/`
    return this.http.post(url, data);
  }

  getRoles(data){
    const url = `${this.baseUrl}role/`;
    let params = this.http.encodeParams(data);
    return this.http.get(url,{params});
  }

  getAuthority(data){
    const url = `${this.baseUrl}auth/`;
    let params = this.http.encodeParams(data);
    return this.http.get(url,{params});
  }
}
