import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NzUploadFile } from 'ng-zorro-antd/upload';
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

  constructor(
    private fb: FormBuilder,
    private srv: ArticleService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {
    this.form  = this.fb.group({
      id: [null],
      descItem: [null, [ Validators.required, Validators.minLength(4), Validators.maxLength(200) ]],
      tagList: [null, [ Validators.required]],
      content: [null, [ Validators.required, Validators.minLength(10), Validators.maxLength(1200) ]]
    })
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(v=>{
      if(v.get('id') != null){
        this.srv.getArticleById(v.get('id')).subscribe(res=>{
          if(res.isSuccess()){
            this.form.patchValue({
              id: res.data.id,
              title: res.data.title,
              descItem: res.data.descItem,
              tagList: res.data.tagList.map(v=>v.id),
              content: res.data.content,
            })
          }
        })
      }
    })
    this.srv.getTags().subscribe(res=>{
      if(res.isSuccess()){
        this.listOfOption = res.data
      }
    })
  }
  get content(){
    return this.form.get("content").value
  }
  submitForm(v){
    for (const i in this.form.controls) {
      this.form.controls[i].markAsDirty();
      this.form.controls[i].updateValueAndValidity();
    }
    if(this.form.valid == false) return null
    const reg = /^#{1,3}\s+(.+?)\n/
    let titleArr = v.content.match(reg)
    let params
    if(titleArr){
      params = {
        id: v.id,
        descItem: v.descItem,
        tagList: v.tagList,
        content: v.content,
        title: titleArr[1]
      }
    }else{
      return null
    }
    
    this.srv.save(params).subscribe(res=>{
      if(res.isSuccess()){
        this.router.navigate(['./blog/detail', {id: res.data}]);
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