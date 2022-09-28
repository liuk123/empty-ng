import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { PageInfo } from 'src/app/biz/model/common/page-info.model';
import { ArtItem } from '../model/artlist.model';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-blog-home',
  templateUrl: './blog-home.component.html',
  styleUrls: ['./blog-home.component.less']
})
export class BlogHomeComponent implements OnInit, OnDestroy {

  listData:ArtItem[]
  tagData = []
  recommend
  sel$ = new Subject()

  listPageData: PageInfo<ArtItem>= new PageInfo([],1,10);
  constructor(
    private articleSrv: ArticleService,
  ) {}

  ngOnInit(): void {
    this.load(1)
    this.loadTags()
    this.getRecommendArticle()

    this.sel$.pipe(
      debounceTime(800),
    ).subscribe(()=>{
      this.load(1);
    })
  }
  ngOnDestroy(){
    this.sel$.complete()
  }
  loadTags(){
    this.articleSrv.getTags().subscribe((tagRes)=>{
      if(tagRes.isSuccess()){
        this.tagData = tagRes.data.slice(0,20)
      }
    })
  }
  load(n){
    let params={
      pageIndex: n,
      pageSize: this.listPageData.pageSize,
      tags: this.tagData.filter(v=>v.isSelected).map(v=>v.id)
    }
    this.articleSrv.getArticles(params).subscribe(res=>{
      if(res.isSuccess()){
        this.listPageData = res;
      }
    })
  }
  // selectEvent = this.util.debounce((data)=>{
    // data.isSelected=!data.isSelected
    // this.load(1);
  // })
  selectEvent(data){
    data.isSelected=!data.isSelected
    this.sel$.next()
  }
  getRecommendArticle(){
    this.articleSrv.getLink('recommend').subscribe(res=>{
      this.recommend = res.data
    })
  }

}