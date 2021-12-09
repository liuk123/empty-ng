import { ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { from, Unsubscribable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { UtilService } from 'src/app/shared/utils/util';
import { DraggableDirective } from '../directive/draggable.directive';
import { Navigation, NavigationItem } from '../model/navigation';

@Component({
  selector: 'app-navigation-gallery',
  templateUrl: './navigation-gallery.component.html',
  styleUrls: ['./navigation-gallery.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationGalleryComponent implements OnInit, OnDestroy {

  @ViewChildren(DraggableDirective) els!: QueryList<DraggableDirective>
  subscribable: Unsubscribable = null

  isEdit: boolean = false
  @Input() navs: Navigation[]
  get columns(){
    return this.util.columnsArr(this.navs, [[],[],[],[]])
  }

  trackByNavigation(index: number, item: Navigation) { return item.title }
  trackByNavigationItem(index: number, item: NavigationItem) { return item.url }
  constructor(
    private router: Router,
    private util: UtilService) { }

  ngOnInit(): void {
    
  }
  ngOnDestroy(){
    this.subscribable.unsubscribe()
    this.subscribable = null
  }
  edit(){
    this.isEdit = true
    this.drag()
  }
  save(){
    this.isEdit = false
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
  drag(){
    let arr = this.els.toArray()
    let lastDom = null
    const rectlist = arr.map(v=>({
      rect: v.rect.dom.getBoundingClientRect(),
      ...v.rect
    }))
    console.log(rectlist)

    this.subscribable = from(arr).pipe(
      mergeMap(v=> v.drag$)
    ).subscribe(v=>{
      for(let i=0; i<rectlist.length; i++){
        if(v.x > rectlist[i].rect.left && v.x < rectlist[i].rect.right && 
          v.y > rectlist[i].rect.top && v.y < rectlist[i].rect.bottom){
            if(lastDom == null || lastDom != rectlist[i].dom){
              lastDom = rectlist[i].dom
              
              lastDom.style.backgroundColor = "#f00"
              console.log(v.x)
              console.log(rectlist[i].rect.left)
              console.log(rectlist[i].rect.right)
              console.log(rectlist[i].dom.getBoundingClientRect())
            }
        }
      }
    })

  }
}
