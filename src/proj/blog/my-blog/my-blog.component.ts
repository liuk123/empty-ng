import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { zip } from 'rxjs';
import { map, withLatestFrom } from 'rxjs/operators';
import { PageInfo } from 'src/app/biz/model/common/page-info.model';
import { UserService } from 'src/app/biz/services/common/user.service';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-my-blog',
  templateUrl: './my-blog.component.html',
  styleUrls: ['./my-blog.component.less']
})
export class MyBlogComponent implements OnInit {

  page = new PageInfo()
  dataTem: any[] = []
  otherId:string
  isSelf:boolean = false
  otherInfo = null
  constructor(
    private srv: ArticleService,
    private userSrv:UserService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.userSrv.userEvent.pipe(
      withLatestFrom(this.activatedRoute.paramMap),
    ).subscribe(([userInfo, routeParams])=>{
      this.otherId = routeParams.get('userId') || userInfo.id
      if(this.otherId){
        this.loadMoreEvent(1)
        if(userInfo && userInfo.id === this.otherId){ //如果是本人页面
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

  loadMoreEvent(index){
    this.page.loading = true;
    this.page.list = [...this.dataTem, ...Array(this.page.pageSize).fill({ loading: true, data: {} })];
    this.srv.getArticlesByAuthorId(this.otherId, {pageIndex:index, pageSize:this.page.pageSize}).subscribe(res=>{
      if(res.isSuccess() && res.list){
        this.page = new PageInfo();
        this.dataTem = [...this.dataTem,...(res.list.map(v=>({loading: false, data:v})))];
        this.page.loading = false;
        this.page.list = [...this.dataTem];
        this.page.pages = res.pages;
        this.page.pageIndex = res.pageIndex;
      }
    })
  }
  editEvent(id){
    this.router.navigate(['./blog/edit',{id}]);
  }
  delEvent(id){
    this.srv.delArticleById(id).subscribe(v=>console.log(v))
  }
  openEvent(id){
    this.router.navigate(['./blog/detail',{id}]);
  }
}
