import { Component, OnDestroy, OnInit } from '@angular/core';
import { PageInfo } from 'src/app/biz/model/common/page-info.model';
import { UtilService } from 'src/app/shared/utils/util';
import { ArtItem } from '../model/artlist.model';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-blog-home',
  templateUrl: './blog-home.component.html',
  styleUrls: ['./blog-home.component.less']
})
export class BlogHomeComponent implements OnInit, OnDestroy {

  listData:ArtItem[]
  tagData = null
  tagSelectData=[];

  listPageData: PageInfo<ArtItem>= new PageInfo([],1,9);
  constructor(
    private articleSrv: ArticleService,
    private util: UtilService,
  ) { }

  ngOnInit(): void {
    this.load(1)
    this.articleSrv.getTags().subscribe((tagRes)=>{
      if(tagRes.isSuccess()){
        this.tagData = tagRes.data.slice(0,15)
      }
    })
  }
  ngOnDestroy(){
    this.selectEvent()
  }
  load(n){
    let params={
      pageIndex: n,
      pageSize: this.listPageData.pageSize,
      tags: this.tagSelectData
    }
    this.articleSrv.getArticles(params).subscribe(res=>{
      if(res.isSuccess()){
        this.listPageData = res;
      }
    })
  }
  selectEvent = this.util.debounce((data)=>{
    this.tagSelectData = data;
    this.load(1);
  })

}