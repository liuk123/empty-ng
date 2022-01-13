import { AfterViewInit, Component, ElementRef, HostListener, OnInit, QueryList, ViewChildren } from '@angular/core';
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
          title: '谷歌浏览器书签转json',
          type: 'router',
          route: '/nav/home'
        }
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
