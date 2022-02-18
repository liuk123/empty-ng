import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { debounceTime, withLatestFrom } from 'rxjs/operators';
import { PageInfo } from 'src/app/biz/model/common/page-info.model';
import { User } from 'src/app/biz/model/common/user.model';
import { UserService } from 'src/app/biz/services/common/user.service';
import { MessageUtilService } from 'src/app/core/services/message-util.service';
import { UtilService } from 'src/app/shared/utils/util';
import { ArtItem, CategoryItem } from '../model/artlist.model';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-my-blog',
  templateUrl: './my-blog.component.html',
  styleUrls: ['./my-blog.component.less']
})
export class MyBlogComponent implements OnInit, OnDestroy {

  page: PageInfo<ArtItem> = new PageInfo()
  otherId:string
  isSelf:boolean = false
  otherInfo: User = {}
  isloign = null

  selCategoryData: CategoryItem
  categorys: CategoryItem[]

  isFocus = null
  loading = true
  constructor(
    private srv: ArticleService,
    private userSrv:UserService,
    private activatedRoute: ActivatedRoute,
    private message: MessageUtilService,
    private router: Router,
    private util: UtilService) { }

  ngOnInit(): void {
    this.userSrv.userEvent.pipe(
      withLatestFrom(this.activatedRoute.queryParamMap),
    ).pipe(
      debounceTime(1000)
    ).subscribe(([userInfo, routeParams])=>{
      this.isloign = Boolean(userInfo.username)
      this.otherId = routeParams.get('userId') || userInfo.id
      if(this.otherId){
        this.load(1, this.otherId)
        this.getCategory(this.otherId)
        if(userInfo && userInfo.id == this.otherId){ //如果是本人页面
          this.isSelf = true
          this.otherInfo = userInfo
        }else{ // 他人页面
          this.isSelf = false
          this.getIsFocus(this.otherId)
          // 获取otherInfo
          this.userSrv.getUserInfo(this.otherId).subscribe(res=>{
            if(res.isSuccess()){
              this.otherInfo = res.data
            }
          })
        }
      }
    })
  }
  ngOnDestroy(){
    this.selCategory()
  }
  getCategory(otherId){
    this.srv.getCategory({id: otherId}).subscribe(res=>{
      if(res.isSuccess()){
        this.categorys = res.data
      }
    })
  }
  /**
   * 加载文章
   * @param pageIndex 1开始
   * @param userId 用户id
   */
  load(pageIndex, userId){
    let params={
      id:userId,
      categoryId: this.selCategoryData?this.selCategoryData.id : null,
      pageIndex: pageIndex,
      pageSize: this.page.pageSize
    }
    this.page.loading = true
    this.srv.getArticlesByAuthorId(params).subscribe(res=>{
      this.page.loading = false
      if(res.isSuccess()){
        this.page = res;
      }
    })
  }
  editArticle(id){
    this.router.navigate(['./blog/edit'],{queryParams: {id}});
  }
  delArticle(id){
    this.srv.delArticleById(id).subscribe(v=>console.log(v))
  }
  /**
   * 获取分类 分类切换
   */
  selCategory = this.util.debounce((data)=>{
    if(this.selCategoryData && data.id === this.selCategoryData.id){
      this.selCategoryData = null
    }else{
      this.selCategoryData = data
    }
    this.load(1, this.otherId)
  })

  /**
   * 判断是否关注
   * @param otherId 
   */
   getIsFocus(otherId){
    const params = {
      userId: otherId
    }
    this.srv.getIsFocus(params).subscribe(res=>{
      this.loading = false
      if(res.isSuccess()){
        this.isFocus = res.data
      }
    })
  }
  doFocus(otherId){
    if(this.isFocus === true){
      this.loading = true
      this.srv.delFocus(otherId).subscribe(res=>{
        this.loading = false
        if(res.isSuccess()){
          this.isFocus = false
        }
      })
    }else if(this.isFocus === false){
      const params = {
        userId: otherId
      }
      this.loading = true
      this.srv.saveFocus(params).subscribe(res=>{
        this.loading = false
        if(res.isSuccess()){
          this.isFocus = true
        }
      })
    }
  }
}
