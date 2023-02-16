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
  tagColunm = []
  tagIndex = 0
  recommend
  sel$ = new Subject()

  listPageData: PageInfo<ArtItem>= new PageInfo([],1,12);
  constructor(
    private articleSrv: ArticleService,
  ) {}

  ngOnInit(): void {
    this.loadTagColumn()

    this.sel$.pipe(
      debounceTime(800),
    ).subscribe(()=>{
      this.load(1);
    })
  }
  ngOnDestroy(){
    this.sel$.complete()
  }
  loadTagColumn(){
    this.articleSrv.getTagColumn().subscribe((tagRes)=>{
      if(tagRes.isSuccess()){
        this.tagColunm = tagRes.data
        this.tagData = this.tagColunm[this.tagIndex]?.tagList
        this.load(1)
        this.getRecommendArticle()
      }
    })
  }
  load(n){
    let params={
      pageIndex: n,
      pageSize: this.listPageData.pageSize,
      tagIds: this.tagData.filter(v=>v.isSelected).map(v=>v.id),
      tagColumnId: this.tagColunm[this.tagIndex]?.id,
    }
    this.articleSrv.getArticles(params).subscribe(res=>{
      if(res.isSuccess()){
        res.list.forEach(item=>{
          item.keyword = item?.keyword?.split(',')??[]
        })
        this.listPageData = res;
      }
    })
  }
  switchTitle(i){
    this.tagIndex=i
    this.tagData = this.tagColunm[this.tagIndex]?.tagList.map(v=>({
      ...v,
      isSelected: false,
    }))
    this.sel$.next()
    this.getRecommendArticle()
  }
  selectEvent(data){
    data.isSelected=!data.isSelected
    this.sel$.next()
  }
  getRecommendArticle(){
    this.articleSrv.getLink().subscribe(res=>{
      this.recommend = res.data.filter(v=>!v.category||v.category==this.tagColunm[this.tagIndex]?.id)
    })
  }

}