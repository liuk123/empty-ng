import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PageInfo } from 'src/app/biz/model/common/page-info.model';
import { ArtItem } from '../model/artlist.model';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-collect-blog',
  templateUrl: './collect-blog.component.html',
  styleUrls: ['./collect-blog.component.less']
})
export class CollectBlogComponent implements OnInit {

  pageData: PageInfo<ArtItem> = new PageInfo()
  otherId
  constructor(
    private srv: ArticleService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.queryParamMap.subscribe(v=>{
      this.otherId = v.get('userId')
      this.load(1, this.otherId)
    })
  }
  /**
   * 收藏
   * @param pageIndex 
   * @param userId 
   */
  load(pageIndex, userId){
    let params={
      id:userId,
      pageIndex: pageIndex,
      pageSize: this.pageData.pageSize
    }
    this.pageData.loading = true
    this.srv.getCollect(params).subscribe(res=>{
      if(res.isSuccess()){
        this.pageData = {...res, list: res.list.map(v=> v.article)};
      }
    })
  }

}
