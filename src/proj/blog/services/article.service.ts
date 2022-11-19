import { Injectable } from '@angular/core';
import { HttpUtilService } from 'src/app/biz/services/common/http-util.service';

@Injectable()
export class ArticleService {

  // 我的关注
  focus = []
  // 我的收藏
  collect = []

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
  getArticlesByAuthorId(data){
    const url = `/article/getByAuthor/`;
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
  getTagColumn(){
    const url = `/tag/column/`;
    return this.http.get(url);
  }

  /**
   * 获取收藏的文章列表 
   * @returns 
   */
  getCollect(data){
    const url = `/article/collect/`;
    let params = this.http.encodeParams(data);
    return this.http.get(url, {params});
  }
  /**
   * 是否收藏
   * @param data 
   * @returns 
   */
  getIsCollect(data){
    const url = `/article/collect/is`;
    let params = this.http.encodeParams(data);
    return this.http.get(url, {params});
  }

  /**
   * 保存收藏
   * @param data ｛articleId｝
   * @returns 
   */
  saveCollect(data){
    const url = `/article/collect/`;
    return this.http.post(url, data);
  }

  /**
   * 删除收藏
   * @param id 
   * @returns 
   */
  delCollect(id){
    const url = `/article/collect/${id}`;
    return this.http.delete(url);
  }

  /**
   * 获取分类 
   * @returns 
   */
   getCategory(data){
    const url = `/category/`;
    let params = this.http.encodeParams(data);
    return this.http.get(url, {params});
  }

  /**
   * 保存分类
   * @param data 
   * @returns 
   */
  saveCategory(data){
    const url = `/category/`;
    return this.http.post(url, data);
  }

  /**
   * 删除分类
   * @param id 
   * @returns 
   */
  delCategory(id){
    const url = `/category/${id}`;
    return this.http.delete(url);
  }

  /**
   * 获取关注列表
   * @returns 
   */
   getFocus(data){
    const url = `/focus/`;
    let params = this.http.encodeParams(data);
    return this.http.get(url, {params});
  }
  /**
   * 是否关注
   * @param data 
   * @returns 
   */
  getIsFocus(data){
    const url = `/focus/is`;
    let params = this.http.encodeParams(data);
    return this.http.get(url, {params});
  }
  /**
   * 保存关注
   * @param data 
   * @returns 
   */
  saveFocus(data){
    const url = `/focus/`;
    return this.http.post(url, data);
  }

  /**
   * 删除关注
   * @param id 
   * @returns 
   */
  delFocus(id){
    const url = `/focus/${id}`;
    return this.http.delete(url);
  }

  /**
   * 获取推荐内容
   * @param type 
   * @returns 
   */
  getLink(type){
    const url = `/link/${type}`;
    return this.http.get(url);
  }
}
