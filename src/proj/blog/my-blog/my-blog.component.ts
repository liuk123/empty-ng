import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PageInfo } from 'src/app/core/model/page-info.model';
import { CommonService } from 'src/app/core/services/common.service';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-my-blog',
  templateUrl: './my-blog.component.html',
  styleUrls: ['./my-blog.component.less']
})
export class MyBlogComponent implements OnInit {

  page = new PageInfo();
  dataTem: any[] = [];
  userInfo;
  constructor(
    private srv: ArticleService,
    private commonSrv:CommonService,
    private router: Router) { }

  ngOnInit(): void {
    this.commonSrv.userEvent.subscribe(v=>{
      this.userInfo = v;
      this.loadMoreEvent(1)
    });
    
  }

  loadMoreEvent(index){
    this.page.loading = true;
    this.page.list = this.dataTem.concat(Array(this.page.pageSize).fill({}).map(() => ({ loading: true, data: {} })));
    this.srv.getArticlesByAuthorId(this.userInfo.id,{pageNum:index, pageSize:this.page.pageSize}).subscribe(res=>{
      if(res.isSuccess()){
        this.page = new PageInfo();
        this.dataTem = this.dataTem.concat(res.list.map(v=>({loading: false, data:v})));
        this.page.loading = false;
        this.page.list = [...this.dataTem];
        this.page.pages = res.pages;
        this.page.pageNum = res.pageNum;
      }
    })
  }
  editEvent(id){
    this.router.navigate(['./blog/edit',{id}]);
  }
  delEvent(id){

  }
  openEvent(id){
    this.router.navigate(['./blog/detail',{id}]);
  }
}
