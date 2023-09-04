import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NavigationService } from '../service/navigation.service';
import { Navigation } from '../model/navigation';
import { ConfigService } from 'src/app/core/services/config.service';
import { JsUtilService } from 'src/app/shared/utils/js-util';
import { MenuService } from 'src/app/biz/services/common/menu.service';

@Component({
  selector: 'app-navigation-bookmark-list',
  templateUrl: './navigation-bookmark-list.component.html',
  styleUrls: ['./navigation-bookmark-list.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationBookmarkListComponent implements OnInit, OnDestroy {
  unsub$ = new Subject()
  id:string
  navigation: Navigation
  // categoryData
  categoryTree
  faviconUrl = ConfigService.Config.faviconUrl
  defaultFavicon = 'assets/image/common/nofavicon.svg'

  trackByNavigation(index: number, item: Navigation) { return item.title }
  trackByNavigationItem(index: number, item: Navigation) { return item.title }

  constructor(
    private activatedRoute: ActivatedRoute,
    private srv: NavigationService,
    private cf: ChangeDetectorRef,
    private jsUtil: JsUtilService,
    private menuSrv: MenuService,
    ) { }

  ngOnDestroy(): void {
    this.unsub$.next(null)
    this.unsub$.complete()
  }
  ngOnInit(): void {
    this.activatedRoute.paramMap.pipe(takeUntil(this.unsub$)).subscribe(v=>{
      this.id = v.get('id')
      this.getBookmarkCategory(false)
      this.getBookmarkCategoryById()
    })
  }
  getBookmarkCategoryById(){
    this.srv.getBookmarkCategoryById({id: this.id}).subscribe(res=>{
      if(res.isSuccess()){
        this.navigation = res.data[0]

        let metaData = {
          title: this.navigation.title+'_cicode导航',
          description: this.navigation.descItem
        }
        this.menuSrv.setMeta(metaData)
        this.cf.markForCheck()
      }
    })
  }
  
  selectNav(e){
    if(e.type=='sub'){
      e.selected=!e.selected
    }
  }

  getBookmarkCategory(isDelStateKey = false) {
    this.srv.getBookmarkCategory(isDelStateKey).subscribe(res => {
      if (res.isSuccess()) {
        let selItem = res.data.find(v=>v.id == this.id)
        let tem = res.data.map(v => ({
          ...v,
          selected: selItem.pid == v.id,
          type: v.pid==null?'sub':'router',
          route: '/nav/list/'+v.id
        }))
        this.categoryTree = this.jsUtil.setTree(tem)
        this.cf.markForCheck()
      }
    })
  }

}
