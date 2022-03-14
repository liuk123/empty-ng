import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
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
    private util: UtilService,
    private cf: ChangeDetectorRef,
    private sanitizer: DomSanitizer,
    private http:HttpClient,
    private router: Router) { }

  ngOnInit(): void {
    this.http.get<Navigation[]>('assets/data/navigation.json').subscribe(res=>{
      res.forEach(item=>{
        item.children.forEach(v=>{
          v.icon = v.icon ?
            this.sanitizer.bypassSecurityTrustResourceUrl(v.icon):
            'https://www.google.cn/s2/favicons?domain='+v.link
        })
      })
      this.navs = res
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
    const m = Math.floor(Math.random() * this.navs[n].children.length)
    let item = this.navs[n].children[m]
    if(item.type==='link'){
      window.open(item.link,'_blank')
    }else if(item.type === 'router'){
      this.router.navigate([item.route], {queryParams: item.params})
    }
  }
}
