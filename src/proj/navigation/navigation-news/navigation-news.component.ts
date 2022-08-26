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
  options = [
    {name: '百度', value: 'baidu'},
    {name: '知乎', value: 'zhihu'}
  ]
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
        // let tem = res.data.reduce((acc,val)=>{
        //   if(acc[val.type]==undefined){
        //     acc[val.type] = []
        //   }
        //   acc[val.type].push(val)
        //   return acc
        // },{})
        // Object.keys(tem).forEach(key=>{
        //   this.data.push({title: key, content: tem[key]})
        // })
        this.cf.markForCheck()
      }
    })
  }
}
