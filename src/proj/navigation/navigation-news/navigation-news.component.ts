import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { NavigationService } from '../service/navigation.service';

@Component({
  selector: 'app-navigation-news',
  templateUrl: './navigation-news.component.html',
  styleUrls: ['./navigation-news.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationNewsComponent implements OnInit {

  data = []
  options = []
  constructor(
    private srv: NavigationService,
    private cf: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.getNews()
  }

  getNews(type=null){
    this.srv.getNews(type).subscribe(res=>{
      if(res.isSuccess()){
        this.data = res.data
        this.cf.markForCheck()
      }
    })
  }
}
