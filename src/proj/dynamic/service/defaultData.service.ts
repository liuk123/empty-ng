import { ApplicationRef, Injectable } from "@angular/core";
import { interval, Subject, timer } from "rxjs";
import { first, mapTo, switchMap, takeUntil } from "rxjs/operators";

@Injectable()
export class DefaultDataService {

  unsub$ = new Subject()
  orignData={
    buttons:{
      confirm:"确认",
      cancel: "取消",
      nextStep: '下一步',
      prevStep: '上一步',
      close: '关闭'
    },
    url:{
      default: 'assets/image/blog/d01.jpg',
      iconName: 'home'
    },
    text:{
      default: '长风破浪会有时，直挂云帆济沧海',
      textObj: {
        name: "主标题1",
        value: 60,
        unit: '天',
        desc: "这是副标题"
      },
      textList:[
        {
          name: "主标题21",
          value: 60,
          unit: '%',
          desc: "这是副标题"
        },{
          name: "主标题21",
          value: 60,
          unit: '%',
          desc: "这是副标题"
        } 
      ]
    },
    chartList: {
      value: [
        {
          "name": "02-04",
          "value": 150
        },
        {
          "name": "02-05",
          "value": 250
        },
        {
          "name": "02-06",
          "value": 350
        }
      ],
      axis: "name*value",
      isLeaf: true
    },
    list: {
      list1: [{
        name: '标题1',
        desc: '这是一段描述文字1'
      },{
        name: '标题2',
        desc: '这是一段描述文字2'
      },{
        name: '标题3',
        desc: '这是一段描述文字3'
      },{
        name: '标题4',
        desc: '这是一段描述文字4'
      }],
      list2: [{
        name: '标题11',
        desc: '这是一段描述文字1222'
      },{
        name: '标题12',
        desc: '这是一段描述文字2222'
      },{
        name: '标题13',
        desc: '这是一段描述文字3222'
      },{
        name: '标题14',
        desc: '这是一段描述文字4222'
      }]
    },
    tabs:{
      contentIndex: 1,
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

  interval = this.appRef.isStable.pipe(
    first(stable=>stable),
    switchMap(()=>interval(800000)),
    takeUntil(this.unsub$)
  )

  constructor(
    public appRef: ApplicationRef
  ) {}

  destroy(){
    this.unsub$.next()
    this.unsub$.complete()
  }
  init(){

  }
  
  setArray(a1,a2){
    a1.length=a2.length
    a2.forEach((item,index)=>{
      a1[index]=item
    })
  }
  /**
   * 模拟请求
   * @param data 
   * @returns 
   */
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
