import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PageInfo } from 'src/app/biz/model/common/page-info.model';
import { User } from 'src/app/biz/model/common/user.model';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-focus-user',
  templateUrl: './focus-user.component.html',
  styleUrls: ['./focus-user.component.less']
})
export class FocusUserComponent implements OnInit {

  pageData: PageInfo<User> = new PageInfo()
  otherId
  trackByItem(index: number, item: User) { return item.id }
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
   * 关注列表
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
    this.srv.getFocus(params).subscribe(res=>{
      if(res.isSuccess() && res.list){
        this.pageData = {...res, list: res.list.map(v=> v.focusUser)};
      }
    })
  }
  delFocus(otherId){
    this.srv.delFocus(otherId).subscribe(res=>{
      if(res.isSuccess()){
        this.load(this.pageData.pageIndex, this.otherId)
      }
    })
  }
}
