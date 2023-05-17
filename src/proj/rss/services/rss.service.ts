import { Injectable } from '@angular/core';
import { HttpUtilService } from 'src/app/biz/services/common/http-util.service';

@Injectable()
export class RssService {
  constructor(
    private http: HttpUtilService,
  ) {}
  /**
   * 文章保存
   * @param data 
   */
  save(data){
    const url = `/article/`;
    return this.http.post(url, data);
  }
  /**
   * 查询多篇文章
   * @param data 
   * @returns 
   */
  getArticles(data){
    const url = `/article/`;
    let params = this.http.encodeParams(data);
    return this.http.get(url, {params});
  }
}
