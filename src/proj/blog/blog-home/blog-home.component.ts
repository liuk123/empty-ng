import { ApplicationRef, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, first, map, mapTo, pluck } from 'rxjs/operators';
import { PageInfo } from 'src/app/biz/model/common/page-info.model';
import { ArtItem } from '../model/artlist.model';
import { ArticleService } from '../services/article.service';
import { JsUtilService } from 'src/app/shared/utils/js-util';

@Component({
  selector: 'app-blog-home',
  templateUrl: './blog-home.component.html',
  styleUrls: ['./blog-home.component.less']
})
export class BlogHomeComponent implements OnInit, OnDestroy {
  @ViewChild('artAnchor', {read: ElementRef}) anchor: ElementRef
  tagColunm = []
  selTag=[]
  tagItem = null
  recommend$
  sel$ = new Subject()
  listPageData: PageInfo<ArtItem>= new PageInfo([],1,10);

  constructor(
    private articleSrv: ArticleService,
    private appRef: ApplicationRef,
    private jsUtilSrv: JsUtilService
  ) {}

  ngOnInit(): void {
    this.loadTagColumn()

    this.sel$.pipe(
      debounceTime(800),
    ).subscribe(()=>{
      this.load(1,true);
    })
  }
  ngOnDestroy(){
    this.sel$.complete()
  }
  loadTagColumn(){
    this.articleSrv.getTagColumn().subscribe((tagRes)=>{
      if(tagRes.isSuccess()){
        this.tagColunm = tagRes.data
        this.load(1,false)
        this.getRecommendArticle()
      }
    })
  }
  load(n:Number, isAnthor:boolean){
    let params={
      pageIndex: n,
      pageSize: this.listPageData.pageSize,
      tagIds: this.selTag.map(v=>v.id),
      tagColumnId: this.tagItem?.id
    }
    this.articleSrv.getArticles(params).subscribe(res=>{
      if(res.isSuccess()){
        res.list?.forEach(item=>{
            item.keywords = item.keyword?.split?.(',')??[]
        })
        this.listPageData = res;
        
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

  getRecommendArticle(){
    this.recommend$ = this.articleSrv.getLink().pipe(pluck('data'))
  }
  selectTag(data){
    if('tagList' in data){
      data.selected = true
      this.tagColunm.forEach(v=>{
        if(v.id!=data.id){
          v.selected = false 
        }
      })
      if(data.active){
        data.active = false
      }else{
        data.active = true
        this.jsUtilSrv.loopTree(this.tagColunm, (v)=>{
          if(v.title != data.title||v.id!=data.id){
            v.active = false
          }
        }, {mapObject:['tagList']})
      }
      this.tagItem = data
      this.selTag = []
    }else{
      if(data.active){
        data.active = false
        this.selTag.splice(this.selTag.findIndex(v=>v.id == data.id && v.title == data.title),1)
      }else{
        data.active = true
        this.selTag.push(data)
      }
      // data.active = !data.active
      this.tagColunm.forEach(v=>{
        v.active = false
        if(!v.tagList.some(val=>val.title==data.title)){
          v.tagList.forEach(a=>{
            if(a.active){
              a.active=false
              this.selTag.splice(this.selTag.findIndex(v=>v.id == a.id && v.title == a.title),1)
            }
          })
        }
      })

      this.tagItem = null
    }
    this.sel$.next()
  }
  clearSel(){
    this.tagItem = null
    this.selTag = []
    this.jsUtilSrv.loopTree(this.tagColunm, (v)=>{
      if(v.active){
        v.active = false
      }
    }, {mapObject:['tagList']})
    this.sel$.next()
  }
}