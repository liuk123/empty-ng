import { Injectable } from '@angular/core';
import { HttpUtilService } from 'src/app/biz/services/common/http-util.service';

@Injectable()
export class RssService {
  constructor(
    private http: HttpUtilService,
  ) {}
  /**
   * 保存
   * @param data 
   */
  save(data){
    const url = `/rss/`;
    return this.http.post(url, data);
  }
  /**
   * 查询
   * @param data 
   * @returns 
   */
  getRss(data){
    const url = `/rss/`;
    let params = this.http.encodeParams(data);
    return this.http.get(url, {params});
  }
}
