import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from '../services/article.service';
import { CommentService } from '../services/comment.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.less']
})
export class BlogDetailComponent implements OnInit {

  bannerUrl:string = 'https://tvax4.sinaimg.cn/large/6f8a2832gy1gdkralzwfoj21e00xc13g.jpg';
  article:any;
  articleId;
  
  catalogue=[]
  commentList = [];
  submitting = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private srv: ArticleService,
    private commentSrv: CommentService,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(v=>{
      this.articleId = v.get('id');
      this.srv.getArticleById(this.articleId).subscribe(res=>{
        if(res.isSuccess()){
          this.article = res.data;
          this.catalogue = this.getArticleTitle(this.article.content)
          console.log(this.catalogue)
          if(res.data.commentList){
            this.commentList = res.data.commentList;
          }
        }
      })
    })
  }
  
  /**
   * 目录
   * @param data 
   * @returns 
   */
  getArticleTitle(data){
    const topTitleId = Symbol()
    const reg = /(#{1,5})\s(.+?)\n/g
    let temArr = null
    const labels = []
    while((temArr = reg.exec(data))!=null){
      let pid = null
      let level = temArr[1].length
      if(labels.length>0){
        for(let i = labels.length-1; i >= 0; i--){
          if(labels[i].level < level){
            pid = labels[i].id
            break
          }
        }
      }
      labels.push({
        id: uuidv4(),
        level: level,
        label: temArr[2],
        pid: pid
      })
    }
    const temObj = {}
    for(let i=0; i<labels.length;i++){
      const key = labels[i].pid||topTitleId as any
      if(temObj[key]){
        temObj[key].push(labels[i])
      }else{
        temObj[key]=[labels[i]]
      }
    }
    return this.setTitleItem(temObj[topTitleId], temObj)
  }
  setTitleItem(item,obj){
    if(item){
      for(let i=0; i<item.length;i++){
        item[i].children = obj[item[i].id]||null
        this.setTitleItem(item[i].children, obj)
      }
      return item
    }
  }
  /**
   * 评论提交
   * @param data
   */
  commentEvent(data){
    let params={
      content: data,
      articleId: this.articleId,
    }
    this.submitting = true;
    this.commentSrv.addComment(params).subscribe(res=>{
      this.submitting = false;
      if(res.isSuccess()){
        this.commentList.unshift(res.data);
      }
    })
  }
  /**
   * 回复提交
   * @param data
   */
  replyEvent(data){
    let params={
      commentId:data.commentId,
      toUserId:data.toUserId,
      toUsername: data.toUsername,
      content: data.content,
    }
    this.commentSrv.addReply(params).subscribe(res=>{
      if(res.isSuccess()){
        this.commentList.forEach(v=>{
          if(v.id==data.commentId){
            if(Array.isArray(v.replyList)){
              v.replyList.push(res.data);
            }else{
              v.replyList=[res.data];
            }
            
          }
        })
      }
    })
  }
  
}
