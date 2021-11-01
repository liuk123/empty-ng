import { Inject, Injectable } from '@angular/core';
import { HttpUtilService } from 'src/app/biz/services/common/http-util.service';

@Injectable()
export class ArticleService {

  articleUrl: string = '/article/';
  constructor(
    private http: HttpUtilService,
  ) {}

  /**
   * 文章保存
   * @param data 
   */
  save(data){
    const url = `${this.articleUrl}`;
    return this.http.post(url, data);
  }
  /**
   * 根据id查询文章
   * @param id 
   * @returns 
   */
  getArticleById(id){
    const url = `${this.articleUrl}${id}`;
    return this.http.get(url);
  }
  /**
   * 查询多篇文章
   * @param data 
   * @returns 
   */
  getArticles(data){
    const url = `${this.articleUrl}`;
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
    const url = `${this.articleUrl}getByAuthor/${id}`;
    let params = this.http.encodeParams(data);
    return this.http.get(url,{params});
  }
  /**
   * 删除文章
   * @param id 
   * @returns 
   */
  delArticleById(id){
    const url = `${this.articleUrl}${id}`;
    return this.http.delete(url);
  }
}
