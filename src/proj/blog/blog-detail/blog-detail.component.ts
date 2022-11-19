import { AfterViewInit, ApplicationRef, ChangeDetectorRef, Component, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from '../services/article.service';
import { CommentService } from '../services/comment.service';
import { fromEvent, Subject, zip } from 'rxjs';
import { debounceTime, finalize, first, takeUntil } from 'rxjs/operators';
import { UtilService } from 'src/app/shared/utils/util';
import { UserService } from 'src/app/biz/services/common/user.service';
import { MenuService } from 'src/app/biz/services/common/menu.service';
import { ConfigService } from 'src/app/core/services/config.service';
import { Slugger } from 'marked';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.less']
})
export class BlogDetailComponent implements OnInit, OnDestroy, AfterViewInit {

  article:any;
  articleId;
  
  catalogue:[]
  commentList = [];
  submitting = false;

  isFocus = null
  isCollect = null
  loading = false
  slugger=new Slugger()
  unsub$ = new Subject()

  private _curTitle:string
  set curTitle(val){
    if(val!==this._curTitle){
      this._curTitle = val
      const t = this.getCurmenuItem(val, this.catalogue)
      this.catalogue = t.data
    }
  }

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

  ngAfterViewInit(): void {
    
  }
  ngOnInit(): void {
    this.activatedRoute.paramMap.pipe(takeUntil(this.unsub$)).subscribe(v=>{
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
              this.article.tag?.title,
              this.article.category?.name
            ].join(','),
            author: this.article.author.username
          }
          this.menuSrv.setMeta(metaData)
          this.menuSrv.addHistoryMenu(metaData.title)

          if(ConfigService.Config.isBrowser){
            let els:HTMLElement[] = []
            const appIsStable$ = this.appRef.isStable.pipe(first(isStable => isStable === true));
            appIsStable$.subscribe(v=>{
              this.inserSection()
              els = Array.from(this.el.nativeElement.querySelectorAll('.anchor-h'))
            })
            // 新添加滚动监听  
            fromEvent(document, 'scroll').pipe(takeUntil(this.unsub$)).subscribe(v=>{
              this.getTopTitle(els)
            })
           
          }
        }
      })
    })
  }
  ngOnDestroy(): void {
    if(this.intersectionObserver){
      this.intersectionObserver.disconnect()
    }
    this.unsub$.next()
    this.unsub$.complete()
    this.menuSrv.clearMetaItem('author')
    
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
        id: this.util.UUIDGenerator(),
        level: level,
        title: temArr[3],
        pid: pid,
        // selected: level<3
      })
      reg.lastIndex--
    }
    let t = this.util.setTree(labels)
    return t
  }

  getTopTitle(els){
    for(let i=0; i<els.length; i++){
      const top = this.util.getElementTop(els[i])
        if(top - document.documentElement.scrollTop<60 && top - document.documentElement.scrollTop>40){
          this.curTitle = els[i].id
          break
        }
    }
  }
  /**
   * 待修改
   * @param str 
   * @param data 
   * @returns 
   */
  getCurmenuItem (str, data) {
    if (Array.isArray(data)) {
      const newdata = []
      let selected = false
      for (let i = 0; i < data.length; i++) {
        const tem = this.getCurmenuItem(str, data[i])
        if (tem.selected == true) {
          selected = true
        }
        if(tem.Symbol == 'return'){
          newdata.push(tem.data)
        }else{
          newdata.push(tem)
        }
      }
      return { data: newdata, selected, Symbol: 'return' }
    } else if (this.util.isObject(data)) {
      const newdata:any = {}
      let selected = false
      Object.keys(data).forEach((key) => {
        const tem = this.getCurmenuItem(str, data[key])
        if (tem && tem.Symbol == 'return') {
          newdata[key] = tem.data
          if (tem.selected === true) {
            selected = true
          }
        } else {
          newdata[key] = tem
        }
      })
      let t = this.slugger.slug('ci_' + newdata.title, { dryrun: true })
      if (t === str) {
        newdata.active = true
        selected = true
      } else {
        newdata.active = false
      }
      return { ...newdata, selected }
    } else {
      return data
    }
  }

  scrollInto(item){
    let t = this.slugger.slug(item.title, { dryrun: true })
    this.el.nativeElement.querySelector(`#ci_${t}`)?.scrollIntoView({ block: 'start', inline: 'nearest'});
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
