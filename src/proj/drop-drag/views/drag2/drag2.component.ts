import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-drag2',
  templateUrl: './drag2.component.html',
  styleUrls: ['./drag2.component.less']
})
export class Drag2Component implements OnInit {

  @Input() componentId:string =''

  menuData=[
    {name:'网络能力', isSelected: true, children: [
      {name:'基站', isSelected: false},
      {name:'负荷'},
      {name:'业务量'},
      {name:'内容源', children:[
        {name:'内容源感知异常'},
      ]},
      {name:'故障', children:[
        {name:'大面积断站'},
      ]}
    ]},
    {name:'用户感知', isSelected: false, children: [
      {name:'应用'},
      {name:'投诉', children:[
        {name:'栅格投诉预警'},
        {name:'区县投诉预警'},
      ]},
      {name:'感知', children:[
        {name:'微信质差'},
        {name:'短时二次呼'},
        {name:'5GSA抖音'},
      ]},
      {name:'装维'}
    ]},
  ]
  constructor() {}

  ngOnInit(): void {
  }
  menuClick(item){
    item.isSelected = !item.isSelected
  }

}
