import { Component, OnInit } from '@angular/core';
import { JsUtilService } from 'src/app/shared/utils/js-util';
import { Navigation } from '../model/navigation';

@Component({
  selector: 'app-navigation-custiom',
  templateUrl: './navigation-custiom.component.html',
  styleUrls: ['./navigation-custiom.component.less']
})
export class NavigationCustiomComponent implements OnInit {

  customNavs
  customData: Navigation[]
  selectData: Navigation[]
  constructor(
    private jsutil: JsUtilService
  ) { }

  ngOnInit(): void {
    this.customNavs = customNavs
    this.customData = data.map(v=>({
      ...v,
      type: 'sub'
    }))
    this.selectData = this.findItem(this.customData, 2).children
  }
  selectNav(id){
    let tem = this.findItem(this.customData, id)
    if(tem){
      this.selectData = tem.children
    }
  }
  /**
   * 根据id 找相应的对象
   * @param data Object Array
   * @param id 
   * @returns Object
   */
  findItem(data,id){
    if(this.jsutil.isArray(data)){
      for(let i=0; i<data.length;i++){
        let tem = this.findItem(data[i],id)
        if(tem){
          return tem
        }
      }
    }else if(this.jsutil.isObject(data)){
      if(data.id == id){
        return data
      }
      if(data.children){
        return this.findItem(data.children,id)
      }
    }
  }

}
let customNavs = [
  {
    "id": 22,
    "title": "22",
    "type": "sub",
    "selected": true,
    "children": [
      {
        "id": 2,
        "title": "2",
      },
      {
        "id": 21,
        "title": "21",
      },
    ]
  },
  {
    "title": "Gallery * Pictures",
  },
  {
    "title": "App * PC",
  },
  {
    "title": "Forum * Resources",
  },
  {
    "title": "Inspiration * Design",
  },
  {
    "title": "Tool * Web",

  },
  {
    "title": "Code * Community",
  },{
    "title": "Note * Store",
  }

]
let data = [
  { "id": 2,
    "title": "2Music * Fm",
    "descItem": "发现独特的音乐",
    "children": [
      {
        "id": 21,
        "title": "21douban.fM",
        "descItem": "豆瓣FM",
        "link": "https://douban.fm",
        "type": "link"
      },
      {
        "id": 22,
        "title": "22街声",
        "descItem": "StreetVoice",
        "link": "https://streetvoice.cn",
        "type": "link"
      },
      {
        "id": 23,
        "title": "23无解音乐网",
        "descItem": "独立音乐网络社区",
        "link": "https://www.wooozy.cn/",
        "type": "link"
      },
      {
        "id": 21,
        "title": "21douban.fM",
        "descItem": "豆瓣FM",
        "link": "https://douban.fm",
        "type": "link"
      },
      {
        "id": 22,
        "title": "22街声",
        "descItem": "StreetVoice",
        "link": "https://streetvoice.cn",
        "type": "link"
      },
      {
        "id": 23,
        "title": "23无解音乐网",
        "descItem": "独立音乐网络社区",
        "link": "https://www.wooozy.cn/",
        "type": "link"
      },{
        "id": 21,
        "title": "21douban.fM",
        "descItem": "豆瓣FM",
        "link": "https://douban.fm",
        "type": "link"
      },
      {
        "id": 22,
        "title": "22街声",
        "descItem": "StreetVoice",
        "link": "https://streetvoice.cn",
        "type": "link"
      },
      {
        "id": 23,
        "title": "23无解音乐网",
        "descItem": "独立音乐网络社区",
        "link": "https://www.wooozy.cn/",
        "type": "link"
      }
    ]
  },
  {
    "id": 3,
    "title": "Movie * Video",
    "descItem": "发现优质视频",
    "children": [
      {
        "id": 31,
        "title": "31bilibili",
        "descItem": "哔哩哔哩 (゜-゜)つロ 干杯~",
        "link": "https://www.bilibili.com/",
        "type": "link"
      },
      {
        "id": 32,
        "title": "32新片场",
        "descItem": "发现全球优质视频和创作",
        "link": "https://www.xinpianchang.com/",
        "type": "link"
      },
      {
        "id": 33,
        "title": "33美剧网",
        "descItem": "在线美剧天堂",
        "link": "https://91mjw.com/",
        "type": "link"
      }
    ]
  }

]