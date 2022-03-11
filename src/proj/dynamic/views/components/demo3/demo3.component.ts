import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo3',
  templateUrl: './demo3.component.html',
  styleUrls: ['./demo3.component.less']
})
export class Demo3Component implements OnInit {

  contentIndex=null
  ngcontents=[]

  constructor() { }

  ngOnInit(): void {
  }
  selTab(item){
    this.contentIndex = item
  }

}
