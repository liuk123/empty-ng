import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import { debounceTime, filter, switchMap, takeUntil } from 'rxjs/operators';
import { HttpUtilService } from 'src/app/biz/services/common/http-util.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchComponent implements OnInit, OnDestroy {

  searchUriData=[];
  form: FormGroup=this.fb.group({
    searchValue: ''
  })

  tips:any[]
  unsub$ = new Subject()

  get searchValue(){
    return this.form.get('searchValue')
  }

  constructor(
    private cf: ChangeDetectorRef,
    private http: HttpUtilService,
    private fb: FormBuilder
  ) { }

  ngOnDestroy(): void {
    this.unsub$.next()
    this.unsub$.complete()
  }
  ngOnInit(): void {
    this.http.get('/assets/data/search.json').subscribe(res=>{
      this.searchUriData = res.search;
      this.cf.markForCheck()
    })
    this.searchValue.valueChanges.pipe(
      filter(v=>{
        if(!v?.trim()){
          this.clearTip()
          // this.cf.markForCheck()
          return false
        }
        return !this.tips?.includes(v)
      }),
      debounceTime(1500),
      switchMap(v=>this.searchTips(v)),
      takeUntil(this.unsub$)
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
