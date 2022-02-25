import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/biz/services/common/user.service';
import { MessageUtilService } from 'src/app/core/services/message-util.service';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.less']
})
export class CategoryEditComponent implements OnInit {

  categoryValue = null
  validateForm!: FormGroup;
  categoryData = null
  userInfo = null

  get categoryList(){
    return this.validateForm.get('categoryList') as FormArray
  }
  constructor(
    private fb: FormBuilder,
    private srv: ArticleService,
    private userSrv:UserService,
    private message: MessageUtilService,) {
    }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      categoryList: this.fb.array([])
    });

    this.userSrv.userEvent.subscribe(v=>{
      if(v.id){
        this.userInfo = v
        this.getCategory(v.id).subscribe(res => {
          if(res.isSuccess()){
            this.categoryData = res.data
            this.categoryData.forEach(v=>{
              this.categoryList.push(this.fb.group({
                id: this.fb.control(v.id),
                name: this.fb.control(v.name)
              }))
            })
          }
        })
      }
    })
  }
  // 路由守卫调用
  isFormDirty(){
    return this.validateForm.dirty
  }
  /**
   * 添加分类
   * @returns 
   */
  addCategory(): void {
    if(!this.categoryValue){
      return null
    }
    const params={
      name: this.categoryValue
    }
    this.srv.saveCategory(params).subscribe(res=>{
      if(res.isSuccess()){
        this.categoryList.push(this.fb.group({
          id: this.fb.control(res.data.id),
          name: this.fb.control(this.categoryValue)
        }))
        this.categoryValue = null
        this.message.success('添加分类成功。')
        this.validateForm.markAsPristine()
      }
    })
    
  }
  /**
   * 删除分类
   * @param i 
   * @param data 
   */
  removeCategory(i, data): void {
    this.srv.delCategory(data.id).subscribe(res=>{
      if(res.isSuccess()){
        this.categoryList.removeAt(i)
        this.message.success('删除分类成功。')
      }
    })
  }
  /**
   * 修改分类
   * @param data 
   */
  editCategory(data: {id:number, name:string}): void {
    this.srv.saveCategory(data).subscribe(res=>{
      if(res.isSuccess()){
        this.message.success('修改分类成功。')
        this.validateForm.markAsPristine()
      }
    })
  }
  /**
   * 获取分类
   * @param id 
   * @returns 
   */
  getCategory(id){
    return this.srv.getCategory({id})
  }
}
