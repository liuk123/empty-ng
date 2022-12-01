import { ApplicationRef, Injectable, OnDestroy, OnInit } from "@angular/core";
import { concat, interval, Subject, timer } from "rxjs";
import { first, mapTo, take, takeUntil, timeInterval } from "rxjs/operators";

@Injectable()
export class DataService {

  unsub$ = new Subject()
  data={
    user:{
      name: 'liuk123'
    },
  }
  data1=[
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
  orignData={
    user:{
      title: '用户列表'
    }
  }
  intervalData={
    3: [123]
  }
  constructor(
    // private appRef: ApplicationRef
  ) {}

  destroy(){
    this.unsub$.next()
    this.unsub$.complete()
  }
  init(){
    // this.appRef.isStable.subscribe(v=>console.log(v))
    // const appIsStable$ = this.appRef.isStable.pipe(first(isStable=>isStable===true))
    const everyTime$ = interval(8000)
    // const interval$ = concat(appIsStable$, everyTime$)
    everyTime$.pipe(takeUntil(this.unsub$)).subscribe(v=>{
      console.log(111)
      console.log(v)
    })
  }
  fetchUserData(data){
    console.log(data)
    return timer(2000).pipe(
      mapTo({
      resultCode:1,
      resultMsg: '获取成功',
      data: [
        {
            "genre": "33",
            "sold": 150
        },
        {
            "genre": "34",
            "sold": 250
        },
        {
            "genre": "35",
            "sold": 350
        }
    ],
    }))
  }
}
