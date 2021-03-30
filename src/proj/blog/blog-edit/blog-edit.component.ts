import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-blog-edit',
  templateUrl: './blog-edit.component.html',
  styleUrls: ['./blog-edit.component.less']
})
export class BlogEditComponent implements OnInit {
  listOfOption: Array<{ label: string; value: number }> = [];
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private srv: ArticleService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {
    this.form  = this.fb.group({
      id: [null],
      title: [null, [ Validators.required, Validators.minLength(4), Validators.maxLength(40) ]],
      descItem: [null, [ Validators.required, Validators.minLength(4), Validators.maxLength(200) ]],
      tagList: [null, [ Validators.required]],
      content: [null, [ Validators.required, Validators.minLength(10), Validators.maxLength(1200) ]]
    })
    this.listOfOption = listOfOption;
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
    this.srv.save(v).subscribe(res=>{
      if(res.isSuccess()){
        this.router.navigate(['./blog/detail', {id: res.data}]);
      }
    })
  }
}

let listOfOption = [
  {label: '创意', value:1},
  {label: '设计', value:2},
  {label: '文化', value:3},
]