import { ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtilService } from 'src/app/shared/utils/util';
import { Navigation, NavigationItem } from '../model/navigation';

@Component({
  selector: 'app-navigation-gallery',
  templateUrl: './navigation-gallery.component.html',
  styleUrls: ['./navigation-gallery.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationGalleryComponent implements OnInit, OnDestroy {

  isEdit: boolean = false
  private _navs
  @Input() set navs(val){
    this._navs = this.util.columnsArr(val, [[],[],[],[]])
  }
  get navs(){
    return this._navs
  }

  trackByNavigationList(index: number, item: Navigation[]) { return item }
  trackByNavigation(index: number, item: Navigation) { return item.title }
  trackByNavigationItem(index: number, item: NavigationItem) { return item.url }
  constructor(
    private router: Router,
    private util: UtilService) { }

  ngOnInit(): void {
  }
  ngOnDestroy(){
  }
  open(item: NavigationItem){
    if(item.type == 'link'){
      window.open(item.url,'_blank');
    }else if(item.type='router'){
      this.router.navigate(['./'+item.route]);
    } 
  }

  edit(){
    this.isEdit = true
  }
  save(){
    this.isEdit = false
  }
}
