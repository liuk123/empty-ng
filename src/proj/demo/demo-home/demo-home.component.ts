import { Component,OnInit } from '@angular/core';
import { MenuTree } from 'src/app/biz/model/common/menu.model';

@Component({
  selector: 'app-demo-home',
  templateUrl: './demo-home.component.html',
  styleUrls: ['./demo-home.component.less']
})
export class DemoHomeComponent implements OnInit {
  customNavs: MenuTree[]=[
    {
      title: '数据处理',
      type: 'sub',
      children: [
        {
          title: 'json格式化',
          type: 'router',
          route: '/nav/home'
        },{
          title: '谷歌浏览器书签转json',
          type: 'router',
          route: '/nav/home'
        },{
          title: '正则在线测试',
          type: 'router',
          route: '/nav/home'
        },{
          title: 'url转json',
          type: 'router',
          route: '/nav/home'
        },{
          title: 'crv转json',
          type: 'router',
          route: '/nav/home'
        },
      ]
    },{
      title: '颜色',
      type: 'sub',
      children: [
        {
          title: '颜色格式转化',
          type: 'router',
          route: '/nav/home'
        },
      ]
    }
  ]
  constructor() {
  }
  ngOnInit(): void {
  }
  selectNav(data){
    if(data.type=="sub"){
      data.selected = !data.selected
    }
  }
}
