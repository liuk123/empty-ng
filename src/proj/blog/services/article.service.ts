import { Inject, Injectable } from '@angular/core';
import { HttpUtilService } from 'src/app/biz/services/common/http-util.service';

@Injectable()
export class ArticleService {

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
   * 根据id查询文章
   * @param id 
   * @returns 
   */
  getArticleById(id){
    const url = `/article/${id}`;
    return this.http.get(url);
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
  /**
   * 根据用户id查询文章
   * @param id 
   * @param data 
   * @returns 
   */
  getArticlesByAuthorId(id,data){
    const url = `/article/getByAuthor/${id}`;
    let params = this.http.encodeParams(data);
    return this.http.get(url,{params});
  }
  /**
   * 删除文章
   * @param id 
   * @returns 
   */
  delArticleById(id){
    const url = `/article/${id}`;
    return this.http.delete(url);
  }

  /**
   * 获取所有标签
   * @returns 
   */
  getTags(){
    const url = `/tag/`;
    return this.http.get(url);
  }
}
