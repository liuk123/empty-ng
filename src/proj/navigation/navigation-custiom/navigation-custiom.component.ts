import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation-custiom',
  templateUrl: './navigation-custiom.component.html',
  styleUrls: ['./navigation-custiom.component.less']
})
export class NavigationCustiomComponent implements OnInit {

  customNavs
  constructor() { }

  ngOnInit(): void {
    this.customNavs = customNavs
  }

}
let customNavs = [
  {
    "title": "Hot * Recommend",
    "descItem": "发现有趣的内容",
  },
  {
    "title": "Music * Fm",
    "descItem": "发现独特的音乐",
  },
  {
    "title": "Movie * Video",
    "descItem": "发现优质视频",
  },
  {
    "title": "Gallery * Pictures",
    "descItem": "寻找壁纸及图片的好地方",
  },
  {
    "title": "App * PC",
    "descItem": "App应用及软件推荐",
  },
  {
    "title": "Forum * Resources",
    "descItem": "寻找想要的资源",
  },
  {
    "title": "Inspiration * Design",
    "descItem": "设计灵感的社区",
  },
  {
    "title": "Tool * Web",
    "descItem": "web在线工具",

  },
  {
    "title": "Code * Community",
    "descItem": "学习与成长的社区",
  },{
    "title": "Note * Store",
    "descItem": "记录与存储",
  }

]