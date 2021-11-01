import { Injectable } from '@angular/core';
import { HttpUtilService } from 'src/app/biz/services/common/http-util.service';

@Injectable()
export class CommentService {

  commentUrl: string = '/comment/';
  replyUrl: string = '/reply/';
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

}
