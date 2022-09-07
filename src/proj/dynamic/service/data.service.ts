import { ApplicationRef, Injectable, OnDestroy, OnInit } from "@angular/core";
import { concat, interval } from "rxjs";
import { first } from "rxjs/operators";

@Injectable()
export class DataService implements OnDestroy{
  data=[
    {
      id: '123',
      // 组件id
      compIds:['ee5eb883-90d6-4119-a00e-3930d0ad899c'],
      // 请求数据
      req:{},
      // 接收数据
      rep:{
        data: '接口数据222'
      },
      lastUpTime: 123,
      intervalTime: 3,
      // 接口解释
      explain:{
        title: '一个测试的字符串',
        desc: {
          data: 'string'
        }
      }
    }
  ]
  intervalData={
    3: [123]
  }
  constructor(private appRef: ApplicationRef) {}

  ngOnDestroy(): void {
    console.log(123)
  }
  init(){
    this.appRef.isStable.subscribe(v=>console.log(v))
    // const appIsStable$ = this.appRef.isStable.pipe(first(isStable=>isStable===true))
    // const everyTime$ = interval(1000)
    // const interval$ = concat(appIsStable$, everyTime$)
    // interval$.subscribe(v=>{
    //   console.log(111)
    //   console.log(v)
    // })
  }
  fetchData(data){
    
  }
}