import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtilService } from 'src/app/shared/utils/util';
import { Navigation } from '../model/navigation';

@Component({
  selector: 'app-navigation-gallery',
  templateUrl: './navigation-gallery.component.html',
  styleUrls: ['./navigation-gallery.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationGalleryComponent implements OnInit, OnDestroy {

  get navList(){
    return this.util.columnsArr(this.navs, 4)
  }
  navs:Navigation[] = []

  trackByNavigationList(index: number, item: Navigation[]) { return item }
  trackByNavigation(index: number, item: Navigation) { return item.title }
  trackByNavigationItem(index: number, item: Navigation) { return item.title }
  constructor(
    private router: Router,
    private util: UtilService,
    private cf: ChangeDetectorRef,
    private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get<Navigation[]>('assets/data/navigation.json').subscribe(res=>{
      this.navs = res;
      this.cf.markForCheck()
    })
  }
  ngOnDestroy(){
  }
  open(item: Navigation){
    window.open(item.link,'_blank');
  }

  // 随机打开页面
  randomPages(){
    const n = Math.floor(Math.random() * this.navs.length)
    const m = Math.floor(Math.random() * n)
    if(this.navs[n]&&this.navs[n].children[m]){
      window.open(this.navs[n].children[m].link)
    }
  }
}
