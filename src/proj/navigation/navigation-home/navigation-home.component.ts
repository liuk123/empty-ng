import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation-home',
  templateUrl: './navigation-home.component.html',
  styleUrls: ['./navigation-home.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationHomeComponent implements OnInit {

  bannerItem=null
  bannerIndex = 0
  banners: any[]=[]
  
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
      this.bannerIndex = Math.floor(Math.random()*this.banners.length)
      this.bannerItem = this.banners[this.bannerIndex]
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
  switchBanner(){
    let len = this.banners.length
    if(this.bannerIndex<len-1){
      this.bannerIndex++
    }else{
      this.bannerIndex=0
    }
    this.bannerItem = this.banners[this.bannerIndex]
  }
}
