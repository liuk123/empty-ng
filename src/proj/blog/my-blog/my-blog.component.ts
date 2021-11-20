import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { withLatestFrom } from 'rxjs/operators';
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

  selCategoryData: CategoryItem
  categorys: CategoryItem[]
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
    ).subscribe(([userInfo, routeParams])=>{
      this.otherId = routeParams.get('userId') || userInfo.id
      if(this.otherId){
        this.load(1, this.otherId)
        this.getCategory(this.otherId)
        if(userInfo && userInfo.id == this.otherId){ //如果是本人页面
          this.isSelf = true
          this.otherInfo = {
            username: userInfo.username,
            createTime: userInfo.createTime
          }
        }else{ // 他人页面
          this.isSelf = false
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
  cancelDelete(){
    this.message.info('click cancel');
  }
  selCategory = this.util.debounce((data)=>{
    if(this.selCategoryData && data.id === this.selCategoryData.id){
      this.selCategoryData = null
    }else{
      this.selCategoryData = data
    }
    this.load(1, this.otherId)
  })
}
