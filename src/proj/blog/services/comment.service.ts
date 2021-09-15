import { Inject, Injectable } from '@angular/core';
import { HttpUtilService } from 'src/app/biz/services/common/http-util.service';

@Injectable()
export class CommentService {

  commentUrl: string = '/api/comment/';
  replyUrl: string = '/api/reply/';
  constructor(
    private http: HttpUtilService,
  ) {}

  /**
   * 评论保存
   * @param data 
   */
  addComment(data){
    const url = `${this.commentUrl}`;
    return this.http.post(url, data);
  }
  /**
   * 回复保存
   * @param data 
   */
  addReply(data){
    const url = `${this.replyUrl}`;
    return this.http.post(url, data);
  }

  // getArticle(id){
  //   const url = `${this.commentUrl}${id}`;    
  //   return this.http.get(url);
  // }


}
