import { ApplicationRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { RssService } from '../services/rss.service';
import { PageInfo } from 'src/app/biz/model/common/page-info.model';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-rss-home',
  templateUrl: './rss-home.component.html',
  styleUrls: ['./rss-home.component.less']
})
export class RssHomeComponent implements OnInit {
  @ViewChild('artAnchor', {read: ElementRef}) anchor: ElementRef
  pageData = new PageInfo([],1,10)
  constructor(private srv: RssService,private appRef: ApplicationRef) { }

  ngOnInit(): void {
    this.load(1, false)
  }
  load(n:Number, isAnthor:boolean){
    let params = {
      pageIndex: n,
      pageSize: this.pageData.pageSize,
    }
    this.srv.getRss(params).subscribe(res=>{
      if(res.isSuccess()){
        this.pageData = res
        if(isAnthor){
          this.scrollInto(this.anchor)
        }
      }
    })
  }
  scrollInto(el: ElementRef) {
    this.appRef.isStable.pipe(first(isStable => isStable === true)).subscribe(v => {
      el.nativeElement.scrollIntoView({ block: 'start', inline: 'nearest', behavior: 'smooth' });
    })
  }

}
