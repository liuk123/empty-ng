import { ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { from, Unsubscribable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { JsUtilService } from 'src/app/shared/utils/js-util';
import { UtilService } from 'src/app/shared/utils/util';
import { DropDirective } from '../directive/drop.directive';
import { Navigation, NavigationItem } from '../model/navigation';

@Component({
  selector: 'app-navigation-gallery',
  templateUrl: './navigation-gallery.component.html',
  styleUrls: ['./navigation-gallery.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationGalleryComponent implements OnInit, OnDestroy {

  @ViewChildren(DropDirective) drops!: QueryList<DropDirective>
  subscribable: Unsubscribable = null

  isEdit: boolean = false
  private _navs
  private copyNavs
  @Input() set navs(val){
    this._navs = this.util.columnsArr(val, [[],[],[],[]])
    this.copyNavs = this.jsutil.clone(this._navs)
  }
  get navs(){
    return this._navs
  }

  trackByNavigation(index: number, item: Navigation) { return item.title }
  trackByNavigationItem(index: number, item: NavigationItem) { return item.url }
  constructor(
    private router: Router,
    private jsutil: JsUtilService,
    private util: UtilService) { }

  ngOnInit(): void {
    
  }
  ngOnDestroy(){
    this.subscribable.unsubscribe()
    this.subscribable = null
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
    this.drop()
  }
  save(){
    this.isEdit = false
    this.subscribable.unsubscribe()
    this.subscribable = null
  }
  drop(){
    let arr = this.drops.toArray()
    let lastDom = null
    for(let i=0; i<arr.length; i++){
      if(arr[i]){
        let tem = arr[i].data
        for(let j=0; j<tem.length; j++){
          tem[j].rect = tem[j].dom.getBoundingClientRect()
        }
      }
    }

    this.subscribable = from(arr).pipe(
      mergeMap(v=> v.drop$)
    ).subscribe(v=>{
      let rectlist = v.data
      for(let i=0; i<rectlist.length; i++){
        if(v.x > rectlist[i].rect.left && v.x < rectlist[i].rect.right && 
          v.y > rectlist[i].rect.top && v.y < rectlist[i].rect.bottom){
            if(lastDom == null || lastDom != rectlist[i].dom){
              lastDom = rectlist[i].dom

              console.log(rectlist)
              lastDom.style.backgroundColor = "#f00"
              // console.log(v.x)
              // console.log(rectlist[i].rect.left)
              // console.log(rectlist[i].rect.right)
              // console.log(rectlist[i].dom.getBoundingClientRect())

            }
        }
      }
    })
  }
}
