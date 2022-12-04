import { ApplicationRef, Injectable, OnDestroy, OnInit } from "@angular/core";
import { concat, interval, Subject, timer } from "rxjs";
import { first, mapTo, take, takeUntil, timeInterval } from "rxjs/operators";

@Injectable()
export class DataService {

  unsub$ = new Subject()
  orignData={
    users:{
      name: 'liuk123',
      value: '123'
    },
    chartList: {
      value: [
        {
          "label": "33",
          "value": 150
        },
        {
          "label": "34",
          "value": 250
        },
        {
          "label": "35",
          "value": 350
        }
      ],
      axis: "label*value",
    },
    tabs:{
      ngcontents: [
        "tab1",
        "tab2",
        "tab3"
      ],
      contentIndex: 1
    }
  }
  constructor() {}

  destroy(){
    this.unsub$.next()
    this.unsub$.complete()
  }
  init(){
    const everyTime$ = interval(80000)
    everyTime$.pipe(takeUntil(this.unsub$)).subscribe(v=>{
      this.orignData.users.name+=1
      console.log(this.orignData.users.name)
    })
  }
  fetchUserData(data){
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
