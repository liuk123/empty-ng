import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo3',
  templateUrl: './demo3.component.html',
  styleUrls: ['./demo3.component.less']
})
export class Demo3Component implements OnInit {

  curContent=null
  ngcontents=[]

  constructor() { }

  ngOnInit(): void {
  }
  selTab(item){
    this.curContent = item
  }

}
