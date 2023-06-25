import { ApplicationRef, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, first } from 'rxjs/operators';
import { PageInfo } from 'src/app/biz/model/common/page-info.model';
import { ArtItem } from '../model/artlist.model';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-blog-home',
  templateUrl: './blog-home.component.html',
  styleUrls: ['./blog-home.component.less']
})
export class BlogHomeComponent implements OnInit, OnDestroy {
  @ViewChild('artAnchor', {read: ElementRef}) anchor: ElementRef
  listData:ArtItem[]
  tagData = []
  tagColunm = []
  tagIndex = null
  recommend
  sel$ = new Subject()

  listPageData: PageInfo<ArtItem>= new PageInfo([],1,10);
  constructor(
    private articleSrv: ArticleService,
    private appRef: ApplicationRef,
  ) {}

  ngOnInit(): void {
    this.loadTagColumn()

    this.sel$.pipe(
      debounceTime(800),
    ).subscribe(()=>{
      this.load(1);
    })
  }
  ngOnDestroy(){
    this.sel$.complete()
  }
  loadTagColumn(){
    this.articleSrv.getTagColumn().subscribe((tagRes)=>{
      if(tagRes.isSuccess()){
        this.tagColunm = tagRes.data
        if(this.tagIndex!==null){
          this.tagData = this.tagColunm[this.tagIndex]?.tagList
        }else{
          this.tagData = []
          this.tagColunm.forEach(val=>{
            val.tagList.forEach(v=>{
              this.tagData.push(v)
            })
          })
        }
        this.load(1)
        this.getRecommendArticle()
      }
    })
  }
  load(n:Number){
    let params={
      pageIndex: n,
      pageSize: this.listPageData.pageSize,
      tagIds: this.tagData.filter(v=>v.isSelected).map(v=>v.id),
      tagColumnId: this.tagIndex!==null?this.tagColunm[this.tagIndex]?.id:'',
    }
    this.articleSrv.getArticles(params).subscribe(res=>{
      if(res.isSuccess()){
        res.list?.forEach(item=>{
            item.keywords = item.keyword?.split?.(',')??[]
        })
        this.listPageData = res;
        
        this.scrollInto(this.anchor)
        // this.anchor.nativeElement.scrollIntoView({ block: 'start', inline: 'nearest', behavior: 'smooth' });
        // window.scrollTo({top:0})
      }
    })
  }
  scrollInto(el: ElementRef) {
    this.appRef.isStable.pipe(first(isStable => isStable === true)).subscribe(v => {
      el.nativeElement.scrollIntoView({ block: 'start', inline: 'nearest', behavior: 'smooth' });
    })
  }
  switchTitle(i=null){

    this.tagIndex=i
    if(this.tagIndex!==null){
      this.tagData = this.tagColunm[this.tagIndex]?.tagList.map(v=>({
        ...v,
        isSelected: false,
      }))
    }else{
      this.tagData = []
      this.tagColunm.forEach(val=>{
        val.tagList.forEach(v=>{
          this.tagData.push({
            ...v,
            isSelected: false
          })
        })
      })
    }
    
    this.sel$.next()
    this.getRecommendArticle()
  }
  selectEvent(data){
    data.isSelected=!data.isSelected
    this.sel$.next()
  }
  getRecommendArticle(){
    this.articleSrv.getLink().subscribe(res=>{
      this.recommend = res.data.filter(v=>this.tagIndex==null || !v.category || v.category==this.tagColunm[this.tagIndex]?.id)
    })
  }

}