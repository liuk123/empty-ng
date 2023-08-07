import { ApplicationRef, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { combineLatest, Subject } from 'rxjs';
import { debounceTime, first, takeUntil } from 'rxjs/operators';
import { PageInfo } from 'src/app/biz/model/common/page-info.model';
import { User } from 'src/app/biz/model/common/user.model';
import { UserService } from 'src/app/biz/services/common/user.service';
import { UtilService } from 'src/app/shared/utils/util';
import { ArtItem, ArticleType, CategoryItem } from '../model/artlist.model';
import { ArticleService } from '../services/article.service';
import { MessageUtilService } from 'src/app/core/services/message-util.service';

@Component({
  selector: 'app-my-blog',
  templateUrl: './my-blog.component.html',
  styleUrls: ['./my-blog.component.less']
})
export class MyBlogComponent implements OnInit, OnDestroy {
  @ViewChild('artAnchor', {read: ElementRef}) anchor: ElementRef

  articleType=ArticleType
  page: PageInfo<ArtItem> = new PageInfo([],1,10)
  // 用户id
  otherId: string
  isSelf: boolean = false
  otherInfo: User = {}
  isloign = null

  selCategoryData: CategoryItem
  categorys: CategoryItem[]

  isFocus = null
  loading = true
  unsubEvent$ = new Subject()

  sel$ = new Subject()

  trackByArticleItem(index: number, item: ArtItem) { return item.id }
  trackByCategoryItem(index: number, item: CategoryItem) { return item.id }
  constructor(
    private srv: ArticleService,
    private userSrv: UserService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private appRef: ApplicationRef,
    private messageSrv: MessageUtilService) { }

  ngOnInit(): void {
    combineLatest([this.userSrv.userEvent, this.activatedRoute.paramMap])
    .pipe(
      takeUntil(this.unsubEvent$)
    )
    .subscribe(([userInfo, routeParams]) => {
      this.isloign = Boolean(userInfo && userInfo.username)
      this.otherId = routeParams.get('id') || userInfo && userInfo.id
      if (this.otherId) {
        this.load(1, this.otherId, false)
        this.getCategory(this.otherId)
        if (userInfo && userInfo.id == this.otherId) { //如果是本人页面
          this.isSelf = true
          this.otherInfo = userInfo
        } else { // 他人页面
          this.isSelf = false
          this.getIsFocus(this.otherId)
          // 获取otherInfo
          this.userSrv.getUserInfo(this.otherId).subscribe(res => {
            if (res.isSuccess()) {
              this.otherInfo = res.data
            }
          })
        }
      }
    })

    this.sel$.pipe(
      debounceTime(800),
    ).subscribe(()=>{
      this.load(1, this.otherId, true)
    })
  }
  ngOnDestroy() {
    // this.selCategory()
    this.sel$.complete()
    this.unsubEvent$.next()
    this.unsubEvent$.complete()
  }
  getCategory(otherId) {
    this.srv.getCategory({ id: otherId }).subscribe(res => {
      if (res.isSuccess()) {
        this.categorys = res.data
      }
    })
  }
  /**
   * 加载文章
   * @param pageIndex 1开始
   * @param userId 用户id
   */
  load(pageIndex, userId, isAnthor:boolean) {
    let params = {
      id: userId,
      categoryId: this.selCategoryData ? this.selCategoryData.id : undefined,
      pageIndex: pageIndex,
      pageSize: this.page.pageSize
    }
    this.page.loading = true
    this.srv.getArticlesByAuthorId(params).subscribe(res => {
      this.page.loading = false
      if (res.isSuccess()) {
        res.list?.forEach(item=>{
          if(!Array.isArray(item.keywords)){
            item.keywords = item?.keyword?.split?.(',')??[]
          }
          if(!item.title.startsWith('【'+this.articleType[item?.type])){
            item.title='【'+this.articleType[item?.type]+'】' + item.title
          }          
        })
        this.page = res;
        if(isAnthor){
          this.scrollInto(this.anchor)
        }
      }
    })
  }
  scrollInto(el: ElementRef) {
    this.appRef.isStable.pipe(first(isStable => isStable === true)).subscribe(v => {
      el.nativeElement.scrollIntoView({ block: 'start', inline: 'nearest', behavior: 'smooth' });
    })
  }
  editArticle(id) {
    this.router.navigate(['./blog/edit'], { queryParams: { id } });
  }
  delArticle(id) {
    this.srv.delArticleById(id).subscribe(v => {
      this.messageSrv.success(v?.resultMsg)
      this.load(1, this.otherId, false)
    })
  }
  /**
   * 获取分类 分类切换
   */
  selCategory(data){
    if (this.selCategoryData && data.id === this.selCategoryData.id) {
      this.selCategoryData = null
    } else {
      this.selCategoryData = data
    }
    this.sel$.next()
  }
  /**
   * 判断是否关注
   * @param otherId 
   */
  getIsFocus(otherId) {
    const params = {
      userId: otherId
    }
    this.srv.getIsFocus(params).subscribe(res => {
      this.loading = false
      if (res.isSuccess()) {
        this.isFocus = res.data
      }
    })
  }
  doFocus(otherId) {
    if (this.isFocus === true) {
      this.loading = true
      this.srv.delFocus(otherId).subscribe(res => {
        this.loading = false
        if (res.isSuccess()) {
          this.isFocus = false
        }
      })
    } else if (this.isFocus === false) {
      const params = {
        userId: otherId
      }
      this.loading = true
      this.srv.saveFocus(params).subscribe(res => {
        this.loading = false
        if (res.isSuccess()) {
          this.isFocus = true
        }
      })
    }
  }
}
