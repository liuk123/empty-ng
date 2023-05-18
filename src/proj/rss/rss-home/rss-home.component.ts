import { Component, OnInit } from '@angular/core';
import { RssService } from '../services/rss.service';
import { PageInfo } from 'src/app/biz/model/common/page-info.model';

@Component({
  selector: 'app-rss-home',
  templateUrl: './rss-home.component.html',
  styleUrls: ['./rss-home.component.less']
})
export class RssHomeComponent implements OnInit {

  pageData = new PageInfo([],1,10)
  constructor(private srv: RssService) { }

  ngOnInit(): void {
    this.load(1)
  }
  load(n:Number){
    let params = {
      pageIndex: n,
      pageSize: this.pageData.pageSize,
    }
    this.srv.getRss(params).subscribe(res=>{
      if(res.isSuccess()){
        this.pageData = res
      }
    })
  }

}
