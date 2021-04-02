import { Inject, Injectable } from '@angular/core';
import { HttpUtilService } from 'src/app/core/services/http-util.service';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  articleUrl: string = '/api/article/';
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

  getArticleById(id){
    const url = `${this.articleUrl}${id}`;
    return this.http.get(url);
  }
  getArticles(data){
    const url = `${this.articleUrl}`;
    let params = this.http.encodeParams(data);
    return this.http.get(url, {params});
  }
  getArticlesByAuthorId(id,data){
    const url = `${this.articleUrl}getByAuthor/${id}`;
    let params = this.http.encodeParams(data);
    return this.http.get(url,{params});
  }
  delArticleById(id){
    const url = `${this.articleUrl}${id}`;
    return this.http.delete(url);
  }
}
