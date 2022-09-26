import { Component,OnInit } from '@angular/core';
import { MenuTree } from 'src/app/biz/model/common/menu.model';

@Component({
  selector: 'app-tool-home',
  templateUrl: './tool-home.component.html',
  styleUrls: ['./tool-home.component.less']
})
export class ToolHomeComponent implements OnInit {
  customNavs: MenuTree[]=[
    {
      title: '数据处理',
      type: 'sub',
      children: [
        {
          title: 'json格式化',
          type: 'router',
          route: '/tool/home/base64'
        },{
          title: '谷歌浏览器书签转json',
          type: 'router',
          route: '/tool/home/base64'
        },{
          title: '正则在线测试',
          type: 'router',
          route: '/tool/home/base64'
        },{
          title: 'url转json',
          type: 'router',
          route: '/tool/home/base64'
        },{
          title: 'crv转json',
          type: 'router',
          route: '/tool/home/base64'
        },{
          title: 'json转base64',
          type: 'router',
          route: '/tool/home/base64'
        },
      ]
    },{
      title: '颜色',
      type: 'sub',
      children: [
        {
          title: '颜色格式转化',
          type: 'router',
          route: '/tool/home/base64'
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
