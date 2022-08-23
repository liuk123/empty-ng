import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { of, throwError } from 'rxjs';
import { catchError, debounceTime, filter, switchMap } from 'rxjs/operators';
import { HttpUtilService } from 'src/app/biz/services/common/http-util.service';

@Component({
  selector: 'app-navigation-home',
  templateUrl: './navigation-home.component.html',
  styleUrls: ['./navigation-home.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationHomeComponent implements OnInit {
  
  searchUriData=[];
  form: FormGroup=this.fb.group({
    searchValue: ''
  })

  tips:any[]

  get searchValue(){
    return this.form.get('searchValue')
  }

  constructor(
    private cf: ChangeDetectorRef,
    private http: HttpUtilService,
    private fb: FormBuilder
    ) { }

  ngOnInit(): void {
    this.http.get('/assets/data/search.json').subscribe(res=>{
      this.searchUriData = res.search;
      this.cf.markForCheck()
    })
    this.searchValue.valueChanges.pipe(
      debounceTime(500),
      filter(v=>{
        if(!v?.trim()){
          this.clearTip()
          this.cf.markForCheck()
          return false
        }
        return !this.tips?.includes(v)
      }),
      switchMap(v=>this.searchTips(v)),
      catchError(err=>throwError(err))
    ).subscribe(res=>{
      if(res.isSuccess()){
        this.tips = res.data?.map(v=>v.q)
        this.cf.markForCheck()
      }
    })
  }

  search(searchUri:string,indexUri:string = '',value=null){
    let v=value??this.searchValue.value
    let url=v?searchUri + encodeURIComponent(v):indexUri
    this.clearTip()
    window.open(url, '_blank')
  }
  selSearchList(v){
    this.searchValue.setValue(v)
  }
  clearSearch(){
    this.searchValue.reset()
    this.clearTip()
  }
  clearTip(){
    this.tips = []
  }
  searchTips(data){
    let params = {
      wd: data
    }
    return this.http.get('/nodeapi/baidu/tips',{params,Headers: this.http.JsonHttpHeader})
  }
}
