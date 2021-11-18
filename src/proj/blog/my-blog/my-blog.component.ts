import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { withLatestFrom } from 'rxjs/operators';
import { PageInfo } from 'src/app/biz/model/common/page-info.model';
import { User } from 'src/app/biz/model/common/user.model';
import { UserService } from 'src/app/biz/services/common/user.service';
import { MessageUtilService } from 'src/app/core/services/message-util.service';
import { ArtItem, CategoryItem } from '../model/artlist.model';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-my-blog',
  templateUrl: './my-blog.component.html',
  styleUrls: ['./my-blog.component.less']
})
export class MyBlogComponent implements OnInit {

  page: PageInfo<ArtItem> = new PageInfo()
  otherId:string
  isSelf:boolean = false
  otherInfo: User = {}

  categoryValue = null
  selCategory: CategoryItem
  categorys$: Observable<CategoryItem[]>
  constructor(
    private srv: ArticleService,
    private userSrv:UserService,
    private activatedRoute: ActivatedRoute,
    private message: MessageUtilService,
    private router: Router) { }

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
  getCategory(otherId){
    this.categorys$ = this.srv.getCategory({id: otherId})
  }
  addCategory(){

  }
  load(pageIndex, userId){
    let params={
      pageIndex: pageIndex,
      pageSize: this.page.pageSize
    }
    this.page.loading = true
    this.srv.getArticlesByAuthorId(userId, params).subscribe(res=>{
      if(res.isSuccess()){
        this.page = res;
      }
    })
  }
  edit(id){
    this.router.navigate(['./blog/edit'],{queryParams: {id}});
  }
  delArticle(id){
    this.srv.delArticleById(id).subscribe(v=>console.log(v))
  }
  cancelDelete(){
    this.message.info('click cancel');
  }
}
