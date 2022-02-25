import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { zip } from 'rxjs';
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
  listData1:ArtItem[]
  tagData = null
  tagSelectData=[];

  listPageData: PageInfo<ArtItem>= new PageInfo();
  constructor(
    private articleSrv: ArticleService,
    private util: UtilService,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.load(1)
    zip(
      this.articleSrv.getTags(),
      this.http.get<any>('assets/data/blog-home.json')
    ).subscribe(([tagRes, data])=>{
      if(tagRes.isSuccess()){
        this.tagData = tagRes.data.slice(0,15)
      }
      this.listData1 = data.recommend
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
let listData=[
  { 
    id:'',
    title:'Tatsuro Suzuki 痴迷于黑白风白风格的城市街道街格的城市街道街拍',
    descItem:'Tatsuro Suzuki 主要以拍摄街道人物，通过黑白照片，展现了日本东京城市生活的人生百态。',
    author:'lackk',
    imgUrl:'',
    content:'Tatsuro Suzuki 主要以拍摄街道人物，通过黑白照片展现了日本东京城市生活的人生百态。像许多街头摄影师一样，铃木从在外面拍摄的机会中获得灵感。那是遇到谁的第一次遇到的时候会突然一瞥的瞬间。',
    tag:['艺术','图片'],
  }
]