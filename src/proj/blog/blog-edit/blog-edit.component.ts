import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NzUploadChangeParam, NzUploadFile } from 'ng-zorro-antd/upload';
import { HttpUtilService } from 'src/app/biz/services/common/http-util.service';
import { UserService } from 'src/app/biz/services/common/user.service';
import { MessageUtilService } from 'src/app/core/services/message-util.service';
import { CategoryItem } from '../model/artlist.model';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-blog-edit',
  templateUrl: './blog-edit.component.html',
  styleUrls: ['./blog-edit.component.less']
})
export class BlogEditComponent implements OnInit {
  listOfOption: Array<{ name: string; id: number }> = [];
  form: FormGroup;
  fileList: NzUploadFile[]
  categoryList: CategoryItem[]

  files = []

  constructor(
    private fb: FormBuilder,
    private srv: ArticleService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private message: MessageUtilService,
    private userSrv: UserService,
    private httpSrv: HttpUtilService
  ) {
    this.form  = this.fb.group({
      id: [null],
      descItem: [null, [ Validators.required, Validators.minLength(4), Validators.maxLength(400) ]],
      tagList: [null, [ Validators.required]],
      content: [null, [ Validators.required, Validators.minLength(10), Validators.maxLength(3000) ]],
      category: [null, [ Validators.required]]
    })
  }

  ngOnInit(): void {
    this.activatedRoute.queryParamMap.subscribe(v=>{
      const id = v.get('id')
      if(id != null){
        this.srv.getArticleById(id).subscribe(res=>{
          if(res.isSuccess()){
            this.form.patchValue({
              id: res.data.id,
              title: res.data.title,
              descItem: res.data.descItem,
              tagList: res.data.tagList.map(v=>v.id),
              content: res.data.content,
              category: res.data.category.id
            })
          }
        })
      }
    })
    this.userSrv.userEvent.subscribe(v=>{
      if(v.id){
        this.srv.getCategory({id: v.id}).subscribe(res=>{
          if(res.isSuccess()){
            this.categoryList=res.data
          }
        })
        this.srv.getTags().subscribe(res=>{
          if(res.isSuccess()){
            this.listOfOption = res.data
          }
        })
      }
    })
  }
  get content(){
    return this.form.get("content").value
  }
  
  handleChange(info: NzUploadChangeParam){
    let fileList = [...info.fileList]
    fileList = fileList.map(file => {
      if (file.response) {
        file.url = file.response.data
      }
      return file;
    });
    this.fileList = fileList
  }
  
  submitForm(v){
    for (const i in this.form.controls) {
      this.form.controls[i].markAsDirty();
      this.form.controls[i].updateValueAndValidity();
    }
    if(this.form.valid == false) return null

    let params = {
      id: v.id,
      descItem: v.descItem,
      tagList: v.tagList,
      content: v.content,
      title: null,
      postImage: null,
      category: v.category
    }

    //判断文章用到的图片在列表中-待写fileList
    //(防止引用别人文章中的图片，删除别人文章中的图片)
    let artImgList = v.content.match(/![.*?]\(.+?\)/g)
    console.log(artImgList)
    if(artImgList!=null){
      if(artImgList.length>10){
        this.message.warning("每篇文章最多使用10张图片")
        return null
      }
      const imageList = this.fileList.map(v=>v.url)
      if(artImgList!=null && !artImgList.every(v=>imageList.includes(v))){
        this.message.warning("文章中引用的图片地址，需要在上传列表中")
        return null
      }
      params.postImage = artImgList[0]
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
        this.router.navigate(['./blog/detail'],{queryParams: {id: res.data}});
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

// {
//   uid: '-1',
//   name: 'xxx.png',
//   status: 'done',
//   url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
//   thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
// },