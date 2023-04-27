import { Injectable } from '@angular/core';
import { HttpUtilService } from 'src/app/biz/services/common/http-util.service';

@Injectable()
export class WebsiteService {

  constructor(
    private http: HttpUtilService,
  ) {}

  /**
   * 获取友情链接
   * @param data 
   * @returns 
   */
  getLink(){
    const url = `/friend/`;
    return this.http.get(url);
  }
}
