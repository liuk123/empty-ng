import { ApplicationRef, Component, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from '../services/article.service';
import { CommentService } from '../services/comment.service';
import { v4 as uuidv4 } from 'uuid';
import { zip } from 'rxjs';
import { finalize, first } from 'rxjs/operators';
import { UtilService } from 'src/app/shared/utils/util';
import { UserService } from 'src/app/biz/services/common/user.service';
import { MenuService } from 'src/app/biz/services/common/menu.service';
import { ConfigService } from 'src/app/biz/services/common/config.service';
import * as marked from 'marked';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.less']
})
export class BlogDetailComponent implements OnInit, OnDestroy {

  article:any;
  articleId;
  
  catalogue:[]
  commentList = [];
  submitting = false;

  isFocus = null
  isCollect = null
  loading = false

  constructor(
    private activatedRoute: ActivatedRoute,
    private srv: ArticleService,
    private commentSrv: CommentService,
    private util: UtilService,
    private userSrv: UserService,
    private el: ElementRef,
    private menuSrv: MenuService,
    private appRef: ApplicationRef
  ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(v=>{
      this.articleId = v.get('id')
      this.loading = true
      this.srv.getArticleById(this.articleId).subscribe(res=>{
        if(res.isSuccess()){
          this.article = res.data

          // 判断是否关注作者，是否收藏文章
          let user = this.userSrv.getUser()
          if(user && user.username){
            zip(
              this.getIsCollect(this.articleId),
              this.getIsFocus(this.article.author.id)
            ).pipe(
              finalize(()=>{
                this.loading = false
              })
            ).subscribe(([collectData, focusData]) =>{
              this.isCollect = collectData.data
              this.isFocus = focusData.data
            })
          }
          
          // 目录
          this.catalogue = this.getArticleTitle(this.article.content)
          
          // 评论
          if(res.data.commentList){
            this.commentList = res.data.commentList
          }
          // seo
          let metaData = {
            title: this.article.title,
            description: this.article.descItem,
            keywords: [
              ...this.article.tagList.map(v=>v.title),
              this.article.category.name
            ].join(',')
          }
          this.menuSrv.setMeta(metaData)
          this.menuSrv.addHistoryMenu(metaData.title)
        }
      })
    })
    if(ConfigService.Config.isBrowser){
      const appIsStable$ = this.appRef.isStable.pipe(first(isStable => isStable === true));
      appIsStable$.subscribe(v=>{
        this.inserSection()
      })
    }
  }
  ngOnDestroy(): void {
    if(this.intersectionObserver){
      this.intersectionObserver.disconnect()
    }
    
  }
  
  /**
   * 目录
   * @param data 
   * @returns 
   */
  getArticleTitle(data){
    const reg = /(?:^(#{1,6})|\n\s{0,3}(#{1,6}))\s+(.+)(?:\n+|$)/g
    let temArr = null
    const labels = []
    while((temArr = reg.exec(data))!=null){
      let pid = null
      let level = (temArr[1]||temArr[2]).length
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
        title: temArr[3],
        pid: pid,
        selected: level<3
      })
      reg.lastIndex--
    }
    let t = this.util.setTree(labels)
    return t
  }

  scrollInto(item){
    let s = new marked.Slugger()
    let t = s.slug(item.title, { dryrun: true })
    this.el.nativeElement.querySelector(`#ci_${t}`)?.scrollIntoView({ block: 'start', inline: 'nearest' });
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
    this.loading = true
    this.commentSrv.addReply(params).subscribe(res=>{
      this.loading = false
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
  doFouse(otherId){
    if(this.isFocus === false){
      this.loading = true
      this.srv.saveFocus({userId: otherId}).subscribe(res=>{
        this.loading = false
        if(res.isSuccess()){
          this.isFocus = true
        }
      })
    }else if(this.isFocus === true){
      this.loading = true
      this.srv.delFocus(otherId).subscribe(res=>{
        this.loading = false
        if(res.isSuccess()){
          this.isFocus = false
        }
      })
    }
  }
  doCollect(articleId){
    if(this.isCollect === false){
      this.loading = true
      this.srv.saveCollect({articleId}).subscribe(res=>{
        this.loading = false
        if(res.isSuccess()){
          this.isCollect = true
        }
      })
    }else if(this.isCollect === true){
      this.loading = true
      this.srv.delCategory(articleId).subscribe(res=>{
        this.loading = false
        if(res.isSuccess()){
          this.isCollect = false
        }
      })
    }
  }
  /**
   * 判断是否收藏
   * @param articleId 
   */
  getIsCollect(articleId){
    const params = {
      articleId
    }
    return this.srv.getIsCollect(params)
  }
  /**
   * 判断是否关注
   * @param otherId 
   */
  getIsFocus(otherId){
    const params = {
      userId: otherId
    }
    return this.srv.getIsFocus(params)
  }

  intersectionObserver= null
  inserSection(){
    const images = Array.from(this.el.nativeElement.getElementsByClassName('marked-image'))
    const loadImage=(image)=>{
      image.setAttribute('src', image.getAttribute('data-source'))
      image.removeAttribute("data-source");
    }
    this.intersectionObserver = new IntersectionObserver(function (items, observer) {
      items.forEach(function (item) {
        if (item.isIntersecting) {
          loadImage(item.target)
          observer.unobserve(item.target);// 停止观察
        }
      });
    });
    images.forEach(img=>{
      this.intersectionObserver.observe(img)
    })
  }
}
