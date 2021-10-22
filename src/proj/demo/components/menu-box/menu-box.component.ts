import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-box',
  templateUrl: './menu-box.component.html',
  styleUrls: ['./menu-box.component.less']
})
export class MenuBoxComponent implements OnInit {

  menuData=[
    {title:'网络能力', isSelected: true, children: [
      {title:'基站', isSelected: false},
      {title:'负荷'},
      {title:'业务量'},
      {title:'内容源', children:[
        {title:'内容源感知异常'},
      ]},
      {title:'故障', children:[
        {title:'大面积断站'},
      ]}
    ]},
    {title:'用户感知', isSelected: false, children: [
      {title:'应用'},
      {title:'投诉', children:[
        {title:'栅格投诉预警'},
        {title:'区县投诉预警'},
      ]},
      {title:'感知', children:[
        {title:'微信质差'},
        {title:'短时二次呼'},
        {title:'5GSA抖音'},
      ]},
      {title:'装维'}
    ]},
  ]
  constructor() { }

  ngOnInit(): void {
  }
  menuClick(item){
    item.isSelected = !item.isSelected
  }

}
