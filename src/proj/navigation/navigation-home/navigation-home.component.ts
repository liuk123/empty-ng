import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation-home',
  templateUrl: './navigation-home.component.html',
  styleUrls: ['./navigation-home.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationHomeComponent implements OnInit {

  bannerUrl:string
  banners: any[]
  searchBoxValue: string = ''
  get searchValue(){
    return encodeURIComponent(this.searchBoxValue)
  }
  set searchValue(v){
    this.searchBoxValue = v
  }
  searchUriData=[];

  constructor(
    private cf: ChangeDetectorRef,
    private http: HttpClient,
    ) { }

  ngOnInit(): void {
    this.http.get<any>('assets/data/search.json').subscribe(res=>{
      this.searchUriData = res.search;
      this.banners = res.banners
      this.bannerUrl = this.banners[0].url
      this.cf.markForCheck()
    })
  }

  search(searchUri:string,indexUri:string = ''){
    if(this.searchValue){
      window.open(searchUri + this.searchValue, '_blank')
    }else{
      window.open(indexUri, '_blank')
    }
  }
}
