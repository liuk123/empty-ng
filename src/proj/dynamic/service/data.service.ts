import { Injectable } from "@angular/core";

@Injectable()
export class DataService{
  data=[
    {
      id: '123',
      compIds:['ee5eb883-90d6-4119-a00e-3930d0ad899c'],
      data:{
        data: '接口数据222'
      },
      explain:{
        title: '一个测试的字符串',
        desc: {
          data: 'string'
        }
      }
    }
  ]
  constructor() {}
}