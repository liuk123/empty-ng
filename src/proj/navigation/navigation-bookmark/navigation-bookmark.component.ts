import { ApplicationRef, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { Observable, zip } from 'rxjs';
import { first } from 'rxjs/operators';
import { MessageUtilService } from 'src/app/core/services/message-util.service';
import { Navigation } from '../model/navigation';
import { NavigationService } from '../service/navigation.service';
import { ConfigService } from 'src/app/core/services/config.service';
import { JsUtilService } from 'src/app/shared/utils/js-util';
import {Slugger} from 'marked';
import { IndexDBService } from 'src/app/core/services/indexDB.service';

@Component({
  selector: 'app-navigation-bookmark',
  templateUrl: './navigation-bookmark.component.html',
  styleUrls: ['./navigation-bookmark.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationBookmarkComponent implements OnInit,OnDestroy {
  db:IDBDatabase=null

  faviconUrl = ConfigService.Config.faviconUrl
  defaultFavicon = 'assets/image/common/nofavicon.svg'
  categoryTree = []
  selData: Navigation[]

  slugger = new Slugger()

  trackByNavigation(index: number, item: Navigation) { return item.title }
  trackByNavigationItem(index: number, item: Navigation) { return item.title }

  lastNavData:any[]= []
  get historyNavList(){
    return this.lastNavData.slice(0,15)
  }

  constructor(
    private srv: NavigationService,
    private jsUtil: JsUtilService,
    private cf: ChangeDetectorRef,
    private el: ElementRef,
    private message: MessageUtilService,
    private appRef: ApplicationRef,
    private dbSrv: IndexDBService,
  ) { }
  ngOnDestroy(): void {
    if(ConfigService.Config.isBrowser){
      this.dbSrv.closeDB(this.db)
    }
  }
  ngOnInit(): void {
    this.getBookmarkCategory()
    if(ConfigService.Config.isBrowser){
      this.dbSrv.openDB('cicodeBookMark', [
        {
          storeName:'bookItem'
        },
      ]).subscribe(v=>{
        this.db = v
        this.dbSrv.getAllData(this.db, 'bookItem').subscribe(ret=>{
          this.lastNavData = ret.sort((a,b)=>b.updateTime-a.updateTime)
        })
      })
    }
  }

  selectNav(data, isDelStateKey = false) {
    if (data.pid == null) { // 点击一级菜单时
      if (ConfigService.Config.isBrowser) {
        window?.localStorage?.setItem('bookmarkId', data.id)
      }
      this.jsUtil.loopTree(this.categoryTree,(v)=>{
        v.selected = data.id == v.id
      })
      this.getBookmarkCategoryByPid(data.id, isDelStateKey).subscribe(v => {
        this.selData = v.data.map(v=>({
          ...v,
          slugger: 'h_'+this.slugger.slug(v.title, { dryrun: true }),
        }))
        this.cf.markForCheck()
        if (ConfigService.Config.isBrowser && !isDelStateKey) {
          this.scrollInto(this.selData[0].slugger)
        }
      })
    } else { // 点击其他一级菜单的二级节点时
      if (!this.selData || this.selData[0].pid != data.pid) {
        this.jsUtil.loopTree(this.categoryTree,(v)=>{
          v.selected = data.pid == v.id
        })
        this.getBookmarkCategoryByPid(data.pid, isDelStateKey).subscribe(v => {
          this.selData = v.data.map(v=>({
            ...v,
            slugger: 'h_'+this.slugger.slug(v.title, { dryrun: true }),
          }))
          this.cf.markForCheck()
          if (ConfigService.Config.isBrowser && !isDelStateKey) {
            this.scrollInto(data.slugger)
          }
        })
      } else { // 点击本菜单的二级节点时
        this.scrollInto(data.slugger)
      }
    }
  }
  scrollInto(data) {
    this.appRef.isStable.pipe(first(isStable => isStable === true)).subscribe(v => {
      let elem = this.el.nativeElement.querySelector(`#${data}`)
      if (elem) {
        elem.scrollIntoView({ block: 'start', inline: 'nearest', behavior: 'smooth' });
      }
    })
  }
  getBookmarkCategory(isDelStateKey = false) {
    this.srv.getBookmarkCategory(isDelStateKey).subscribe(res => {
      if (res.isSuccess()) {
        let tem = res.data.map(v => ({
          ...v,
          slugger: 'h_'+this.slugger.slug(v.title, { dryrun: true }),
          selected: false
        }))
        this.categoryTree = this.jsUtil.setTree(tem)
        if (ConfigService.Config.isBrowser) {
          let bookmarkId = window.localStorage.getItem('bookmarkId')
          if (bookmarkId) {
            this.selectNav({ id: bookmarkId }, isDelStateKey)
          } else {
            this.selectNav({ id: this.categoryTree[0]?.id }, isDelStateKey)
          }
        } else {
          this.selectNav({ id: this.categoryTree[0]?.id }, isDelStateKey)
        }
      }
    })
  }

  getBookmarkCategoryByPid(id, isDelStateKey = false): Observable<any> {
    return this.srv.getBookmarkCategoryByPid({id, size:21}, isDelStateKey)
  }
  
  goPage(item){
    let i = this.lastNavData.findIndex(v=>v.id == item.id)
    if(i!==-1){
      this.lastNavData.splice(i,1)
    }
    this.lastNavData.unshift(item)
    this.dbSrv.update(this.db, 'bookItem', [item]).subscribe()
    if(this.lastNavData.length>50){
      this.dbSrv.deleteDB(this.db,'bookItem', this.lastNavData[this.lastNavData.length-1].id).subscribe()
    }
  }
  delLastNavData(id,i){
    this.lastNavData.splice(i,1)
    this.dbSrv.deleteDB(this.db,'bookItem', id).subscribe()
  }
  clearLastNavData(){
    this.lastNavData = null;
    this.dbSrv.deleteDBAll('cicodeBookMark').subscribe()
  }

  getRandomBookmark(){
    let arr = [], sum =0
    this.selData.forEach(v=>{
      arr.push(v.bookmarkList.length)
      sum+=v.bookmarkList.length
    })
    let index = Math.floor(Math.random() * sum)
    let ret=null
    for(let i=0;i<arr.length;i++){
      if(index>=arr[i]){
        index = index - arr[i]
      }else{
        ret = this.selData[i]?.bookmarkList[index]
        break
      }
    }

    zip(
      this.message.info(`即将前往-${ret.title}`).onClose,
      this.message.info(ret.descItem).onClose,
    ).subscribe(v=>{
      window.open(ret.link, '_blank')
    })

  }

}

