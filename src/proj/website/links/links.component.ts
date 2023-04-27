import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { WebsiteService } from '../service/website.service';

// recommend|hot|friend
@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LinksComponent implements OnInit {

  data = {}
  category = []

  constructor(
    private srv:WebsiteService,
    private cf: ChangeDetectorRef,
  ) { }

  ngOnInit(): void {
    this.getLink()
  }
  getLink(){
    this.srv.getLink().subscribe(res=>{
      if(res.isSuccess()){
        this.data = {}
        res.data.forEach(v=>{
          if(!this.data?.hasOwnProperty(v.category)){
            this.data[v.category] = []
          }
          this.data[v.category].push(v)
        })
        this.category = Object.keys(this.data)
        this.cf.markForCheck()
      }
    })
  }
}
