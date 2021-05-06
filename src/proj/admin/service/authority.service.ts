import { Inject, Injectable } from '@angular/core';
import { HttpUtilService } from 'src/app/core/services/http-util.service';

@Injectable()
export class AuthorityService {

  baseUrl: string = '/api/';
  constructor(
    private http: HttpUtilService,
  ) {}

  getUsers(data){
    const url = `${this.baseUrl}auth/`;
    let params = this.http.encodeParams(data);
    return this.http.get(url,{params});
  }
}
