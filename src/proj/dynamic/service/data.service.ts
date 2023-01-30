import { ApplicationRef, Injectable, OnDestroy, OnInit } from "@angular/core";
import { concat, interval, Subject, timer } from "rxjs";
import { first, map, mapTo, switchMap, take, takeUntil, tap, timeInterval } from "rxjs/operators";

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
    list: [{
      label: '标题1',
      value: '这是一段描述文字1'
    },{
      label: '标题2',
      value: '这是一段描述文字2'
    },{
      label: '标题3',
      value: '这是一段描述文字3'
    },{
      label: '标题4',
      value: '这是一段描述文字4'
    }],
    tabs:{
      ngcontents: [
        "tab1",
        "tab2",
        "tab3"
      ],
      contentIndex: 1
    }
  }
  constructor(
    private appRef: ApplicationRef
  ) {}

  destroy(){
    this.unsub$.next()
    this.unsub$.complete()
  }
  init(){
    this.appRef.isStable.pipe(
      first(stable=>stable),
      switchMap(()=>interval(800000)),
      takeUntil(this.unsub$)
    ).subscribe(res=>{
      console.log(res)
    })
  }
  setArray(a1,a2){
    a1.length=a2.length
    a2.forEach((item,index)=>{
      a1[index]=item
    })
  }
  fetchUserData(data){
    let resp = [
      {
        "label": "33",
        "value": 1503
      },
      {
        "label": "34",
        "value": 2503
      },
      {
        "label": "35",
        "value": 3503
      },
      {
        "label": "333",
        "value": 1503
      },
      {
        "label": "343",
        "value": 2503
      },
      {
        "label": "353",
        "value": 3503
      }
    ]
    return timer(2000).pipe(
      mapTo(resp)
    )
  }
}
