import { ApplicationRef, Injectable, OnDestroy, OnInit } from "@angular/core";
import { concat, interval, Subject, timer } from "rxjs";
import { first, map, mapTo, switchMap, take, takeUntil, tap, timeInterval } from "rxjs/operators";

@Injectable()
export class DataService {

  unsub$ = new Subject()
  orignData={
    users:{
      name: 'liuk123',
      value: '123',
      isLeaf: true
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
      isLeaf: true
    },
    list: {
      demo1: [{
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
      demo2: [{
        label: '标题11',
        value: '这是一段描述文字1222'
      },{
        label: '标题12',
        value: '这是一段描述文字2222'
      },{
        label: '标题13',
        value: '这是一段描述文字3222'
      },{
        label: '标题14',
        value: '这是一段描述文字4222'
      }]
    },
    tabs:{
      contentIndex: 1,
      isLeaf: true
    },
    panel:{
      title: '标题',
      isLeaf: true
    },
    table: {
      data: [
        {index: 1, name: '名称一名称一名称一名称一名称一名称一', value: 56, isSuccess: true},
        {index: 2, name: '名称一', value: 56, isSuccess: true},
        {index: 3, name: '名称一', value: 56, isSuccess: true},
        {index: 4, name: '名称一', value: 56, isSuccess: true},
        {index: 5, name: '名称一', value: 56, isSuccess: true},
      ],
      header: [
        {
          key: 'index',
          label: '排名',
          type: 'input',
          width: 60,
        },
        {
          key: 'name',
          label: '名称',
          type: 'input',
          width: 80,
        },
        {
          key: 'value',
          label: '数量',
          type: 'input',
          width: 60,
        },
        {
          key: 'isSuccess',
          label: '是否成功',
          width: 80,
          type: 'option',
          option: {
            true: '成功',
            false: '失败',
          }
        },
      ]
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
