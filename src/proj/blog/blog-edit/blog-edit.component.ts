import { ApplicationRef, Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { first, takeUntil } from 'rxjs/operators';
import { UserService } from 'src/app/biz/services/common/user.service';
import { MessageUtilService } from 'src/app/core/services/message-util.service';
import { CategoryItem } from '../model/artlist.model';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-blog-edit',
  templateUrl: './blog-edit.component.html',
  styleUrls: ['./blog-edit.component.less']
})
export class BlogEditComponent implements OnInit, OnDestroy {
  columnOfOption: any = []
  keywordOption=[]
  form: FormGroup
  categoryList: CategoryItem[]

  files = []
  unsubEvent$ = new Subject()

  intersection = []

  constructor(
    private fb: FormBuilder,
    private srv: ArticleService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private message: MessageUtilService,
    private userSrv: UserService,
    private appRef: ApplicationRef
  ) {
    this.form  = this.fb.group({
      id: [null],
      descItem: [null, [ Validators.required, Validators.minLength(4), Validators.maxLength(400) ]],
      tagColumn: [null, [ Validators.required]],
      content: [null, [ Validators.required, Validators.minLength(10), Validators.maxLength(8000) ]],
      category: [null, [ Validators.required]],
      keyword:  [null],
    })
  }

  ngOnInit(): void {
    this.userSrv.userEvent.pipe(takeUntil(this.unsubEvent$)).subscribe(v=>{
      if(v&&v.id){
        this.srv.getCategory({id: v.id}).subscribe(res=>{
          if(res.isSuccess()){
            this.categoryList=res.data
          }
        })
        this.srv.getTagColumn().subscribe(res=>{
          if(res.isSuccess()){
            this.columnOfOption = res.data.map(v=>({
              label: v.title,
              value: v.id,
              children: v.tagList.map(val=>({
                label: val.title,
                value: val.id,
                isLeaf: true
              }))
            }))

            this.activatedRoute.queryParamMap.pipe(takeUntil(this.unsubEvent$)).subscribe(v=>{
              const id = v.get('id')
              if(id != null){
                this.srv.getArticleById(id).subscribe(res=>{
                  if(res.isSuccess()){
                    let tagColumnId = null
                    for(let i=0;i<this.columnOfOption.length; i++){
                      let t = this.columnOfOption[i].children.find(b=>b.value == res.data.tag?.id)
                      if(t){
                        tagColumnId = this.columnOfOption[i].value
                        break
                      }
                    }
                    this.form.patchValue({
                      id: res.data.id,
                      title: res.data.title,
                      descItem: res.data.descItem,
                      tagColumn: [tagColumnId,res.data.tag?.id],
                      content: res.data.content,
                      category: res.data.category.id,
                      keyword: res.data?.keyword?.split(',')
                    })
                    let urls = this.getUrls(res.data.content)
                    if(urls.length>0){
                      this.files=urls.map(v=>({name:'',safeUrl: v, url: v}))
                    }
                  }
                })
              }
            })
          }
        })
      }
    })
  }
  ngOnDestroy(): void {
    this.unsubEvent$.next()
    this.unsubEvent$.complete()
  }
  get content(){
    return this.form.get("content").value
  }

  // 路由守卫调用
  isFormDirty(){
    return this.form.dirty
  }

  refreshContent = ''
  timer = null
  refresh(){
    this.refreshContent = this.content
    if(this.timer!==null){
      clearTimeout(this.timer)
      this.timer = null
    }
    this.timer = setTimeout(()=>{
      this.intersection = ['marked-image']
      this.timer = null
    },1000)
  }
  getUrls(data){
    let urls = []
    let temArr = null
    let reg = /\!\[.*?\]\((.+?)\)/g
    while((temArr = reg.exec(data))!=null){
      urls.push(temArr[1])
    }
    return urls
  }
  submitForm(v){
    for (const i in this.form.controls) {
      this.form.controls[i].markAsDirty();
      this.form.controls[i].updateValueAndValidity();
    }
    if(this.form.valid == false) return null

    if(v?.keyword){
      for(let i=0; i<v.keyword.length;i++){
        if(v.keyword[i].length>10){
          this.message.warning(v.keyword[i]+'已超过10个字符')
          return null
        }
      }
    }
    let params = {
      id: v.id,
      descItem: v.descItem,
      tagId: v.tagColumn[1],
      tagColumnId: v.tagColumn[0],
      content: v.content,
      title: null,
      postImage: null,
      category: v.category,
      keyword: v?.keyword?.join(',')
    }

    //判断文章用到的图片在列表中
    //(防止引用别人文章中的图片，删除别人文章中的图片)
    // let artImgList = v.content.match(/!\[.*?\]\(.+?\)/g)
    let imageUrls = this.getUrls(v.content)
    if(imageUrls.length>0){
      if(imageUrls.length>25){
        this.message.warning("每篇文章最多使用25张图片")
        return null
      }
      for(let i = 0; i< imageUrls.length; i++){
        if(!this.files.some(v=>v.url == imageUrls[i])){
          this.message.warning("文章只能使用图片列表中的图片地址")
          return null
        }
      }
      params.postImage = imageUrls[0]
    }
    
    let titleArr = v.content.match(/^#{1,2}\s+(.+)(?:\n+|$)/)
    if(titleArr==null){
      this.message.warning("文章要以一二级标题作为开始")
      return null
    }else{
      params.title = titleArr[1]
    }
    this.srv.save(params).subscribe(res=>{
      if(res.isSuccess()){
        // this.router.navigate(['./blog/detail'],{queryParams: {id: res.data}});
        this.router.navigate(['./blog/detail', res.data]);
        this.form.markAsPristine()
      }
    })
  }
  /**
   * 删除文件时的回调
   * @returns 
   */
  nzRemove(){
    return false
  }
}