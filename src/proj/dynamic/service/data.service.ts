import { ApplicationRef, Injectable } from "@angular/core";
import { DefaultDataService } from "./defaultData.service";

@Injectable()
export class DataService extends DefaultDataService {

  data={
    user: {
      name: 'liuk123',
      phone: '13256192891',
      desc: '作为一名前端工程师，一直想写一点东西，大家看上去很厉害的那种，奈何技术有限。',
      isLeaf: true
    },
    interest: {
      title: '兴趣爱好',
      content: [
          {
            name: '英雄联盟',
            desc: '昨天看了一下面板，六千多长的游戏时长。'
          },
          {
            name: '穿越火线',
            desc: '已经放弃了，自从换了大屏的电脑，开始晕3D了'
          },
          {
            name: '乒乓球',
            desc: '技术很水，喜欢和玩的好的，还让着我的人玩'
          },
          {
            name: '慢跑步',
            desc: '坚持过最长时间是半年'
          }
      ]
    },
    plan: {
      title: '这是我最近的计划状态',
      content: [
        {
          name: '继续跑步',
          desc: '天道酬勤',
          value: 70,
          unit: '天'
        },{
          name: '注意饮食',
          desc: '天道酬勤',
          value: 70,
          unit: '天'
        },{
          name: '良好的作息',
          desc: '天道酬勤',
          value: 70,
          unit: '天'
        },{
          name: '努力工作',
          desc: '天道酬勤',
          value: 70,
          unit: '天'
        },
      ]
    },
    overview: {
      plan:{
        name: '计划完成率',
        value: 80,
        unit: '%',
        desc: '近一个月的计划完成情况',
        isLeaf: true
      }
    },
    weight: {
      axis: 'name*value',
      isLeaf: true,
      title: '近期体重变化',
      unit: 'kg',
      value: [
        {
          "name": "03-27",
          "value": 150
        },
        {
          "name": "03-28",
          "value": 250
        },
        {
          "name": "03-29",
          "value": 350
        }
      ]
    }
  }

  constructor(
    appRef: ApplicationRef
  ) {
    super(appRef)
    this.data = {...this.orignData, ...this.data}
  }

  
}
